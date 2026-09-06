import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { HowItWorks } from "@/components/how-it-works";
import { TheStandard } from "@/components/the-standard";
import { ServiceAreas } from "@/components/service-areas";
import { FAQ } from "@/components/faq";
import { ClosingCTA } from "@/components/closing-cta";
import { getFaqPageJsonLd, toJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
  description:
    "Bait Clean provides vetted, insured residential and office cleaning across Sharjah and Ajman. Experience thoughtful housekeeping tailored to your routine.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
    description:
      "Vetted, insured housekeeping for homes, apartments, and villas across Sharjah and Ajman.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bait Clean — Premium Home Cleaning in Sharjah & Ajman",
    description:
      "Vetted, insured housekeeping for homes, apartments, and villas across Sharjah and Ajman.",
  },
};

export default function Home() {
  const faqJsonLd = getFaqPageJsonLd();

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqJsonLd) }}
      />
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <TheStandard />
      <ServiceAreas />
      <FAQ />
      <ClosingCTA />
    </main>
  );
}
