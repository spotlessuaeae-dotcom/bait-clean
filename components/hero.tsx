"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ShieldCheckIcon, SparkleIcon, CalendarCheckIcon, ArrowRightIcon } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

const trustPoints = [
  { icon: ShieldCheckIcon, label: "Vetted & insured staff" },
  { icon: SparkleIcon, label: "Satisfaction guarantee" },
  { icon: CalendarCheckIcon, label: "Flexible scheduling" },
];

export function Hero() {
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
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-y-10 px-5 pt-14 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:pt-20 lg:pb-28">
        {/* Left: editorial copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Residential cleaning · {siteConfig.serviceArea}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.01em] text-balance text-foreground"
          >
            A home worth
            <br />
            coming back to.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Bait Clean is a premium housekeeping specialist for the homes of Sharjah
            and Ajman — two markets we know intimately. Villas, apartments, and
            offices, cared for with the discretion and craft of five-star hospitality.
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
            <Button
              variant="ghost"
              nativeButton={false}
              className="h-12 px-5 text-[0.95rem] tracking-wide text-foreground hover:text-primary"
              render={<Link href="/services" />}
            >
              See Our Services
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-11 flex flex-col gap-x-8 gap-y-3 border-t border-border/70 pt-7 sm:flex-row sm:flex-wrap"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2.5 text-sm text-foreground/80"
              >
                <Icon className="size-4 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right: full-bleed color-graded interior */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="relative w-full lg:-mr-8"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/hero-interior.png"
              alt="A professional cleaner in a blue uniform and yellow gloves smoothing crisp white bedsheets in a sunlit bedroom."
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

          {/* Quiet floating credential — brass rule, no fabricated numbers */}
          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-border/60 bg-background/90 px-4 py-3 supports-backdrop-filter:bg-background/75">
            <span className="h-8 w-px bg-brass" aria-hidden="true" />
            <p className="text-sm leading-tight text-foreground">
              <span className="block font-serif text-base">Trusted with the keys</span>
              <span className="text-muted-foreground">
                to homes across Sharjah &amp; Ajman
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
