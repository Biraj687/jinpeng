"use client";

import React, { useState } from "react";
import { TrendingUp, Info } from "lucide-react";

export default function CostCalculator() {
  const [dailyKm, setDailyKm] = useState<number>(35);

  // Illustrative model parameters based on user-adjustable commute
  // General fuel baseline: 12 km/L @ NPR 175/L petrol
  // General EV baseline: typical domestic electricity tariff assumption (~NPR 8.5/unit)
  const PETROL_RATE_ESTIMATE = 175 / 12; // ~14.58 NPR/km
  const EV_ESTIMATE_PER_KM = 0.95; // illustrative benchmark

  const annualKm = dailyKm * 365;
  const annualPetrolCost = Math.round(annualKm * PETROL_RATE_ESTIMATE);
  const annualEvCost = Math.round(annualKm * EV_ESTIMATE_PER_KM);
  const annualSavings = annualPetrolCost - annualEvCost;
  const fiveYearSavings = annualSavings * 5;

  const formatNpr = (num: number) => {
    return new Intl.NumberFormat("en-IN").format(num);
  };

  return (
    <section id="calculator" className="relative py-24 md:py-32 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F4F4F6] leading-[1.08]">
              Compare Daily Running Costs.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] max-w-md font-normal leading-relaxed">
            Estimate your monthly and annual fuel savings when switching from petrol to electric in Kathmandu.
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="border border-white/[0.08] bg-[#0F1013] p-8 sm:p-12 relative overflow-hidden">
          {/* Daily Commute Interactive Slider */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.16em] uppercase text-[#8E939E]">
                Daily Commute Distance:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#F4F4F6]">
                  {dailyKm}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.14em] uppercase text-[#8E939E]">
                  km / day (~{formatNpr(annualKm)} km / year)
                </span>
              </div>
            </div>

            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={dailyKm}
              onChange={(e) => setDailyKm(Number(e.target.value))}
              aria-label="Daily commute distance in kilometers"
              className="w-full h-1.5 bg-white/10 appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-[10px] text-[#8E939E] mt-2 font-[family-name:var(--font-dm-sans)]">
              <span>10 km (City Route)</span>
              <span>35 km (Valley Average)</span>
              <span>100 km (Ring Road Commute)</span>
            </div>
          </div>

          {/* Rate Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Conventional Petrol Estimate */}
            <div className="border border-white/[0.06] bg-[#121316] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E]">
                  Conventional Petrol Estimate
                </span>
                <span className="text-[10px] text-[#8E939E]">~12 km/L @ NPR 175/L</span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-[#8E939E]">
                  NPR 14.58
                </span>
                <span className="text-xs text-[#8E939E]">/ km</span>
              </div>
              <div className="w-full h-2 bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-[#E8371B]/60" />
              </div>
              <div className="mt-3 flex justify-between text-xs font-[family-name:var(--font-dm-sans)]">
                <span className="text-[#8E939E]">Annual Fuel Estimate:</span>
                <span className="text-[#8E939E] font-semibold">NPR {formatNpr(annualPetrolCost)}</span>
              </div>
            </div>

            {/* Electric Commute Estimate */}
            <div className="border border-white/20 bg-white/[0.03] p-6 flex flex-col justify-between relative">
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#F4F4F6] font-semibold">
                  Electric Commute Estimate
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-white font-medium">
                  Illustrative Model
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-[#F4F4F6]">
                  NPR 0.95
                </span>
                <span className="text-xs text-[#8E939E]">/ km (est.)</span>
              </div>
              <div className="w-full h-2 bg-white/10 overflow-hidden">
                <div className="w-[8%] h-full bg-white" />
              </div>
              <div className="mt-3 flex justify-between text-xs font-[family-name:var(--font-dm-sans)]">
                <span className="text-[#8E939E]">Annual Electricity Estimate:</span>
                <span className="text-white font-bold">NPR {formatNpr(annualEvCost)}</span>
              </div>
            </div>
          </div>

          {/* Savings Callout */}
          <div className="border border-white/20 bg-gradient-to-r from-white/[0.04] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="font-[family-name:var(--font-dm-sans)] text-[11px] font-semibold tracking-[0.18em] uppercase text-[#F4F4F6]">
                  Estimated Annual Fuel Savings
                </span>
              </div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[#F4F4F6]">
                NPR {formatNpr(annualSavings)}
              </p>
            </div>

            <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-white/15 pt-4 sm:pt-0 sm:pl-8">
              <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] block mb-1">
                5-Year Total Estimated Savings
              </span>
              <p className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white">
                NPR {formatNpr(fiveYearSavings)}
              </p>
            </div>
          </div>

          {/* Clarification Disclaimer */}
          <div className="flex items-start gap-2.5 p-4 border border-white/[0.06] bg-[#121316] text-[#8E939E] text-xs font-[family-name:var(--font-dm-sans)]">
            <Info className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
            <span>
              Illustrative estimate only. Real-world electricity consumption varies based on driving habits, terrain gradients, load, air conditioning use, and applicable utility tariff brackets.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
