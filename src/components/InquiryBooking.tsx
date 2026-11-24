"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Phone, MapPin } from "lucide-react";

export default function InquiryBooking() {
  const [selectedTrim, setSelectedTrim] = useState<string>("Base Variant (240 km)");
  const [selectedLocation, setSelectedLocation] = useState<string>("Balkumari, Lalitpur Showroom");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setBookingRef(String(Math.floor(100000 + Math.random() * 900000)));
    setSubmitted(true);
  };

  const trimOptions = [
    "Base Variant (240 km)",
    "Top Variant (340 km)",
  ];

  const locationOptions = [
    "Balkumari, Lalitpur Showroom",
    "Doorstep Demo",
  ];

  return (
    <section id="inquire" className="relative py-20 sm:py-24 md:py-32 bg-[#F8F9FA] dark:bg-[#0B0C0E] border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-8 h-7">
                <Image
                  src="/images/logo.png"
                  alt="Jinpeng Logo"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(232,55,27,0.35)]"
                />
              </div>
              <span className="font-[family-name:var(--font-dm-sans)] text-[10px] font-semibold tracking-[0.24em] uppercase text-[#5E636E] dark:text-[#8E939E]">
                SYNERGY MOTORS · NEPAL
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#111215] dark:text-[#F4F4F6] leading-[1.08] mb-6">
              Book a test drive.
            </h2>
            <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] font-normal leading-relaxed mb-8">
              Test drive the Lingbox AT on Kathmandu roads. Visit our Balkumari showroom or request a test drive at your preferred location.
            </p>

            <div className="space-y-4 border-t border-black/[0.08] dark:border-white/[0.08] pt-6 font-[family-name:var(--font-dm-sans)] text-xs text-[#5E636E] dark:text-[#8E939E]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8371B] shrink-0" />
                <span className="text-[#111215] dark:text-white font-medium">Balkumari, Lalitpur</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#111215]/70 dark:text-white/70 shrink-0" />
                <span>+977 9714574057 / +977 9849130768</span>
              </div>
              <div className="p-3 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-[#111215] dark:text-white font-medium">
                Open for Booking · Monthly EMI starting from NPR 20,500
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#0F1013] p-6 sm:p-10 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors duration-300">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full border border-black/15 dark:border-white/20 bg-black/[0.03] dark:bg-white/[0.04] mx-auto flex items-center justify-center text-[#111215] dark:text-white mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#E8371B] dark:text-white" />
                </div>
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-[#5E636E] dark:text-[#8E939E] block mb-1">
                  BOOKING REFERENCE: #SM-{bookingRef || "PENDING"}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#111215] dark:text-[#F4F4F6] mb-3">
                  Test Drive Reserved
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#5E636E] dark:text-[#8E939E] max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-[#111215] dark:text-white">{formData.name}</strong>. Our Synergy Motors team will contact you at <strong className="text-[#111215] dark:text-white">{formData.phone}</strong> to confirm your slot for the <strong className="text-[#111215] dark:text-white">{selectedTrim}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-black/20 dark:border-white/20 text-[11px] tracking-[0.16em] uppercase text-[#111215] dark:text-[#F4F4F6] hover:bg-[#111215] hover:text-white dark:hover:bg-white dark:hover:text-[#0B0C0E] transition-all"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Model Trim Selection */}
                <div>
                  <span className="block font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] mb-2.5 font-medium">
                    Select Variant
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {trimOptions.map((trim) => (
                      <button
                        key={trim}
                        type="button"
                        onClick={() => setSelectedTrim(trim)}
                        className={`py-2.5 px-4 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all duration-300 font-[family-name:var(--font-dm-sans)] text-center ${
                          selectedTrim === trim
                            ? "bg-[#111215] text-white dark:bg-white dark:text-[#0B0C0E] shadow-[0_2px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_0_16px_rgba(255,255,255,0.25)] font-semibold"
                            : "border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-[#5E636E] dark:text-[#8E939E] hover:border-black/25 dark:hover:border-white/20 hover:text-[#111215] dark:hover:text-white"
                        }`}
                      >
                        {trim}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Selection Chips */}
                <div>
                  <span className="block font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] mb-2.5 font-medium">
                    Showroom / Demonstration
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {locationOptions.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setSelectedLocation(loc)}
                        className={`py-2.5 px-3 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all duration-300 font-[family-name:var(--font-dm-sans)] text-center ${
                          selectedLocation === loc
                            ? "bg-[#111215] text-white dark:bg-white dark:text-[#0B0C0E] shadow-[0_2px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_0_16px_rgba(255,255,255,0.25)] font-semibold"
                            : "border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-[#5E636E] dark:text-[#8E939E] hover:border-black/25 dark:hover:border-white/20 hover:text-[#111215] dark:hover:text-white"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="user-name"
                      className="block font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] mb-2 font-medium"
                    >
                      Full Name *
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shrestha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F4F5F7] dark:bg-[#121316] border border-black/15 dark:border-white/10 rounded-lg px-4 py-3 text-xs text-[#111215] dark:text-[#F4F4F6] focus:border-[#E8371B] dark:focus:border-white focus:outline-none placeholder-[#8E939E]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user-phone"
                      className="block font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.16em] uppercase text-[#5E636E] dark:text-[#8E939E] mb-2 font-medium"
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      placeholder="+977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F4F5F7] dark:bg-[#121316] border border-black/15 dark:border-white/10 rounded-lg px-4 py-3 text-xs text-[#111215] dark:text-[#F4F4F6] focus:border-[#E8371B] dark:focus:border-white focus:outline-none placeholder-[#8E939E]/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-3.5 rounded-full bg-[#111215] text-white hover:bg-black dark:bg-white dark:text-[#0B0C0E] dark:hover:bg-[#F4F4F6] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_24px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 font-[family-name:var(--font-dm-sans)]"
                >
                  <span>Confirm Test Drive Booking</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
