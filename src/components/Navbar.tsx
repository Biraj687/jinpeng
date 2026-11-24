"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "VEHICLE", href: "#vehicle" },
    { label: "SPECS", href: "#specifications" },
    { label: "SAVINGS", href: "#calculator" },
    { label: "MODELS", href: "#models" },
    { label: "SHOWROOM", href: "#locations" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 select-none ${
          scrolled
            ? "bg-white/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] py-3.5 shadow-xl"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14 flex items-center justify-between">
          {/* Logo & Brandmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3.5 group transition-opacity hover:opacity-90"
          >
            <div className="relative w-8 h-7 sm:w-9 sm:h-8 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Jinpeng Logo"
                fill
                className="object-contain drop-shadow-[0_2px_8px_rgba(232,55,27,0.35)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-[family-name:var(--font-space-grotesk)] text-xs sm:text-[13px] font-bold tracking-[0.24em] uppercase leading-none transition-colors duration-300 ${
                  scrolled
                    ? "text-[#111215] dark:text-[#F4F4F6]"
                    : "text-white"
                }`}
              >
                JINPENG
              </span>
              <span
                className={`font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.28em] uppercase leading-tight mt-0.5 transition-colors duration-300 ${
                  scrolled
                    ? "text-[#646873] dark:text-[#8E939E]"
                    : "text-white/70"
                }`}
              >
                NEPAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative font-[family-name:var(--font-dm-sans)] text-[11px] font-medium tracking-[0.22em] uppercase transition-colors py-1 group ${
                  scrolled
                    ? "text-[#646873] dark:text-[#8E939E] hover:text-[#111215] dark:hover:text-[#F4F4F6]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    scrolled
                      ? "bg-[#111215] dark:bg-white"
                      : "bg-white"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Cluster & Theme Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Theme Toggle (Desktop & Mobile) */}
            <ThemeToggle
              className={
                scrolled
                  ? ""
                  : "border-white/20 bg-white/[0.08]"
              }
            />

            {/* Test Drive CTA */}
            <a
              href="#inquire"
              onClick={(e) => handleSmoothScroll(e, "#inquire")}
              className={`hidden sm:inline-flex group relative items-center gap-2 px-4 sm:px-5 py-2 rounded-full border backdrop-blur-md text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 ${
                scrolled
                  ? "border-black/15 dark:border-white/20 bg-black/[0.04] dark:bg-white/[0.04] text-[#111215] dark:text-[#F4F4F6] hover:bg-[#111215] hover:text-white dark:hover:bg-white dark:hover:text-[#0B0C0E]"
                  : "border-white/25 bg-white/[0.08] text-white hover:bg-white hover:text-[#0B0C0E]"
              }`}
            >
              <span>TEST DRIVE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
                scrolled
                  ? "text-[#111215] dark:text-[#F4F4F6]"
                  : "text-white"
              }`}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-[#0B0C0E]/98 backdrop-blur-2xl flex flex-col justify-between px-6 py-24 md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-wide text-[#111215] dark:text-[#F4F4F6] border-b border-black/[0.08] dark:border-white/[0.08] pb-3"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-black/[0.08] dark:border-white/[0.08]">
            <a
              href="#inquire"
              onClick={(e) => handleSmoothScroll(e, "#inquire")}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#111215] text-white dark:bg-white dark:text-[#0B0C0E] text-xs font-semibold tracking-[0.2em] uppercase shadow-lg"
            >
              <span>BOOK TEST DRIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-xs text-[#646873] dark:text-[#8E939E] font-[family-name:var(--font-dm-sans)] pt-2">
              <span>Balkumari, Lalitpur</span>
              <a href="tel:+9779714574057" className="text-[#E8371B] font-medium">
                +977 9714574057
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
