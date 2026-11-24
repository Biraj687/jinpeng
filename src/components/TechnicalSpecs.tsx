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
    <section id="specifications" className="relative py-24 md:py-32 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#8E939E] mb-3">
              OFFICIAL SPECIFICATIONS
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F4F4F6] leading-[1.08]">
              Verified Specifications.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] max-w-md font-normal leading-relaxed">
            Official performance metrics for the Jinpeng Lingbox AT verified by Synergy Motors Nepal.
          </p>
        </div>

        {/* 4 Key Metric Dials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {keyDials.map((m, idx) => (
            <div
              key={idx}
              className="border border-white/[0.08] bg-[#0F1013] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#F4F4F6]">
                  {m.value}
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#8E939E]">
                  {m.unit}
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.14em] uppercase text-[#F4F4F6] block">
                  {m.label}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E]">
                  {m.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Highlights List (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {verifiedHighlights.map((item, idx) => (
              <div
                key={idx}
                className="border border-white/[0.08] bg-[#0F1013] p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-4 h-4 text-[#E8371B]" />
                    <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-wider uppercase text-[#8E939E]">
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-semibold text-[#F4F4F6] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#8E939E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Visual Card (4 cols) */}
          <div className="lg:col-span-4 relative aspect-[4/5] lg:aspect-auto bg-gradient-to-b from-[#16181D] via-[#101115] to-[#0A0B0E] border border-white/[0.08] overflow-hidden flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="/images/7.png"
              alt="Jinpeng Lingbox AT Stance"
              fill
              className="object-contain p-6 opacity-90 transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#8E939E]">
                JINPENG LINGBOX AT
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#F4F4F6] mt-1">
                Urban Electric Mobility
              </h3>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/15">
              <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#F4F4F6]/90 leading-relaxed mb-4">
                Available in 240 km Base and 340 km Top (Premium) variants with monthly EMI starting from NPR 20,500.
              </p>
              <span className="inline-block font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] border border-white/10 px-3 py-1 rounded-full">
                Synergy Motors Official
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
