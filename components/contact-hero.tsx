"use client";

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
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-12 sm:px-8 lg:pt-20 lg:pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
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
      </div>
    </section>
  );
}
