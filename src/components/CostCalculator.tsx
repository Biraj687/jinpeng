"use client";

import React, { useState } from "react";
import { TrendingUp, Info } from "lucide-react";

export default function CostCalculator() {
  const [dailyKm, setDailyKm] = useState<number>(35);

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
    <section id="calculator" className="relative py-20 sm:py-24 md:py-32 bg-[#F8F9FA] dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#111215] dark:text-[#F4F4F6] leading-[1.1]">
              Compare Daily Running Costs.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-md font-normal leading-relaxed">
            Estimate your monthly and annual fuel savings when switching from petrol to electric in Kathmandu.
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-5 sm:p-8 md:p-12 relative overflow-hidden transition-all shadow-lg">
          {/* Daily Commute Interactive Slider */}
          <div className="mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <span className="font-[family-name:var(--font-dm-sans)] text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                Daily Commute Distance:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  {dailyKm}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-[0.14em] uppercase text-[#5E636E] dark:text-[#8E939E]">
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
              className="w-full h-2 bg-black/10 dark:bg-white/10 appearance-none cursor-pointer accent-[#E8371B] dark:accent-white rounded-lg"
            />
            <div className="flex justify-between text-[9px] sm:text-[10px] text-[#5E636E] dark:text-[#8E939E] mt-2 font-[family-name:var(--font-dm-sans)]">
              <span>10 km (City)</span>
              <span>35 km (Valley Average)</span>
              <span>100 km (Commuter)</span>
            </div>
          </div>

          {/* Rate Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* Conventional Petrol Vehicle */}
            <div className="border border-black/[0.06] dark:border-white/[0.06] bg-[#F8F9FA] dark:bg-[#121316] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E] block mb-2">
                  CONVENTIONAL PETROL CAR (~12 KM/L)
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#111215] dark:text-[#F4F4F6] block mb-1">
                  NPR {formatNpr(annualPetrolCost)}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E]">
                  Estimated annual petrol expenditure (@ NPR 175/L)
                </span>
              </div>
              <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-[11px] text-[#5E636E] dark:text-[#8E939E]">
                ~NPR {formatNpr(Math.round(annualPetrolCost / 12))} / month
              </div>
            </div>

            {/* Jinpeng Lingbox EV */}
            <div className="border border-[#E8371B]/30 dark:border-white/20 bg-[#F3F4F6] dark:bg-[#16181D] p-5 sm:p-6 flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#E8371B]/10 border border-[#E8371B]/30 text-[9px] font-semibold text-[#E8371B] uppercase tracking-wider">
                Electric
              </div>
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-[#E8371B] font-semibold block mb-2">
                  JINPENG LINGBOX AT (ELECTRIC)
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#111215] dark:text-[#F4F4F6] block mb-1">
                  NPR {formatNpr(annualEvCost)}
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E]">
                  Estimated annual electricity expenditure
                </span>
              </div>
              <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-[11px] text-[#111215] dark:text-[#F4F4F6] font-medium">
                ~NPR {formatNpr(Math.round(annualEvCost / 12))} / month
              </div>
            </div>
          </div>

          {/* Savings Highlight Banner */}
          <div className="border border-black/[0.08] dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.03] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/20 bg-[#E8371B]/10 flex items-center justify-center text-[#E8371B] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E] block">
                  ESTIMATED ANNUAL FUEL SAVINGS
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[#111215] dark:text-[#F4F4F6]">
                  NPR {formatNpr(annualSavings)} / year
                </span>
              </div>
            </div>

            <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-black/10 dark:border-white/10 pt-3 sm:pt-0 sm:pl-6">
              <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-[#5E636E] dark:text-[#8E939E] block">
                5-YEAR ESTIMATED SAVINGS
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[#E8371B] dark:text-white">
                ~NPR {formatNpr(fiveYearSavings)}
              </span>
            </div>
          </div>

          {/* Legal / Formula Transparency Notice */}
          <div className="mt-5 flex items-start gap-2 text-[10px] sm:text-[11px] text-[#5E636E] dark:text-[#8E939E] font-[family-name:var(--font-dm-sans)]">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#5E636E] dark:text-[#8E939E]" />
            <p>
              Illustrative estimate only. Actual consumption and tariffs vary with driving habits, route elevation, charging times, and vehicle passenger loads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
