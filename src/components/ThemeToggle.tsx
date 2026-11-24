"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-14 h-7 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] opacity-50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center h-7 w-14 rounded-full border border-black/15 dark:border-white/20 bg-black/[0.05] dark:bg-white/[0.06] backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/40 cursor-pointer select-none ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
    >
      {/* Sliding Knob */}
      <span
        className={`flex items-center justify-center w-5 h-5 rounded-full shadow-md transition-transform duration-300 ease-out transform ${
          isDark
            ? "translate-x-7 bg-white text-[#0B0C0E]"
            : "translate-x-1 bg-[#111215] text-white"
        }`}
      >
        {isDark ? (
          <Moon className="w-2.5 h-2.5" />
        ) : (
          <Sun className="w-2.5 h-2.5" />
        )}
      </span>

      {/* Subtle background icon hints */}
      <span className="absolute left-1.5 flex items-center justify-center text-[10px] text-[#8E939E] pointer-events-none">
        <Sun className="w-2.5 h-2.5 opacity-60" />
      </span>
      <span className="absolute right-1.5 flex items-center justify-center text-[10px] text-[#8E939E] pointer-events-none">
        <Moon className="w-2.5 h-2.5 opacity-60" />
      </span>
    </button>
  );
}
