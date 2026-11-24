"use client";

import React from "react";
import Image from "next/image";
import carData from "@/content/car.json";
import { ArrowUpRight, Check, Zap, Sparkles } from "lucide-react";

export default function ModelTrims() {
  const variants = carData.variants;

  const handleSelectVariant = (variantName: string) => {
    const input = document.getElementById("selected-trim") as HTMLSelectElement | null;
    if (input) {
      input.value = variantName;
    }
    const target = document.getElementById("inquire");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="models" className="relative py-24 md:py-32 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F4F4F6] leading-[1.08]">
              Official Variants & Pricing in Nepal.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] max-w-md font-normal leading-relaxed">
            Jinpeng Lingbox AT — Brought to you by Synergy Motors. Open for Booking with easy EMI starting from NPR 20,500/month.
          </p>
        </div>

        {/* Official Financing Callout Banner */}
        <div className="mb-12 p-4 sm:p-5 border border-white/15 bg-white/[0.03] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E8371B] animate-pulse" />
            <span className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base font-bold text-white tracking-wide uppercase">
              Open for Booking
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-[family-name:var(--font-dm-sans)] text-xs">
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-4 h-4 text-white" />
              <span>Easy EMI Available</span>
            </div>
            <div className="flex items-center gap-2 text-[#F4F4F6] font-semibold border-l border-white/15 pl-6">
              <Sparkles className="w-4 h-4 text-[#E8371B]" />
              <span>Monthly EMI starting from NPR 20,500</span>
            </div>
          </div>
        </div>

        {/* 2 Official Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {variants.map((v) => (
            <div
              key={v.id}
              className={`relative border flex flex-col justify-between transition-all duration-300 group ${
                v.popular
                  ? "border-white/30 bg-[#121316] shadow-[0_0_32px_rgba(255,255,255,0.06)]"
                  : "border-white/[0.08] bg-[#0F1013] hover:border-white/20"
              }`}
            >
              {v.popular && (
                <div className="absolute -top-3 left-6 z-20 bg-white text-[#0B0C0E] text-[10px] tracking-[0.16em] uppercase font-bold px-3 py-0.5 rounded-full shadow-lg">
                  PREMIUM · DC FAST CHARGING
                </div>
              )}

              {/* Vehicle Thumbnail */}
              <div className="relative aspect-[16/10] bg-[#0B0C0E] overflow-hidden border-b border-white/[0.06]">
                <Image
                  src={v.image}
                  alt={v.fullName}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1013] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-white">
                  {v.rangeFormatted}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[#F4F4F6] mb-6">
                    {v.fullName}
                  </h3>

                  {/* Price Tag */}
                  <div className="py-4 border-t border-b border-white/[0.08] mb-6">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.2em] uppercase text-[#8E939E] block mb-1">
                      Showroom Price · Nepal
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-[#F4F4F6]">
                        {v.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Verified Highlights */}
                  <ul className="space-y-3 mb-8">
                    {v.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="font-[family-name:var(--font-dm-sans)] text-xs text-[#8E939E] flex items-center gap-2.5"
                      >
                        <Check className="w-3.5 h-3.5 text-white shrink-0" />
                        <span className="text-white/90">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectVariant(v.name)}
                  className={`group/btn w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 font-[family-name:var(--font-dm-sans)] ${
                    v.popular
                      ? "bg-white text-[#0B0C0E] hover:bg-[#F4F4F6] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : "border border-white/20 text-[#F4F4F6] hover:bg-white hover:text-[#0B0C0E] hover:border-white"
                  }`}
                >
                  <span>Select {v.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
