import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FixedContactFab } from "@/components/fixed-contact-fab";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  getAppUrl,
  isIndexingAllowed,
  getCleaningServiceJsonLd,
  toJsonLd,
} from "@/lib/seo";

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

const appUrl = getAppUrl();
const allowIndexing = isIndexingAllowed();

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
    template: "%s | Bait Clean",
  },
  description:
    "Bait Clean provides vetted, insured residential and office cleaning across Sharjah and Ajman. Experience thoughtful housekeeping tailored to your routine.",
  keywords: [
    "home cleaning Sharjah",
    "villa cleaning Ajman",
    "maid service UAE",
    "deep cleaning Sharjah",
    "office cleaning Ajman",
    "premium residential cleaning",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "./",
    siteName: "Bait Clean",
    title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
    description:
      "Vetted, insured housekeeping for homes, apartments, and villas across Sharjah and Ajman.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
    description:
      "Vetted, insured housekeeping for homes, apartments, and villas across Sharjah and Ajman.",
  },
  robots: allowIndexing
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
          "max-video-preview": -1,
          "max-image-preview": "none",
          "max-snippet": -1,
        },
      },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getCleaningServiceJsonLd();

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} h-full antialiased bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FixedContactFab />
      </body>
    </html>
  );
}
