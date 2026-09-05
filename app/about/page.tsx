import type { Metadata } from "next";

import { AboutHero } from "@/components/about-hero";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { ClosingCTA } from "@/components/closing-cta";

export const metadata: Metadata = {
  title: "About Bait Clean — Vetted, Insured Home Cleaning in Sharjah & Ajman",
  description:
    "Bait Clean directly employs, background-checks, and trains every cleaner before they set foot in your home. Learn why we started and what we won't compromise on.",
  openGraph: {
    title: "About Bait Clean — Vetted, Insured Home Cleaning in Sharjah & Ajman",
    description:
      "Why Bait Clean started, and the standard we hold ourselves to on every visit across Sharjah and Ajman.",
    type: "website",
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
