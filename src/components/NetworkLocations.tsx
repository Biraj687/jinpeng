"use client";

import React, { useState } from "react";
import Image from "next/image";
import carData from "@/content/car.json";
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  RotateCw,
} from "lucide-react";

export default function NetworkLocations() {
  const contact = carData.contact;

  const [activeAngleIndex, setActiveAngleIndex] = useState(0);

  const vehicleViews = [
    {
      id: "profile",
      title: "Side Profile",
      caption: "175 mm Ride Height",
      image: "/images/2.png",
      alt: "Jinpeng Lingbox AT Side Profile",
    },
    {
      id: "front-three-quarter",
      title: "Front 3/4",
      caption: "LED Projector Stance",
      image: "/images/7.png",
      alt: "Jinpeng Lingbox AT Front Three Quarter View",
    },
    {
      id: "front",
      title: "Front View",
      caption: "Aero Closed Grille",
      image: "/images/5.png",
      alt: "Jinpeng Lingbox AT Front View",
    },
    {
      id: "rear-three-quarter",
      title: "Rear 3/4",
      caption: "5-Door Hatchback",
      image: "/images/4.png",
      alt: "Jinpeng Lingbox AT Rear Three Quarter View",
    },
    {
      id: "rear",
      title: "Rear View",
      caption: "LED Tail Lamp Array",
      image: "/images/3.png",
      alt: "Jinpeng Lingbox AT Rear View",
    },
  ];

  const currentView = vehicleViews[activeAngleIndex];

  const handleNext = () => {
    setActiveAngleIndex((prev) => (prev + 1) % vehicleViews.length);
  };

  const handlePrev = () => {
    setActiveAngleIndex(
      (prev) => (prev - 1 + vehicleViews.length) % vehicleViews.length
    );
  };

  return (
    <section id="locations" className="relative py-24 md:py-32 bg-[#0B0C0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-medium tracking-[0.16em] uppercase text-[#8E939E] mb-3">
              OFFICIAL SHOWROOM & TEST DRIVES
            </div>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#F4F4F6] leading-[1.08]">
              Visit the Showroom.
            </h2>
          </div>
          <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#8E939E] max-w-md font-normal leading-relaxed">
            Inspect the Jinpeng Lingbox AT in person at Balkumari, Lalitpur. Book a test drive, review financing plans, or consult with our showroom advisors.
          </p>
        </div>

        {/* Porsche-Inspired Architectural Split Showcase Card */}
        <div className="border border-white/15 bg-[#0F1013] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.65)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
            {/* Left Column: Editorial, Specs & Angle Switcher (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-10 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0C0D10]">
              {/* Brand & Title */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8371B]" />
                    <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.24em] uppercase text-[#8E939E] font-semibold">
                      SYNERGY MOTORS · NEPAL
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.18em] uppercase text-white/70 border border-white/10 px-2.5 py-0.5 rounded-full bg-white/[0.03]">
                    BALKUMARI SHOWROOM
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-[-0.02em] leading-tight mb-2">
                  Lingbox AT
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#8E939E] mb-8 leading-relaxed">
                  Official distributor display at Balkumari, Lalitpur. Available for immediate booking and customer demonstrations.
                </p>

                {/* Telemetry Stack (Porsche-Style Typographic Rigor) */}
                <div className="space-y-4 pt-6 border-t border-white/10 mb-8">
                  {/* Range */}
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F4F4F6] block leading-none">
                        340 km
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] mt-1 block">
                        Base: 240 km · Top: 340 km
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-white/60 font-medium">
                      ELECTRIC RANGE
                    </span>
                  </div>

                  {/* Ground Clearance */}
                  <div className="flex items-baseline justify-between gap-4 pt-3 border-t border-white/[0.06]">
                    <div>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F4F4F6] block leading-none">
                        175 mm
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] mt-1 block">
                        Engineered for Valley roads & speed humps
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-white/60 font-medium">
                      GROUND CLEARANCE
                    </span>
                  </div>

                  {/* Electric Motor */}
                  <div className="flex items-baseline justify-between gap-4 pt-3 border-t border-white/[0.06]">
                    <div>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F4F4F6] block leading-none">
                        35 kW
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] mt-1 block">
                        Automatic (AT) Direct Drive Powertrain
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-white/60 font-medium">
                      ELECTRIC MOTOR
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-between gap-4 pt-3 border-t border-white/[0.06]">
                    <div>
                      <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F4F4F6] block leading-none">
                        NPR 23,49,000
                      </span>
                      <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] mt-1 block">
                        Monthly EMI starting from NPR 20,500
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.18em] uppercase text-white/60 font-medium">
                      SHOWROOM PRICE
                    </span>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-2.5">
                    {contact.phoneNumbers.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20 bg-white/[0.04] text-xs font-semibold text-white hover:bg-white hover:text-[#0B0C0E] transition-all font-[family-name:var(--font-dm-sans)]"
                      >
                        <Phone className="w-3 h-3 text-[#E8371B]" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>

                  <a
                    href="#inquire"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#E8371B] transition-colors pt-2 font-[family-name:var(--font-dm-sans)]"
                  >
                    <span>Schedule Showroom Test Drive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom Interactive Angle Switcher (Matching Porsche Reference) */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.24em] uppercase text-[#8E939E] font-semibold flex items-center gap-1.5">
                    <RotateCw className="w-2.5 h-2.5" />
                    SELECT VEHICLE PERSPECTIVE
                  </span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.16em] uppercase text-[#F4F4F6]">
                    0{activeAngleIndex + 1} / 0{vehicleViews.length}
                  </span>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2">
                  {vehicleViews.map((item, idx) => {
                    const isActive = activeAngleIndex === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveAngleIndex(idx)}
                        className={`group relative flex flex-col items-center pb-2 text-left transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                        }`}
                      >
                        {/* Thumbnail Container */}
                        <div className="relative w-full aspect-[4/3] bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden mb-1.5 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain p-1"
                            sizes="80px"
                          />
                        </div>

                        {/* Label */}
                        <span className="font-[family-name:var(--font-dm-sans)] text-[9px] font-medium text-center text-[#F4F4F6] block truncate w-full">
                          {item.title}
                        </span>

                        {/* Porsche Red Active Indicator Line */}
                        <span
                          className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                            isActive ? "bg-[#E8371B]" : "bg-transparent"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Automotive Studio Stage (7 cols) */}
            <div className="lg:col-span-7 relative p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#15171C] via-[#0E1013] to-[#0A0B0E] overflow-hidden">
              {/* Top Studio Header Badges */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8371B] animate-pulse" />
                  <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#F4F4F6] font-semibold">
                    OPEN FOR BOOKING
                  </span>
                  <span className="hidden sm:inline-block font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#8E939E] border-l border-white/15 pl-2.5">
                    EASY EMI AVAILABLE
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous view"
                    className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0B0C0E] transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next view"
                    className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0B0C0E] transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Central Vehicle Stage Render */}
              <div
                onClick={handleNext}
                className="relative my-6 sm:my-10 w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center cursor-pointer select-none group"
                title="Click to rotate view"
              >
                {/* Soft Studio Floor Reflection & Ambient Light */}
                <div className="absolute inset-0 bg-radial-gradient from-white/[0.07] via-transparent to-transparent pointer-events-none rounded-full blur-2xl transform scale-75" />
                <div className="absolute bottom-4 inset-x-12 h-8 bg-black/80 blur-xl rounded-full pointer-events-none" />

                {/* Active Vehicle Render */}
                <div className="relative w-full h-full transition-all duration-500 ease-out transform group-hover:scale-[1.02]">
                  <Image
                    key={currentView.id}
                    src={currentView.image}
                    alt={currentView.alt}
                    fill
                    priority
                    className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-500"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Bottom Stage Footnote Bar */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-[family-name:var(--font-dm-sans)] text-xs">
                <div className="flex items-center gap-3 text-[#8E939E]">
                  <MapPin className="w-4 h-4 text-[#E8371B] shrink-0" />
                  <div>
                    <span className="text-[#F4F4F6] font-medium block">
                      {contact.location}
                    </span>
                    <span className="text-[11px] text-[#8E939E]">
                      {contact.showroomName}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-[#8E939E]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-white/60" />
                    <span>{contact.hours}</span>
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#F4F4F6] font-medium">
                    {currentView.caption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
