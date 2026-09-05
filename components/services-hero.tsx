"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDownIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesHero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
    },
  };

  const rise: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease },
    },
  };

  function handleJumpClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    document
      .getElementById("home-villa")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <section
      className="relative overflow-hidden border-b border-border/70 bg-background"
      aria-labelledby="services-hero-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-16 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:pt-20 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="lg:col-[1/7] lg:self-center"
        >
          <motion.div variants={rise} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brass" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            id="services-hero-heading"
            variants={rise}
            className="max-w-lg font-serif text-[clamp(2.25rem,4.6vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
          >
            Every service, laid out the way you&apos;d actually ask for it.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            From a weekly wipe-down to the deep reset before guests arrive —
            here&apos;s exactly what&apos;s included in each one, across
            Sharjah and Ajman.
          </motion.p>

          <motion.div variants={rise} className="mt-9">
            <a
              href="#home-villa"
              onClick={handleJumpClick}
              className="group inline-flex items-center gap-2 text-foreground underline decoration-brass/60 decoration-1 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/60"
            >
              See what&apos;s included
              <ArrowDownIcon
                className="size-4 text-brass transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease }}
          className="mt-12 lg:col-[8/13] lg:mt-0 lg:self-center"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/services-hero-team.png"
              alt="Three professional cleaners actively vacuuming, wiping windows, and scrubbing a kitchen countertop in a bright modern home."
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority
              className="scale-125 object-cover object-bottom"
            />
            {/* <Image
              src="/services-hero-team.png"
              alt="A caddy of cleaning tools — cloths, spray bottles, and brushes — arranged on a counter, ready to work."
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority
              className="object-cover"
            /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
