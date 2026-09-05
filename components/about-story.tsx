"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutStory() {
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
      className="relative overflow-hidden border-t border-border/70 bg-background"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={settle}
          className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:items-start lg:gap-x-8"
        >
          {/* Photo — a person at work, medium column, left-weighted */}
          <div className="lg:col-[1/6] lg:row-[1]">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/service-maid.png"
                  alt="A housekeeper carefully attending to a home, mid-task and unposed."
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2">
                <span className="h-px w-4 bg-brass/70" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Every team member is a Bait Clean hire, not a subcontractor.
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Text — the story, dominant column, right-weighted */}
          <div className="lg:col-[7/13] lg:row-[1] lg:pt-4">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Why We Started
              </span>
            </div>

            <h2
              id="story-heading"
              className="max-w-lg font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
            >
              Too many cleaning services treat trust as an afterthought.
            </h2>

            <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              <p>
                Bait Clean started with a simple complaint we kept hearing
                around Sharjah and Ajman: whoever shows up to clean your home
                is often a stranger booked through an app, with no real
                screening and no one accountable if something goes wrong.
              </p>
              <p>
                We built the opposite. Every person who enters a client&apos;s
                home is directly employed, background-checked, and trained to
                a written standard before their first visit — not contracted
                out, not rotated in from an agency roster. If our name is on
                the van, we answer for the work.
              </p>
              <p>
                That&apos;s still the whole idea. We&apos;d rather stay
                focused on two cities and do this properly than expand fast
                and lose the thing that makes people comfortable handing over
                a key.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
