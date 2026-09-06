import { siteConfig } from "@/lib/site";
import { faqItems } from "@/lib/faq-data";

/**
 * Returns the base application URL from NEXT_PUBLIC_APP_URL.
 * Throws an explicit error if the environment variable is missing,
 * enforcing that no URLs ever fall back to hardcoded domain strings.
 */
export function getAppUrl(): string {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  if (!url) {
    throw new Error(
      "Missing NEXT_PUBLIC_APP_URL environment variable. Set this in your environment or Vercel dashboard."
    );
  }
  return url.replace(/\/+$/, "");
}

/**
 * Evaluates whether search engines should index the site.
 * Strictly gated via NEXT_PUBLIC_ALLOW_INDEXING=true (set only in Vercel Production).
 */
export function isIndexingAllowed(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
}

/**
 * Safely serializes data to JSON-LD string, escaping '<' to '\u003c'
 * to prevent HTML parser confusion or XSS injection in <script> blocks.
 */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Generates Schema.org CleaningService structured data for the site root.
 */
export function getCleaningServiceJsonLd() {
  const appUrl = getAppUrl();

  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${appUrl}/#cleaningservice`,
    name: siteConfig.name,
    url: appUrl,
    logo: `${appUrl}/icon.svg`,
    image: `${appUrl}/hero-interior.png`,
    telephone: siteConfig.phoneNumber,
    email: siteConfig.email,
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-16:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sharjah",
      addressRegion: "Sharjah",
      addressCountry: "AE",
    },
    areaServed: [
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "Place", name: "Al Hoshi, Sharjah" },
      { "@type": "Place", name: "Barashi, Sharjah" },
      { "@type": "Place", name: "Al Azra, Sharjah" },
      { "@type": "Place", name: "Bu Tena, Sharjah" },
      { "@type": "Place", name: "Al Qouz, Sharjah" },
      { "@type": "Place", name: "Al Raqaib, Ajman" },
      { "@type": "Place", name: "Emirates City, Ajman" },
      { "@type": "Place", name: "Al Heliow, Ajman" },
      { "@type": "Place", name: "Al Zahya, Ajman" },
      { "@type": "Place", name: "Ajman Uptown, Ajman" },
      { "@type": "Place", name: "Al Yasmeen, Ajman" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bait Clean Cleaning Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Home & Villa Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Home & Villa Cleaning",
                description: "Recurring care for the whole home, room by room.",
                url: `${appUrl}/services#home-villa`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Deep & Detail Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Deep & Detail Cleaning",
                description: "The reset before or after anything changes.",
                url: `${appUrl}/services#deep-detail`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Maid Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Maid Services",
                description:
                  "A regular hand you get to know, on a schedule you set.",
                url: `${appUrl}/services#maid-services`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Laundry & Fabric Care",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Laundry & Fabric Care",
                description:
                  "Washed, pressed, and folded the way you'd do it yourself.",
                url: `${appUrl}/services#laundry-fabric-care`,
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Office Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Office Cleaning",
                description:
                  "A workspace that stays presentable between visits.",
                url: `${appUrl}/services#office-cleaning`,
              },
            },
          ],
        },
      ],
    },
  };
}

/**
 * Generates Schema.org FAQPage structured data for the home page.
 * Provides machine-readable Q&A entity semantics for Bing, ChatGPT Search,
 * and AI answer engines.
 */
export function getFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
