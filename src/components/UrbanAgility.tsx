"use client";

import React from "react";
import Image from "next/image";
import { Shield, Zap, Maximize2, BatteryCharging } from "lucide-react";

export default function UrbanAgility() {
  return (
    <section id="vehicle" className="relative py-20 sm:py-24 md:py-32 bg-[#F8F9FA] dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#111215] dark:text-[#F4F4F6] leading-[1.1]">
              Built for Kathmandu Road Conditions.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-md font-normal leading-relaxed">
            Every dimension is chosen for Nepal: 175 mm ground clearance to clear rough patches, responsive 35 kW motor for steep climbs, and a compact 5-door cabin that parks easily anywhere.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Tile 1: 175mm Ground Clearance (7 Cols) */}
          <div className="md:col-span-7 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-5 sm:p-8 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all group overflow-hidden relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  <Shield className="w-3 h-3 text-[#E8371B]" />
                  <span>OFFICIAL SPECIFICATION</span>
                </span>
              </div>

              <div className="flex items-baseline gap-2.5 sm:gap-3 mb-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  175 mm
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  GROUND CLEARANCE
                </span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-md leading-relaxed">
                175 mm unladen clearance protects the battery and chassis from tall speed breakers, rough colony roads, and monsoon potholes.
              </p>
            </div>

            {/* Dedicated Car Visual Stage - completely separated from typography */}
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] my-4 flex items-center justify-center">
              <Image
                src="/images/1.png"
                alt="Jinpeng Lingbox AT Front Fascia"
                fill
                className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-[family-name:var(--font-dm-sans)]">
              <span className="text-[#5E636E] dark:text-[#8E939E]">Chassis Stance</span>
              <span className="text-[#111215] dark:text-[#F4F4F6] font-medium">175 mm Unladen Clearance</span>
            </div>
          </div>

          {/* Tile 2: Up to 340 km Range (5 Cols) */}
          <div className="md:col-span-5 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-5 sm:p-8 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                <BatteryCharging className="w-3 h-3 text-[#E8371B] dark:text-white" />
                <span>ELECTRIC ENDURANCE</span>
              </span>
            </div>

            <div className="my-6 sm:my-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  340 km
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  MAX RANGE
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-semibold text-[#111215] dark:text-[#F4F4F6] mb-2">
                240 km Base · 340 km Top Variant
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E] leading-relaxed">
                Reliable range for daily office commutes and highway trips, with DC fast charging supported on the Top Variant.
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-[family-name:var(--font-dm-sans)]">
              <span className="text-[#5E636E] dark:text-[#8E939E]">Range Breakdown</span>
              <span className="text-[#111215] dark:text-[#F4F4F6] font-medium">Base: 240 km · Top: 340 km</span>
            </div>
          </div>

          {/* Tile 3: 35 kW Electric Motor (6 Cols) */}
          <div className="md:col-span-6 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-5 sm:p-8 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                <Zap className="w-3 h-3 text-[#E8371B] dark:text-white" />
                <span>POWERTRAIN</span>
              </span>
            </div>

            <div className="my-5 sm:my-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  35 kW
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  ELECTRIC MOTOR
                </span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] leading-relaxed">
                Instant electric motor response gives you quick pickup at traffic signals and smooth, effortless hill starts without engine noise or gear shift lag.
              </p>
            </div>

            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-[family-name:var(--font-dm-sans)]">
              <span className="text-[#5E636E] dark:text-[#8E939E]">Transmission</span>
              <span className="text-[#111215] dark:text-[#F4F4F6] font-medium">Automatic (AT) Direct Drive</span>
            </div>
          </div>

          {/* Tile 4: 5-Door / 4-Adult Cabin (6 Cols) */}
          <div className="md:col-span-6 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-5 sm:p-8 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/20 transition-all group overflow-hidden relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  <Maximize2 className="w-3 h-3 text-[#E8371B] dark:text-white" />
                  <span>PRACTICALITY</span>
                </span>
              </div>

              <div className="flex items-baseline gap-2.5 sm:gap-3 mb-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  5 Doors
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  4 ADULTS
                </span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-sm leading-relaxed">
                Comfortable seating for 4 adults with convenient 5-door access and practical rear cargo space for daily shopping and luggage.
              </p>
            </div>

            {/* Dedicated Car Visual Stage - completely separated from typography */}
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px] my-4 flex items-center justify-center">
              <Image
                src="/images/6.png"
                alt="Jinpeng Lingbox AT Rear Profile"
                fill
                className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-[family-name:var(--font-dm-sans)]">
              <span className="text-[#5E636E] dark:text-[#8E939E]">Cabin Layout</span>
              <span className="text-[#111215] dark:text-[#F4F4F6] font-medium">5-Door Hatchback · 4-Seater</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
