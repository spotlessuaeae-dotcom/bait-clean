"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";

import { siteConfig, whatsappHref } from "@/lib/site";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function ClosingCTA() {
  const reduceMotion = useReducedMotion();

  const settle: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease },
    },
  };

  return (
    <section
      className="relative overflow-hidden border-t border-border/70 bg-primary text-primary-foreground"
      aria-labelledby="closing-heading"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={settle}
          className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:items-start lg:gap-x-8"
        >
          {/* Text — dominant, left margin, mirrors every other section's anchor point */}
          <div className="lg:col-[1/8] lg:row-[1]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/65">
                Next Step
              </span>
            </div>

            <h2
              id="closing-heading"
              className="max-w-lg font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-primary-foreground"
            >
              The best time to book is before you close this tab.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/75 text-pretty">
              No pricing to reverse-engineer and no form to wrestle with —
              tell us what your home needs and we&apos;ll take it from there.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                nativeButton={false}
                className="h-12 px-6 text-[0.95rem] tracking-wide bg-background text-foreground hover:bg-background/85"
                render={<Link href="/contact" />}
              >
                Get a Free Quote
                <ArrowRightIcon
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Button>

              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-primary-foreground underline decoration-brass/60 decoration-1 underline-offset-4 transition-colors hover:text-background hover:decoration-background/70"
              >
                Message us on WhatsApp
                <ArrowUpRightIcon
                  className="size-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/55">
              We&apos;re available {siteConfig.operatingHours} — WhatsApp or a call,
              whichever&apos;s easier for you.
            </p>
          </div>

          {/* Photograph — a finished result, pinned lower and right, bleeding to the edge */}
          <div className="lg:col-[9/13] lg:row-[1] lg:translate-y-16">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:-mr-8">
                <Image
                  src="/closing-finished-room.png"
                  alt="A tidy, sunlit bedroom just after cleaning — bed made, surfaces clear, linens fresh."
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2">
                <span className="h-px w-4 bg-brass/70" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-primary-foreground/60">
                  A finished afternoon in Al Zahya.
                </span>
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
