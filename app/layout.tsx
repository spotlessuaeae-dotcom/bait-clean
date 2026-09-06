import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FixedContactFab } from "@/components/fixed-contact-fab";
import { SmoothScroll } from "@/components/smooth-scroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
  description:
    "Bait Clean is a premium residential cleaning specialist serving Sharjah and Ajman — vetted, insured housekeeping for homes, apartments, and villas. Request a free quote.",
  keywords: [
    "home cleaning Sharjah",
    "villa cleaning Ajman",
    "maid service UAE",
    "deep cleaning Sharjah",
    "premium residential cleaning",
  ],
  openGraph: {
    title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
    description:
      "Vetted, insured housekeeping for homes, apartments, and villas across Sharjah and Ajman.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ea" },
    { media: "(prefers-color-scheme: dark)", color: "#25231f" },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <FixedContactFab />
      </body>
    </html>
  );
}
