"use client";

import React from "react";
import carData from "@/content/car.json";
import { MapPin, Phone, Clock, Sparkles, Zap, CheckCircle2 } from "lucide-react";

export default function NetworkLocations() {
  const contact = carData.contact;
  const financing = carData.financing;

  return (
    <section id="locations" className="relative py-24 md:py-32 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F4F4F6] leading-[1.08]">
              Showroom & Contact.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] max-w-md font-normal leading-relaxed">
            Visit the authorized Synergy Motors showroom in Lalitpur for vehicle inquiries, bookings, and test drive scheduling.
          </p>
        </div>

        {/* Verified Showroom Card */}
        <div className="max-w-4xl mx-auto border border-white/20 bg-[#0F1013] p-8 sm:p-12 transition-all">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-white/[0.08] text-white border border-white/15 font-semibold">
                  OFFICIAL DISTRIBUTOR SHOWROOM
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F4F4F6] mb-3">
                {contact.showroomName}
              </h3>

              <div className="space-y-2 text-sm font-[family-name:var(--font-dm-sans)] text-[#8E939E]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E8371B] shrink-0" />
                  <span className="text-white font-medium">{contact.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-white/50 shrink-0" />
                  <span>{contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Connections */}
            <div className="flex flex-col gap-3 min-w-[220px]">
              <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#8E939E]">
                DIRECT SALES LINES
              </span>
              {contact.phoneNumbers.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-full border border-white/20 bg-white/[0.04] text-xs font-semibold text-white hover:bg-white hover:text-[#0B0C0E] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{phone}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider">Call</span>
                </a>
              ))}
            </div>
          </div>

          {/* Official Callouts Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 border border-white/[0.06] bg-[#121316]">
              <CheckCircle2 className="w-4 h-4 text-[#E8371B] shrink-0" />
              <span className="font-[family-name:var(--font-dm-sans)] text-xs text-white font-medium">
                Open for Booking
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-white/[0.06] bg-[#121316]">
              <Zap className="w-4 h-4 text-white shrink-0" />
              <span className="font-[family-name:var(--font-dm-sans)] text-xs text-white font-medium">
                Easy EMI Available
              </span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-white/[0.06] bg-[#121316]">
              <Sparkles className="w-4 h-4 text-white shrink-0" />
              <span className="font-[family-name:var(--font-dm-sans)] text-xs text-white font-medium">
                {financing.emiLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
