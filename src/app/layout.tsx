import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)] bg-[#F8F9FA] dark:bg-[#0B0C0E] text-[#111215] dark:text-[#F4F4F6] antialiased selection:bg-[#E8371B]/20 selection:text-[#E8371B] transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
