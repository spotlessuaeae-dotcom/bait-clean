import type { Metadata } from "next";

import { AboutHero } from "@/components/about-hero";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { ClosingCTA } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "About Our Cleaning Standard",
  description:
    "Learn how Bait Clean brings thoughtful standards, direct employment, and background-checked housekeepers to homes and private villas across Sharjah and Ajman.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Cleaning Standard | Bait Clean",
    description:
      "Direct employment, thorough vetting, and an uncompromising standard of home care across Sharjah and Ajman.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Cleaning Standard | Bait Clean",
    description:
      "Direct employment, thorough vetting, and an uncompromising standard of home care across Sharjah and Ajman.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <ClosingCTA />
    </main>
  );
}
