import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinpeng Lingbox AT | Synergy Motors Nepal",
  description:
    "Jinpeng Lingbox EV — Brought to you by Synergy Motors. 175 mm ground clearance, up to 340 km range, and 35 kW electric motor. Open for booking in Balkumari, Lalitpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#0B0C0E]">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} bg-[#0B0C0E] text-[#F4F4F6] font-[family-name:var(--font-dm-sans)] antialiased selection:bg-white/10 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
