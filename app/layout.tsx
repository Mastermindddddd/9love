import type { Metadata } from "next";
import { Unbounded, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-unbounded",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400"],
  variable: "--font-instrument",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "9LOVE — Worn Dark, Held Close",
  description:
    "9LOVE is a dark streetwear label built around one mark: two nines curled into a heart. Hoodies, tees and outerwear cut for people who wear their softness like armor.",
  keywords: ["9love", "streetwear", "hoodies", "dark fashion", "9-love"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${instrument.variable} ${inter.variable}`}>
      <body className="font-sans bg-ink text-bone antialiased">
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.4] mix-blend-overlay bg-grain bg-repeat" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
