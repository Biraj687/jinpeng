"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import carData from "@/content/car.json";
import { ArrowUpRight, ArrowLeftRight } from "lucide-react";

type VariantId = "top" | "base";
type FinishColor = "mint" | "white";

export default function ModelTrims() {
  const [activeVariant, setActiveVariant] = useState<VariantId>("top");
  const [activeFinish, setActiveFinish] = useState<FinishColor>("mint");
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  // Touch tracking for mobile swipe
  const touchStartXRef = useRef<number | null>(null);

  // Variant lookup
  const topVariant = carData.variants.find((v) => v.id === "top") || carData.variants[1];
  const baseVariant = carData.variants.find((v) => v.id === "base") || carData.variants[0];
  const currentVariant = activeVariant === "top" ? topVariant : baseVariant;

  const handleSelectVariant = useCallback(
    (id: VariantId) => {
      if (id === activeVariant) return;
      setSlideDirection(id === "top" ? "right" : "left");
      setActiveVariant(id);
      // Default finish: Mint Green on Top Variant, Studio White on Base Variant
      setActiveFinish(id === "top" ? "mint" : "white");
    },
    [activeVariant]
  );

  const toggleVariant = useCallback(() => {
    handleSelectVariant(activeVariant === "top" ? "base" : "top");
  }, [activeVariant, handleSelectVariant]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        toggleVariant();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleVariant]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        // Swiped left -> Base Variant
        handleSelectVariant("base");
      } else {
        // Swiped right -> Top Variant
        handleSelectVariant("top");
      }
    }
    touchStartXRef.current = null;
  };

  const handleBookVariant = (variantId: VariantId) => {
    const trimString = variantId === "top" ? "Top Variant (340 km)" : "Base Variant (240 km)";
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("jinpeng-select-variant", {
          detail: { trim: trimString },
        })
      );
      const el = document.getElementById("inquire");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Image selection based on finish
  const activeCarImage = activeFinish === "mint" ? "/images/45-1.png" : "/images/45.png";
  const animationClass = slideDirection === "right" ? "animate-car-slide-right" : "animate-car-slide-left";

  return (
    <section id="models" className="relative py-20 sm:py-24 md:py-32 bg-[#0b0b0b] border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#8d8d89] mb-2 font-[family-name:var(--font-dm-sans)]">
              Synergy Motors · Nepal
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[#ecebe7] leading-[1.08]">
              Models & Pricing.
            </h2>
          </div>

          {/* Right Header Controls: Status Pill + Segmented Tab Switcher */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Status Pill with #d4202c dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] font-semibold tracking-[0.16em] uppercase text-[#ecebe7]">
              <span className="w-2 h-2 rounded-full bg-[#d4202c] animate-pulse" />
              <span>Open for Booking · Easy EMI</span>
            </div>

            {/* Segmented Pill Tab Switcher */}
            <div className="inline-flex items-center bg-[#161616] border border-white/10 rounded-full p-1">
              <button
                type="button"
                onClick={() => handleSelectVariant("top")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeVariant === "top"
                    ? "bg-[#ecebe7] text-[#0b0b0b] shadow-sm font-bold"
                    : "text-[#bcbec0] hover:text-[#ecebe7]"
                }`}
              >
                Top Variant (Premium)
              </button>
              <button
                type="button"
                onClick={() => handleSelectVariant("base")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeVariant === "base"
                    ? "bg-[#ecebe7] text-[#0b0b0b] shadow-sm font-bold"
                    : "text-[#bcbec0] hover:text-[#ecebe7]"
                }`}
              >
                Base Variant
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Split-Stage Container */}
        <div className="rounded-[28px] border border-white/10 bg-[#000000] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Vertical Rail (lg:col-span-1, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-1 bg-[#161616] border-r border-white/10 flex-col justify-between items-center py-8 px-2">
            <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.28em] text-[#8d8d89] uppercase font-semibold select-none">
              LINGBOX AT
            </div>

            <button
              type="button"
              onClick={toggleVariant}
              className="group flex flex-col items-center gap-2 p-2 hover:opacity-90 transition-opacity cursor-pointer select-none"
              title="Switch Variant"
              aria-label="Switch Variant"
            >
              <span className="w-1 h-8 bg-[#d4202c] rounded-full transition-transform duration-300 group-hover:scale-y-125" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] tracking-[0.2em] uppercase font-semibold text-[#bcbec0] group-hover:text-[#ecebe7] transition-colors py-1">
                Switch Variant
              </span>
            </button>

            <div className="[writing-mode:vertical-rl] rotate-180 text-[9px] tracking-[0.24em] text-[#8d8d89] uppercase font-medium select-none">
              SYNERGY MOTORS
            </div>
          </div>

          {/* Center Studio Car Stage (lg:col-span-7) */}
          <div
            className="lg:col-span-7 bg-[#000000] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Stage Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8d8d89] font-medium font-[family-name:var(--font-dm-sans)]">
                    JINPENG LINGBOX AT
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-[0.14em] uppercase ${
                      activeVariant === "top"
                        ? "bg-[#d4202c]/20 border border-[#d4202c]/40 text-[#ecebe7]"
                        : "bg-white/5 border border-white/10 text-[#bcbec0]"
                    }`}
                  >
                    {activeVariant === "top" ? "Premium" : "Standard"}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[#ecebe7] mt-1 tracking-tight">
                  {currentVariant.name}
                </h3>
              </div>

              {/* Finish Swatches Toggle */}
              <div className="flex items-center gap-1.5 bg-[#161616] border border-white/10 rounded-full p-1 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveFinish("mint")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    activeFinish === "mint"
                      ? "bg-[#0b0b0b] text-[#ecebe7] border border-white/20 font-bold"
                      : "text-[#8d8d89] hover:text-[#ecebe7]"
                  }`}
                  title="Mint Green Finish"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9CD6C1] border border-white/20 shrink-0" />
                  <span>Mint Green</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFinish("white")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    activeFinish === "white"
                      ? "bg-[#0b0b0b] text-[#ecebe7] border border-white/20 font-bold"
                      : "text-[#8d8d89] hover:text-[#ecebe7]"
                  }`}
                  title="Studio White Finish"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EDEDED] border border-white/20 shrink-0" />
                  <span>Studio White</span>
                </button>
              </div>
            </div>

            {/* Center Stage: Car Cutout with Cross-Slide Animation */}
            <div className="relative my-6 sm:my-8 h-[240px] sm:h-[320px] md:h-[380px] w-full flex items-center justify-center select-none overflow-hidden">
              <div
                key={`${activeVariant}-${activeFinish}`}
                className={`relative w-full h-full flex items-center justify-center ${animationClass}`}
              >
                <Image
                  src={activeCarImage}
                  alt={`${currentVariant.fullName} in ${activeFinish === "mint" ? "Mint Green" : "Studio White"}`}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Subtle 1px Studio Horizon Hairline */}
              <div className="absolute bottom-4 left-4 right-4 h-px bg-white/10 pointer-events-none" />
            </div>

            {/* Stage Bottom Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 pt-2 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[11px] font-semibold tracking-wider uppercase text-[#ecebe7]">
                  {currentVariant.rangeFormatted}
                </span>
                {currentVariant.dcFastCharging && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#d4202c]/40 text-[11px] font-semibold tracking-wider uppercase text-[#ecebe7] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4202c]" />
                    <span>DC Fast Charging</span>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleBookVariant(activeVariant)}
                className="px-5 py-2.5 rounded-full bg-[#ecebe7] text-[#0b0b0b] text-xs font-bold tracking-[0.16em] uppercase hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book {activeVariant === "top" ? "Top Variant" : "Base Variant"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Editorial & Spec Panel (lg:col-span-4, bg-[#161616]) */}
          <div className="lg:col-span-4 bg-[#161616] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Headline & Description with #d4202c Accent Bar */}
              <div className="flex items-start gap-3.5">
                <div className="w-1 self-stretch bg-[#d4202c] rounded-full shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-[#ecebe7] leading-snug">
                    {activeVariant === "top"
                      ? "Extended Range & Fast Charge"
                      : "Everyday Urban Electric"}
                  </h4>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#bcbec0] mt-1.5 leading-relaxed font-normal">
                    {activeVariant === "top"
                      ? "Engineered for longer valley transitions and rapid turnarounds with public DC fast charging."
                      : "Optimized for daily Kathmandu urban commuting with agile compact dimensions and 175 mm ground clearance."}
                  </p>
                </div>
              </div>

              {/* Showroom Price Block */}
              <div className="border border-white/10 bg-[#0b0b0b] rounded-[16px] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-[#8d8d89] font-medium">
                    Showroom Price · Nepal
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#d4202c] bg-[#d4202c]/10 px-2 py-0.5 rounded-full">
                    Official
                  </span>
                </div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#ecebe7] tracking-tight">
                  {currentVariant.priceFormatted}
                </div>
                <div className="mt-2 text-xs font-[family-name:var(--font-dm-sans)] text-[#bcbec0] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4202c]" />
                  <span>Monthly EMI starting from NPR 20,500</span>
                </div>
              </div>

              {/* 2x2 Spec Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0b0b0b] border border-white/10 rounded-[16px] p-3.5">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#8d8d89] block mb-1">
                    Range
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-[#ecebe7] block">
                    {currentVariant.rangeKm} km
                  </span>
                  <span className="text-[10px] text-[#8d8d89] block mt-0.5 font-[family-name:var(--font-dm-sans)]">
                    Tested City Cycle
                  </span>
                </div>

                <div className="bg-[#0b0b0b] border border-white/10 rounded-[16px] p-3.5">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#8d8d89] block mb-1">
                    Motor
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-[#ecebe7] block">
                    35 kW
                  </span>
                  <span className="text-[10px] text-[#8d8d89] block mt-0.5 font-[family-name:var(--font-dm-sans)]">
                    Electric Drive
                  </span>
                </div>

                <div className="bg-[#0b0b0b] border border-white/10 rounded-[16px] p-3.5">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#8d8d89] block mb-1">
                    Clearance
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-[#ecebe7] block">
                    175 mm
                  </span>
                  <span className="text-[10px] text-[#8d8d89] block mt-0.5 font-[family-name:var(--font-dm-sans)]">
                    High Stance
                  </span>
                </div>

                <div className="bg-[#0b0b0b] border border-white/10 rounded-[16px] p-3.5">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-[#8d8d89] block mb-1">
                    Charging
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm font-bold text-[#ecebe7] block truncate">
                    {currentVariant.dcFastCharging ? "DC Fast Charging" : "Standard AC"}
                  </span>
                  <span className="text-[10px] text-[#8d8d89] block mt-0.5 font-[family-name:var(--font-dm-sans)]">
                    {currentVariant.dcFastCharging ? "Public & Home" : "Home Socket"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width Variant Switch Button */}
            <button
              type="button"
              onClick={toggleVariant}
              className="w-full py-3.5 rounded-full bg-[#0b0b0b] border border-white/10 hover:border-white/20 text-[#ecebe7] text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>
                {activeVariant === "top"
                  ? "Compare Other Variant — Switch to Base Variant · NPR 23,49,000"
                  : "Switch to Top Variant (Premium) · NPR 25,99,000"}
              </span>
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#d4202c] transition-transform duration-300 group-hover:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
