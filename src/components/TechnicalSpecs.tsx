"use client";

import React from "react";
import Image from "next/image";
import carData from "@/content/car.json";
import { Check } from "lucide-react";

export default function TechnicalSpecs() {
  const verifiedHighlights = carData.verifiedSpecs.highlights;

  const keyDials = [
    { value: "340", unit: "KM", label: "MAX RANGE", sub: "TOP VARIANT" },
    { value: "175", unit: "MM", label: "GROUND CLEARANCE", sub: "OFFICIAL SPEC" },
    { value: "35", unit: "KW", label: "ELECTRIC MOTOR", sub: "INSTANT TORQUE" },
    { value: "DC", unit: "FAST", label: "RAPID CHARGING", sub: "TOP VARIANT READY" },
  ];

  return (
    <section id="specifications" className="relative py-20 sm:py-24 md:py-32 bg-[#F8F9FA] dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] mb-3">
              OFFICIAL SPECIFICATIONS
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#111215] dark:text-[#F4F4F6] leading-[1.1]">
              Verified Specifications.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-md font-normal leading-relaxed">
            Official vehicle specifications verified by Synergy Motors Nepal.
          </p>
        </div>

        {/* 4 Key Metric Dials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {keyDials.map((m, idx) => (
            <div
              key={idx}
              className="border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-4 sm:p-7 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="flex items-baseline gap-1.5 mb-2 sm:mb-3">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  {m.value}
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm font-semibold text-[#5E636E] dark:text-[#8E939E]">
                  {m.unit}
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#111215] dark:text-[#F4F4F6] block">
                  {m.label}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  {m.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Highlights List (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {verifiedHighlights.map((item, idx) => (
              <div
                key={idx}
                className="border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-5 sm:p-6 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                    <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E8371B]" />
                    <span className="font-[family-name:var(--font-dm-sans)] text-[9px] sm:text-[10px] tracking-wider uppercase text-[#5E636E] dark:text-[#8E939E]">
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-xl font-semibold text-[#111215] dark:text-[#F4F4F6] mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Visual Card (4 cols) */}
          <div className="lg:col-span-4 relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-auto min-h-[280px] bg-gradient-to-b from-white via-[#F3F4F6] to-[#E9ECEF] dark:from-[#16181D] dark:via-[#101115] dark:to-[#0A0B0E] border border-black/[0.08] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between p-5 sm:p-8">
            <Image
              src="/images/7.png"
              alt="Jinpeng Lingbox AT Stance"
              fill
              className="object-contain p-4 sm:p-6 opacity-90 transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#0B0C0E] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-[family-name:var(--font-dm-sans)] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                JINPENG LINGBOX AT
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[#111215] dark:text-[#F4F4F6] mt-1">
                Urban Electric Mobility
              </h3>
            </div>

            <div className="relative z-10 pt-4 border-t border-black/10 dark:border-white/15">
              <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#111215]/90 dark:text-[#F4F4F6]/90 leading-relaxed mb-3 sm:mb-4">
                Available in 240 km Base and 340 km Top (Premium) variants with monthly EMI starting from NPR 20,500.
              </p>
              <span className="inline-block font-[family-name:var(--font-dm-sans)] text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] border border-black/10 dark:border-white/10 px-3 py-1 rounded-full bg-black/[0.02] dark:bg-white/[0.02]">
                Synergy Motors Official
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
