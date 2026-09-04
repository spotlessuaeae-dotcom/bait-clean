import Link from "next/link";
import { MapPinIcon } from "lucide-react";

import { navLinks, siteConfig, whatsappHref } from "@/lib/site";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";
import { BackToTop } from "@/components/back-to-top";

const serviceLinks = [
  { label: "Home & Villa Cleaning", href: "/services" },
  { label: "Deep & Detail Cleaning", href: "/services" },
  { label: "Maid Services", href: "/services" },
  { label: "Laundry & Fabric Care", href: "/services" },
  { label: "Office Cleaning", href: "/services" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const linkClass =
  "text-sm text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded-sm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          {/* Brand block — roughly a third of the row */}
          <div className="lg:max-w-xs lg:basis-1/3">
            <Link
              href="/"
              className="inline-flex rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              <Logo label="Bait Clean — home" className="text-background" />
            </Link>

            <p className="mt-5 max-w-[26ch] text-[0.95rem] leading-relaxed text-background/70 text-pretty">
              A quieter standard of home care, kept the same way every visit.
            </p>

            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-background/60">
              <MapPinIcon className="size-3.5 text-brass" aria-hidden="true" />
              {siteConfig.serviceArea}
            </span>
          </div>

          {/* Link clusters — unequal widths, grouped to the right */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-x-16">
            <nav aria-label="Explore">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-brass">
                Explore
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Services">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-brass">
                Services
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Contact" className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-brass">
                Contact
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 ${linkClass}`}
                  >
                    <WhatsAppIcon className="size-4 text-brass" aria-hidden="true" />
                    Message on WhatsApp
                  </Link>
                </li>
                <li className="text-sm text-background/70">[+971 X XXX XXXX]</li>
                <li className="text-sm text-background/70">[hello@baitclean.com]</li>
                <li className="text-sm text-background/50">
                  Sat–Thu, usually reply within the hour
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Closing bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-brass/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-background/55">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
