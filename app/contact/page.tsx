import type { Metadata } from "next";

import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";

export const metadata: Metadata = {
  title: "Contact Us & Free Quote",
  description:
    "Request a custom quote for residential or office cleaning in Sharjah and Ajman. Message us directly on WhatsApp or call our team for responsive scheduling.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Free Quote | Bait Clean",
    description:
      "Get in touch on WhatsApp or call our team directly to book vetted cleaning services across Sharjah and Ajman.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Free Quote | Bait Clean",
    description:
      "Get in touch on WhatsApp or call our team directly to book vetted cleaning services across Sharjah and Ajman.",
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
