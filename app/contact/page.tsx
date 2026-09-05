import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";

export const metadata: Metadata = {
  title: "Contact Bait Clean — Book Home Cleaning in Sharjah & Ajman",
  description: `Request a free quote for home, deep, or office cleaning in Sharjah and Ajman. Call ${siteConfig.phoneNumber} or send your details on WhatsApp during ${siteConfig.operatingHours}.`,
  openGraph: {
    title: "Contact Bait Clean — Book Home Cleaning in Sharjah & Ajman",
    description: `Request a free quote and reach us on WhatsApp during ${siteConfig.operatingHours}.`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHero />

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24" aria-label="Contact form">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-[1/8]">
            <ContactForm />
          </div>
          <div className="lg:col-[9/13]">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
