import Link from "next/link";
import { MapPinIcon, ClockIcon, MailIcon, PhoneIcon } from "lucide-react";

import { siteConfig, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const details = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: siteConfig.phoneNumber,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@baitclean.com",
  },
  {
    icon: MapPinIcon,
    label: "Service area",
    value: siteConfig.serviceArea,
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: siteConfig.operatingHours,
  },
];

export function ContactInfo() {
  return (
    <aside
      aria-label="Contact details"
      className="rounded-2xl border border-border/70 bg-secondary/40 p-6 sm:p-8"
    >
      <h2 className="font-serif text-2xl font-medium text-foreground">
        Prefer to talk now?
      </h2>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
        WhatsApp is the fastest way to reach us during {siteConfig.operatingHours}.
      </p>

      <Button
        nativeButton={false}
        className="mt-6 h-11 w-full tracking-wide"
        render={<Link href={whatsappHref} target="_blank" rel="noopener noreferrer" />}
      >
        <WhatsAppIcon className="size-4" data-icon="inline-start" />
        Message on WhatsApp
      </Button>

      <Separator className="my-7" />

      <dl className="flex flex-col gap-5">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </dt>
              <dd className="mt-1 text-[0.95rem] leading-snug text-foreground">
                {value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </aside>
  );
}
