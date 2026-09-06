import type { Metadata } from "next";

import { ServicesHero } from "@/components/services-hero";
import { ServicesIndexRail } from "@/components/services-index-rail";
import { ServiceCategorySection } from "@/components/service-category-section";
import { ServicesAreaNote } from "@/components/services-area-note";
import { ClosingCTA } from "@/components/closing-cta";
import { serviceCategories } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Cleaning Services in Sharjah & Ajman",
  description:
    "Explore our 5 core services across Sharjah and Ajman: home and villa cleaning, deep detailing, dedicated maid service, laundry fabric care, and office cleaning.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Cleaning Services in Sharjah & Ajman | Bait Clean",
    description:
      "Home & villa cleaning, deep detail, maid service, fabric care, and office cleaning across Sharjah and Ajman — see what's included in every visit.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Services in Sharjah & Ajman | Bait Clean",
    description:
      "Home & villa cleaning, deep detail, maid service, fabric care, and office cleaning across Sharjah and Ajman — see what's included in every visit.",
  },
};

export default function ServicesPage() {
  const railItems = serviceCategories.map(({ slug, number, name }) => ({
    slug,
    number,
    name,
  }));

  return (
    <main>
      <ServicesHero />

      <section aria-label="Service catalog" className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:gap-x-12">
            <ServicesIndexRail items={railItems} />

            <div>
              {serviceCategories.map((category, index) => (
                <ServiceCategorySection
                  key={category.slug}
                  {...category}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesAreaNote />
      <ClosingCTA />
    </main>
  );
}
