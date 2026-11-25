"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const TOTAL_FRAMES = 293;

const getFramePath = (index: number): string => {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/car/ezgif-frame-${frameNum}.jpg`;
};

export default function HeroScrollytelling() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);
  const reveal1Ref = useRef<HTMLDivElement | null>(null);
  const reveal2Ref = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const targetFrameRef = useRef<number>(0);
  const renderedFrameRef = useRef<number>(-1);
  const isRenderingRef = useRef<boolean>(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState<boolean>(false);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameIndex - offset;
        if (prev >= 0 && imagesRef.current[prev]?.complete && imagesRef.current[prev]!.naturalWidth > 0) {
          img = imagesRef.current[prev];
          break;
        }
        const next = frameIndex + offset;
        if (next < TOTAL_FRAMES && imagesRef.current[next]?.complete && imagesRef.current[next]!.naturalWidth > 0) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = "#0B0C0E";
    ctx.fillRect(0, 0, width, height);

    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;

    let renderWidth: number;
    let renderHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (width < 768) {
      const scale = Math.min(width / imgWidth, (height * 0.72) / imgHeight);
      renderWidth = imgWidth * scale;
      renderHeight = imgHeight * scale;
      offsetX = (width - renderWidth) / 2;
      offsetY = (height - renderHeight) / 2 + height * 0.08;
    } else {
      const hRatio = width / imgWidth;
      const vRatio = height / imgHeight;
      const coverScale = Math.max(hRatio, vRatio);
      const containScale = Math.min(hRatio, vRatio);
      const targetScale = Math.min(coverScale, containScale * 1.22);

      renderWidth = imgWidth * targetScale;
      renderHeight = imgHeight * targetScale;
      offsetX = (width - renderWidth) / 2;
      offsetY = (height - renderHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  const requestFrameRender = useCallback(() => {
    if (isRenderingRef.current) return;
    isRenderingRef.current = true;

    requestAnimationFrame(() => {
      if (targetFrameRef.current !== renderedFrameRef.current) {
        renderedFrameRef.current = targetFrameRef.current;
        drawFrame(renderedFrameRef.current);
      }
      isRenderingRef.current = false;
    });
  }, [drawFrame]);

  useEffect(() => {
    let isCancelled = false;

    const firstImg = new window.Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = async () => {
      if (isCancelled) return;
      try {
        if ("decode" in firstImg) await firstImg.decode();
      } catch {
        // Fallback if decode is unsupported or fails
      }
      imagesRef.current[0] = firstImg;
      setFirstFrameLoaded(true);
      targetFrameRef.current = 0;
      requestFrameRender();
    };

    const priorityIndices: number[] = [];
    for (let i = 5; i < TOTAL_FRAMES; i += 5) {
      priorityIndices.push(i);
    }

    const remainingIndices: number[] = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      if (i % 5 !== 0) {
        remainingIndices.push(i);
      }
    }

    const loadBatch = (indices: number[], concurrency: number, onComplete?: () => void) => {
      let cursor = 0;
      const loadNext = () => {
        if (isCancelled || cursor >= indices.length) {
          if (onComplete) onComplete();
          return;
        }
        const chunk = indices.slice(cursor, cursor + concurrency);
        cursor += concurrency;
        let loadedInChunk = 0;

        chunk.forEach((idx) => {
          const img = new window.Image();
          img.src = getFramePath(idx);
          const handleDone = async () => {
            if (isCancelled) return;
            try {
              if ("decode" in img) await img.decode();
            } catch {
              // Fallback if decode is unsupported or fails
            }
            imagesRef.current[idx] = img;
            loadedInChunk++;
            if (loadedInChunk === chunk.length) {
              setTimeout(loadNext, 4);
            }
          };
          img.onload = handleDone;
          img.onerror = handleDone;
        });
      };
      loadNext();
    };

    loadBatch(priorityIndices, 12, () => {
      loadBatch(remainingIndices, 16);
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, requestFrameRender]);

  useEffect(() => {
    const handleResize = () => {
      drawFrame(targetFrameRef.current);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawFrame]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const frameState = { frame: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.0,
        },
      });

      tl.to(
        frameState,
        {
          frame: TOTAL_FRAMES - 1,
          ease: "none",
          duration: 100,
          onUpdate: () => {
            const nextFrame = Math.round(frameState.frame);
            if (nextFrame !== targetFrameRef.current) {
              targetFrameRef.current = nextFrame;
              requestFrameRender();
            }
          },
        },
        0
      );

      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: 16,
            duration: 6,
            ease: "power1.out",
          },
          0
        );
      }

      if (wordmarkRef.current) {
        tl.to(
          wordmarkRef.current,
          {
            opacity: 0,
            x: -36,
            y: -12,
            duration: 18,
            ease: "power1.inOut",
          },
          2
        );
      }

      if (reveal1Ref.current) {
        tl.fromTo(
          reveal1Ref.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 9, ease: "power1.out" },
          25
        );
        tl.to(
          reveal1Ref.current,
          { opacity: 0, y: -24, duration: 9, ease: "power1.in" },
          46
        );
      }

      if (reveal2Ref.current) {
        tl.fromTo(
          reveal2Ref.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 9, ease: "power1.out" },
          60
        );
        tl.to(
          reveal2Ref.current,
          { opacity: 1, duration: 21, ease: "none" },
          69
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [drawFrame, requestFrameRender]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-[#0B0C0E]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0B0C0E]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
        />

        {/* Ambient Scrim Overlay for Cinematic Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-transparent to-[#0B0C0E]/50 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#0B0C0E]/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-l from-[#0B0C0E]/50 via-transparent to-transparent pointer-events-none" />

        {!firstFrameLoaded && (
          <div className="absolute inset-0 bg-[#0B0C0E] flex items-center justify-center pointer-events-none">
            <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-[#8E939E]/60 animate-pulse">
              LOADING STUDIO
            </span>
          </div>
        )}

        <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none p-6 sm:p-10 md:p-14 lg:p-20">
          <div className="relative w-full flex-1 flex items-center">
            {/* At 0% Scroll: Official Emblem + Brandmark */}
            <div
              ref={wordmarkRef}
              className="absolute left-0 md:left-2 lg:left-6 top-[28%] md:top-1/2 -translate-y-1/2 max-w-xl pointer-events-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-7 h-6 sm:w-8 sm:h-7">
                  <Image
                    src="/images/logo.png"
                    alt="Jinpeng Logo"
                    fill
                    className="object-contain drop-shadow-[0_2px_10px_rgba(232,55,27,0.4)]"
                    priority
                  />
                </div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-[11px] font-medium tracking-[0.28em] uppercase text-[#8E939E]">
                  SYNERGY MOTORS · NEPAL
                </span>
              </div>
              <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[clamp(3.25rem,6.5vw,6.5rem)] tracking-[0.06em] uppercase text-[#F4F4F6] leading-[0.92]">
                JINPENG
              </h1>
            </div>

            {/* 25% - 55% (Reveal 1): Product Statement */}
            <div
              ref={reveal1Ref}
              className="absolute left-0 md:left-2 lg:left-6 top-[28%] md:top-1/2 -translate-y-1/2 max-w-lg opacity-0 pointer-events-auto"
            >
              <div className="p-6 sm:p-8 rounded-[24px] bg-[#0B0C0E]/70 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616]/90 border border-white/15 mb-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4202c] animate-pulse" />
                  <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.2em] uppercase text-[#ECEBE7]">
                    Synergy Motors · Nepal
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#F4F4F6] leading-[1.08] mb-3">
                  Lingbox AT
                </h2>

                {/* High-contrast, clean body */}
                <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm md:text-[15px] font-normal text-[#ECEBE7]/90 leading-relaxed max-w-sm mb-6">
                  Brought to you by Synergy Motors. Engineered for Nepal with 175 mm ground clearance and up to 340 km range.
                </p>

                {/* Primary Solid Action Button */}
                <div>
                  <a
                    href="#vehicle"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#ECEBE7] text-[#0B0C0E] hover:bg-white text-xs font-bold tracking-[0.16em] uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <span>EXPLORE VEHICLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 60% - 90% (Reveal 2): Direct Electric Drive */}
            <div
              ref={reveal2Ref}
              className="absolute right-0 md:right-2 lg:right-6 top-[28%] md:top-1/2 -translate-y-1/2 max-w-lg text-left md:text-right opacity-0 pointer-events-auto"
            >
              <div className="p-6 sm:p-8 rounded-[24px] bg-[#0B0C0E]/70 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:items-end">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616]/90 border border-white/15 mb-3.5 self-start md:self-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4202c] animate-pulse" />
                  <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.2em] uppercase text-[#ECEBE7]">
                    Electric Powertrain
                  </span>
                </div>

                {/* Headline in title case, bold display */}
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[#F4F4F6] leading-[1.08] mb-3">
                  Instant Electric Torque.
                </h2>

                <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#ECEBE7]/80 leading-relaxed max-w-sm mb-5 self-start md:self-end">
                  Responsive 35 kW motor for smooth traffic pickup and effortless hill starts across Kathmandu.
                </p>

                {/* Spec Pill Bar with bold numerical typography */}
                <div className="inline-flex items-center border border-white/15 py-2 px-3 sm:px-4 bg-[#161616]/90 rounded-full mb-6 self-start md:self-end">
                  <div className="px-2 sm:px-3 text-center">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm font-bold text-[#F4F4F6]">
                      175 mm
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[9px] font-medium tracking-[0.14em] uppercase text-[#8E939E] ml-1.5 hidden sm:inline">
                      Clearance
                    </span>
                  </div>
                  <span className="w-px h-3.5 bg-white/15" />
                  <div className="px-2 sm:px-3 text-center">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm font-bold text-[#F4F4F6]">
                      340 km
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[9px] font-medium tracking-[0.14em] uppercase text-[#8E939E] ml-1.5 hidden sm:inline">
                      Max Range
                    </span>
                  </div>
                  <span className="w-px h-3.5 bg-white/15" />
                  <div className="px-2 sm:px-3 text-center">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm font-bold text-[#F4F4F6]">
                      35 kW
                    </span>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[9px] font-medium tracking-[0.14em] uppercase text-[#8E939E] ml-1.5 hidden sm:inline">
                      Motor
                    </span>
                  </div>
                </div>

                {/* Primary Solid Action Button */}
                <div className="self-start md:self-end">
                  <a
                    href="#models"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#ECEBE7] text-[#0B0C0E] hover:bg-white text-xs font-bold tracking-[0.16em] uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <span>VIEW VARIANTS & PRICING</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={scrollIndicatorRef}
            className="self-center flex flex-col items-center gap-2 pb-2"
          >
            <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-[#8E939E] font-medium">
              SCROLL
            </span>
            <div className="h-8 w-px bg-white/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
