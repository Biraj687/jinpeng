import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#F3F4F6] dark:bg-[#08090B] border-t border-black/[0.08] dark:border-white/[0.08] text-[#5E636E] dark:text-[#8E939E] py-16 sm:py-20 select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-14 border-b border-black/[0.08] dark:border-white/[0.08]">
          {/* Brand info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-9 h-8">
                <Image
                  src="/images/logo.png"
                  alt="Jinpeng Logo"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(232,55,27,0.35)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#111215] dark:text-[#F4F4F6] tracking-[0.2em] uppercase leading-none">
                  JINPENG
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.28em] uppercase text-[#5E636E] dark:text-[#8E939E] leading-tight mt-0.5">
                  NEPAL
                </span>
              </div>
            </div>

            <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E] leading-relaxed max-w-sm mb-4">
              Jinpeng Lingbox EV — Brought to you by Synergy Motors. Compact urban electric mobility engineered for Kathmandu with 175 mm ground clearance and up to 340 km range.
            </p>
            <div className="text-xs font-[family-name:var(--font-dm-sans)] space-y-1">
              <p className="text-[#111215] dark:text-[#F4F4F6] font-medium">Balkumari, Lalitpur, Nepal</p>
              <p className="text-[#5E636E] dark:text-[#8E939E]">
                Official Showroom:{" "}
                <a href="tel:+9779714574057" className="text-[#111215] dark:text-white font-medium hover:underline">
                  +977 9714574057
                </a>{" "}
                /{" "}
                <a href="tel:+9779849130768" className="text-[#111215] dark:text-white font-medium hover:underline">
                  +977 9849130768
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#111215] dark:text-[#F4F4F6] block mb-4">
              Navigation & Models
            </span>
            <ul className="space-y-2.5 font-[family-name:var(--font-dm-sans)] text-xs">
              <li>
                <a href="#vehicle" className="hover:text-[#111215] dark:hover:text-white transition-colors">Urban Architecture</a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-[#111215] dark:hover:text-white transition-colors">Verified Specifications</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#111215] dark:hover:text-white transition-colors">Running Cost Calculator</a>
              </li>
              <li>
                <a href="#models" className="hover:text-[#111215] dark:hover:text-white transition-colors">Official Variants & Pricing</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#111215] dark:hover:text-white transition-colors">Showroom & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Showroom & Booking Information */}
          <div className="md:col-span-4">
            <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#111215] dark:text-[#F4F4F6] block mb-4">
              Synergy Motors Showroom
            </span>
            <p className="font-[family-name:var(--font-dm-sans)] text-xs leading-relaxed text-[#5E636E] dark:text-[#8E939E] mb-4">
              Visit our official showroom in Balkumari, Lalitpur to inspect the Jinpeng Lingbox AT, explore easy financing plans, and book a test drive.
            </p>
            <div className="border border-black/10 dark:border-white/10 p-3.5 bg-white dark:bg-[#0B0C0E] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.14em] uppercase text-[#E8371B] font-semibold">
                  Open for Booking
                </span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.1em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                  Easy EMI
                </span>
              </div>
              <span className="font-[family-name:var(--font-dm-sans)] text-xs text-[#111215] dark:text-[#F4F4F6] block font-medium">
                Monthly EMI starting from NPR 20,500
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[11px] text-[#5E636E] dark:text-[#8E939E] block mt-1">
                Contact: +977 9714574057 / +977 9849130768
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-[family-name:var(--font-dm-sans)] text-[11px] text-[#5E636E] dark:text-[#8E939E]">
          <p>© 2026 Jinpeng Nepal · Synergy Motors. All Rights Reserved. jinpengnepal.com</p>
          <div className="flex items-center gap-6">
            <span>Balkumari, Lalitpur</span>
            <span>Jinpeng Lingbox AT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
