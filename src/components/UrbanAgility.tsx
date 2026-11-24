"use client";

import React from "react";
import Image from "next/image";
import { Shield, Zap, Maximize2, BatteryCharging } from "lucide-react";

export default function UrbanAgility() {
  return (
    <section id="vehicle" className="relative py-24 md:py-32 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F4F4F6] leading-[1.08]">
              Engineered for Kathmandu’s living streets.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] max-w-md font-normal leading-relaxed">
            Built for Nepal by Synergy Motors: high 175 mm ground clearance, up to 340 km electric range, and a practical 5-door cabin.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: 175mm Ground Clearance (7 Cols) */}
          <div className="md:col-span-7 relative aspect-[16/11] bg-[#121316] border border-white/[0.08] overflow-hidden group flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="/car/ezgif-frame-095.jpg"
              alt="Jinpeng Lingbox AT Front Fascia"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/30 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/15 text-[10px] font-medium tracking-[0.16em] uppercase text-[#F4F4F6]">
                <Shield className="w-3 h-3 text-[#E8371B]" />
                <span>OFFICIAL SPECIFICATION</span>
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#F4F4F6]">
                  175 mm
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.18em] uppercase text-[#8E939E]">
                  GROUND CLEARANCE
                </span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#F4F4F6]/90 max-w-md">
                Clear tall speed breakers, unpaved colony roads, and severe monsoon transitions with confident underbody clearance.
              </p>
            </div>
          </div>

          {/* Tile 2: Up to 340 km Range (5 Cols) */}
          <div className="md:col-span-5 border border-white/[0.08] bg-[#0F1013] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#8E939E]">
                <BatteryCharging className="w-3 h-3 text-white" />
                <span>ELECTRIC ENDURANCE</span>
              </span>
            </div>

            <div className="my-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl font-bold text-[#F4F4F6]">
                  340 km
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.18em] uppercase text-[#8E939E]">
                  MAX RANGE
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#F4F4F6] mb-2">
                240 km Base · 340 km Top Variant
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#8E939E] leading-relaxed">
                Ample range for daily multi-day Valley commutes and intercity travel with DC Fast Charging available on the Top Variant.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-[family-name:var(--font-dm-sans)]">
              <span className="text-[#8E939E]">Range Breakdown</span>
              <span className="text-[#F4F4F6] font-medium">Base Variant: 240 km · Top Variant: Up to 340 km</span>
            </div>
          </div>

          {/* Tile 3: 35 kW Electric Motor (6 Cols) */}
          <div className="md:col-span-6 border border-white/[0.08] bg-[#0F1013] p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#8E939E]">
                <Zap className="w-3 h-3 text-white" />
                <span>POWERTRAIN</span>
              </span>
            </div>

            <div className="my-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#F4F4F6]">
                  35 kW
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.18em] uppercase text-[#8E939E]">
                  ELECTRIC MOTOR
                </span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] leading-relaxed">
                Instant throttle delivery across the powerband, providing smooth, quiet climbing authority on steep Valley inclines.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-[family-name:var(--font-dm-sans)]">
              <span className="text-[#8E939E]">Transmission</span>
              <span className="text-[#F4F4F6] font-medium">Automatic (AT) Direct Drive</span>
            </div>
          </div>

          {/* Tile 4: 5-Door / 4-Adult Cabin (6 Cols) */}
          <div className="md:col-span-6 relative aspect-[16/10] bg-[#121316] border border-white/[0.08] overflow-hidden group flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="/car/ezgif-frame-140.jpg"
              alt="Jinpeng Lingbox AT Side Profile"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/15 text-[10px] font-medium tracking-[0.16em] uppercase text-[#F4F4F6]">
                <Maximize2 className="w-3 h-3 text-white" />
                <span>PRACTICALITY</span>
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-[#F4F4F6]">
                  5 Doors
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.18em] uppercase text-[#8E939E]">
                  4 ADULTS
                </span>
              </div>
              <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#F4F4F6]/90 max-w-sm">
                Comfortable upright 4-passenger cabin geometry for everyday Kathmandu utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
