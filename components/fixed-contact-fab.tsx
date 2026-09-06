import { PhoneIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function FixedContactFab() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-50 flex flex-col gap-3"
    >
      <a
        href="tel:+971581249910"
        aria-label="Call Bait Clean"
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(37,35,31,0.2)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <PhoneIcon className="size-6" aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a free quote")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Bait Clean on WhatsApp"
        className="wa-ripple relative isolate flex size-14 items-center justify-center rounded-full bg-[#25D366] text-[#102b1b] shadow-[0_8px_24px_rgba(16,43,27,0.24)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102b1b] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <WhatsAppIcon className="size-6" aria-hidden="true" />
      </a>
    </nav>
  );
}
