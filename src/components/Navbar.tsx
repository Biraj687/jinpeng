"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
    { label: "SHOWROOMS", href: "#locations" },
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
            ? "bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between">
          {/* Logo & Brandmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group transition-opacity hover:opacity-90"
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
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs sm:text-[13px] font-bold tracking-[0.24em] uppercase text-[#F4F4F6] leading-none">
                JINPENG
              </span>
              <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.28em] uppercase text-[#8E939E] leading-tight mt-0.5">
                NEPAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative font-[family-name:var(--font-dm-sans)] text-[11px] font-medium tracking-[0.22em] uppercase text-[#8E939E] hover:text-[#F4F4F6] transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#inquire"
              onClick={(e) => handleSmoothScroll(e, "#inquire")}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4F4F6] transition-all duration-300 hover:bg-white hover:text-[#0B0C0E] hover:border-white hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
            >
              <span>TEST DRIVE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F4F4F6] p-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-px w-full bg-white transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-white transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-white transition-transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0C0E]/98 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-wide text-[#F4F4F6] border-b border-white/[0.08] pb-3"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquire"
              onClick={(e) => handleSmoothScroll(e, "#inquire")}
              className="mt-6 flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-[#0B0C0E] text-xs font-semibold tracking-[0.2em] uppercase"
            >
              <span>BOOK TEST DRIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
