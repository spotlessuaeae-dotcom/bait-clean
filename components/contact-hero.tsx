"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";

import { siteConfig, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function ContactHero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-border/70" aria-labelledby="contact-hero-heading">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-y-10 px-5 pt-14 pb-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:pt-20 lg:pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            id="contact-hero-heading"
            variants={item}
            className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.01em] text-balance text-foreground"
          >
            Tell us about your home. We&apos;ll take it from there.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Fill in a few details and we&apos;ll send your message straight to
            WhatsApp — no quote calculators, no waiting on a call center.
            Serving villas, apartments, and offices across {siteConfig.serviceArea}.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground underline decoration-brass/60 decoration-1 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/60"
            >
              <WhatsAppIcon className="size-4 text-brass" aria-hidden="true" />
              Prefer to skip the form? Message us directly
              <ArrowUpRightIcon
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: documentary hand-off moment */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="relative w-full lg:-mr-8"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/contact-hero-handoff.png"
              alt="A Bait Clean staff member greeting a client at the front door mid hand-off, warm and unposed."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-foreground/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-border/60 bg-background/90 px-4 py-3 supports-backdrop-filter:bg-background/75">
            <span className="h-8 w-px bg-brass" aria-hidden="true" />
            <p className="text-sm leading-tight text-foreground">
              <span className="block font-serif text-base">Someone real, at your door</span>
              <span className="text-muted-foreground">
                usually within the hour
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
