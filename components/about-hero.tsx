"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AboutHero() {
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
    <section className="relative overflow-hidden" aria-labelledby="about-hero-heading">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-y-10 px-5 pt-14 pb-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-16 lg:pt-20 lg:pb-28">
        {/* Left: full-bleed portrait, a person at work */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="relative w-full lg:order-1 lg:-ml-8"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/about-hero.png"
              alt="A housekeeping professional smoothing linen in a sunlit room, caught mid-task in natural light — the quiet, unhurried care behind every visit."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-foreground/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-xl border border-border/60 bg-background/90 px-4 py-3 supports-backdrop-filter:bg-background/75">
            <span className="h-8 w-px bg-brass" aria-hidden="true" />
            <p className="text-sm leading-tight text-foreground">
              <span className="block font-serif text-base">Vetted, insured, trained</span>
              <span className="text-muted-foreground">before they ever hold a key</span>
            </p>
          </div>
        </motion.div>

        {/* Right: editorial copy, ghosted mark behind it */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl lg:order-2"
        >
          {/* Ghosted logo mark — the real ب stroke from Logo.tsx, oversized and near-invisible */}
          <svg
            viewBox="0 0 40 40"
            className="pointer-events-none absolute -top-16 -right-10 -z-10 h-[420px] w-[420px] text-primary opacity-[0.06] sm:h-[520px] sm:w-[520px] lg:-right-16 lg:h-[600px] lg:w-[600px]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 24.5 C6 26.6 7.7 28.3 9.8 28.3 L28 28.3 C31.6 28.3 34.5 25.4 34.5 21.8 L34.5 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="20" cy="34.4" r="1.9" fill="currentColor" />
          </svg>

          <motion.div variants={item} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              About Bait Clean
            </span>
          </motion.div>

          <motion.h1
            id="about-hero-heading"
            variants={item}
            className="font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.01em] text-balance text-foreground"
          >
            The trust that comes
            <br />
            before the clean.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Before a single surface is wiped, someone has to earn the right to be
            in your home. That&apos;s the part of Bait Clean most people never
            see — the vetting, the training, the standard we hold ourselves to
            across every visit in Sharjah and Ajman.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              nativeButton={false}
              className="h-12 px-6 text-[0.95rem] tracking-wide"
              render={<Link href="/contact" />}
            >
              Get a Free Quote
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
