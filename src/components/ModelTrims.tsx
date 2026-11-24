"use client";

import React from "react";
import Image from "next/image";
import carData from "@/content/car.json";
import { Check, ArrowUpRight, Zap, Sparkles } from "lucide-react";

export default function ModelTrims() {
  const variants = carData.variants;

  const handleSelectVariant = () => {
    const el = document.getElementById("inquire");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="models" className="relative py-20 sm:py-24 md:py-32 bg-[#F8F9FA] dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] mb-3">
              OFFICIAL VARIANTS & PRICING
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#111215] dark:text-[#F4F4F6] leading-[1.1]">
              Official Variants & Pricing.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-md font-normal leading-relaxed">
            Brought to you by Synergy Motors. Open for Booking with easy EMI plans starting from NPR 20,500/month.
          </p>
        </div>

        {/* Booking & EMI Callout Banner */}
        <div className="mb-10 sm:mb-12 border border-black/10 dark:border-white/15 bg-white dark:bg-[#0F1013] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8371B] animate-pulse" />
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-sm font-bold text-[#111215] dark:text-white tracking-wide uppercase">
              Open for Booking
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-[family-name:var(--font-dm-sans)] text-xs">
            <div className="flex items-center gap-1.5 text-[#111215] dark:text-white font-medium">
              <Zap className="w-3.5 h-3.5 text-[#E8371B] dark:text-white" />
              <span>Easy EMI Available</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#111215] dark:text-[#F4F4F6] font-semibold border-l border-black/15 dark:border-white/15 pl-4 sm:pl-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E8371B]" />
              <span>Monthly EMI from NPR 20,500</span>
            </div>
          </div>
        </div>

        {/* 2 Official Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          {variants.map((v) => (
            <div
              key={v.id}
              className={`relative border flex flex-col justify-between transition-all duration-300 group ${
                v.popular
                  ? "border-[#E8371B]/40 dark:border-white/30 bg-white dark:bg-[#121316] shadow-xl"
                  : "border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] hover:border-black/20 dark:hover:border-white/20 shadow-sm"
              }`}
            >
              {v.popular && (
                <div className="absolute -top-3 left-6 z-20 bg-[#111215] text-white dark:bg-white dark:text-[#0B0C0E] text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-bold px-3 py-0.5 rounded-full shadow-lg">
                  PREMIUM · DC FAST CHARGING
                </div>
              )}

              {/* Vehicle Thumbnail */}
              <div className="relative aspect-[16/10] bg-gradient-to-b from-[#F3F4F6] via-[#E9ECEF] to-white dark:from-[#16181D] dark:via-[#101115] dark:to-[#0A0B0E] overflow-hidden border-b border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center">
                <Image
                  src={v.image}
                  alt={v.fullName}
                  fill
                  className="object-contain p-5 sm:p-7 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-full bg-white/90 dark:bg-[#0B0C0E]/85 backdrop-blur-md border border-black/10 dark:border-white/15 text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#111215] dark:text-white shadow-sm">
                  {v.rangeFormatted}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-2xl font-bold text-[#111215] dark:text-[#F4F4F6] mb-4 sm:mb-6">
                    {v.fullName}
                  </h3>

                  {/* Price Tag */}
                  <div className="py-3.5 sm:py-4 border-t border-b border-black/[0.08] dark:border-white/[0.08] mb-6">
                    <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.2em] uppercase text-[#5E636E] dark:text-[#8E939E] block mb-1">
                      Showroom Price · Nepal
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                        {v.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Verified Highlights */}
                  <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                    {v.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E] flex items-center gap-2.5"
                      >
                        <Check className="w-3.5 h-3.5 text-[#E8371B] shrink-0" />
                        <span className="text-[#111215] dark:text-white/90 font-medium sm:font-normal">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectVariant()}
                  className={`group/btn w-full py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 font-[family-name:var(--font-dm-sans)] cursor-pointer ${
                    v.popular
                      ? "bg-[#111215] text-white hover:bg-black dark:bg-white dark:text-[#0B0C0E] dark:hover:bg-[#F4F4F6] shadow-md"
                      : "border border-black/20 dark:border-white/20 text-[#111215] dark:text-[#F4F4F6] hover:bg-[#111215] hover:text-white dark:hover:bg-white dark:hover:text-[#0B0C0E]"
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
