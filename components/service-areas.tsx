"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";
import { Logo } from "@/components/logo";

const ease = [0.22, 1, 0.36, 1] as const;

type Region = {
  city: string;
  note: string;
  neighbourhoods: string[];
};

const regions: Region[] = [
  {
    city: "Sharjah",
    note: "Among the neighbourhoods we know well",
    neighbourhoods: ["Al Hoshi", "Barashi", "Al Azra", "Bu Tena", "Al Qouz"],
  },
  {
    city: "Ajman",
    note: "From the coast inland, including",
    neighbourhoods: [
      "Al Raqaib",
      "Emirates City",
      "Al Heliow",
      "Al Zahya",
      "Ajman Uptown",
      "Al Yasmeen",
    ],
  },
];

// Coastline drawn as three overlapping segments so stroke weight can vary the
// way pen pressure does — thin at the extremities, heavier through the middle
// where the land folds into a tidal creek (Khor Ajman). None of the bends
// repeat in radius or spacing, so it can't read as a periodic wave.
const coastSegments = [
  {
    d: "M 62 366 C 138 348, 196 360, 258 340 C 306 324, 338 322, 388 336",
    width: 1.1,
  },
  {
    // the inlet fold — coast lifts, cuts back inland, then returns
    d: "M 388 336 C 440 348, 470 342, 508 326 C 540 312, 548 270, 572 262 C 592 256, 600 302, 628 322 C 660 344, 704 334, 742 346",
    width: 2.1,
  },
  {
    d: "M 742 346 C 806 362, 852 338, 910 324 C 972 309, 1036 326, 1098 300 C 1122 290, 1140 298, 1156 290",
    width: 1.15,
  },
];

// A single loose redraw of the whole coast, offset a few px — the pentimento
// pass, as if the line were corrected once.
const pentimentoPath =
  "M 66 372 C 146 356, 200 366, 262 346 C 312 330, 344 328, 392 342 C 446 354, 476 336, 512 320 C 546 305, 552 276, 576 268 C 598 262, 606 306, 634 328 C 668 350, 710 340, 748 352 C 812 368, 858 344, 916 330 C 978 315, 1042 332, 1104 306 C 1128 296, 1146 304, 1162 296";

// A second, lighter redraw — the "third pass" a hand makes when it isn't
// satisfied with the first correction. Different jitter than the pentimento
// so the two never sit in perfect parallel (which is what makes filtered
// duplicates read as computed rather than drawn).
const secondPassPath =
  "M 58 360 C 132 344, 190 354, 250 332 C 300 318, 336 316, 384 330 C 436 344, 468 328, 504 314 C 534 300, 544 266, 568 256 C 588 250, 598 296, 624 316 C 656 338, 700 328, 736 340 C 800 356, 848 332, 906 320 C 968 306, 1030 322, 1092 296 C 1116 286, 1134 294, 1150 286";

// Two hand-set survey marks, placed where the coast actually folds near each
// city's real geography — Ajman's mark sits at the tidal-creek inlet, not at
// an arbitrary midpoint.
const marks = [
  { x: 214, y: 350, rotate: -2.5, label: "Sharjah" },
  { x: 588, y: 268, rotate: 1.8, label: "Ajman" },
];

export function ServiceAreas() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const listVariants: Variants = {
    hidden: {},
    visible: (base: number) => ({
      transition: {
        delayChildren: reduceMotion ? 0 : base,
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    }),
  };

  const itemVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduceMotion ? 0 : 0.5, ease },
    },
  };

  const drawVariants: Variants = {
    hidden: { pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: reduceMotion ? 0 : 2.2, ease },
        opacity: { duration: reduceMotion ? 0 : 0.7, ease },
      },
    },
  };

  const pentimentoVariants: Variants = {
    hidden: { pathLength: reduceMotion ? 1 : 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.12,
      transition: {
        pathLength: { duration: reduceMotion ? 0 : 2.6, ease, delay: reduceMotion ? 0 : 0.25 },
        opacity: { duration: reduceMotion ? 0 : 1, ease, delay: reduceMotion ? 0 : 0.25 },
      },
    },
  };

  const markVariants: Variants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.6 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: { duration: reduceMotion ? 0 : 0.5, ease, delay: reduceMotion ? 0 : 2 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/70 bg-background"
      aria-labelledby="areas-heading"
    >
      {/* Faint paper grain over the whole section */}
      <PaperGrain />

      {/* Territory sketch — a hand-considered gesture at this coast, not a divider */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2"
      >
        <svg
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="h-auto w-full"
        >
          <defs>
            <filter id="coast-tremor" x="-5%" y="-20%" width="110%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.013"
                numOctaves={2}
                seed={7}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={9}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>

          {/* second pass — the faintest of the three, corrected differently
              than the pentimento so the passes never sit in parallel */}
          <motion.path
            variants={pentimentoVariants}
            d={secondPassPath}
            transform="translate(-5 5) rotate(0.4 600 300)"
            stroke="var(--brass)"
            strokeWidth={0.9}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={0.08}
          />

          {/* pentimento — the redrawn-once pass, sitting behind, offset */}
          <motion.path
            variants={pentimentoVariants}
            d={pentimentoPath}
            transform="translate(7 -6)"
            stroke="var(--brass)"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* the coast itself — three segments, filtered for organic tremor */}
          <g filter="url(#coast-tremor)" className="opacity-[0.55]">
            {coastSegments.map((seg, i) => (
              <motion.path
                key={i}
                variants={drawVariants}
                d={seg.d}
                stroke="var(--brass)"
                strokeWidth={seg.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            ))}
          </g>

          {/* survey marks — a cartographer's hand noting two real places on
              the line, not decoration floating free of the content */}
          {marks.map((mark) => (
            <motion.g
              key={mark.label}
              variants={markVariants}
              style={{ x: mark.x, y: mark.y, rotate: mark.rotate }}
            >
              <line
                x1={-7}
                y1={0}
                x2={7}
                y2={0}
                stroke="var(--brass)"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
              <line
                x1={0}
                y1={-7}
                x2={0}
                y2={7}
                stroke="var(--brass)"
                strokeWidth={1.2}
                strokeLinecap="round"
              />
              <circle r={2.3} fill="var(--brass)" />
              <text
                x={11}
                y={-9}
                fontFamily="var(--font-serif)"
                fontStyle="italic"
                fontSize={16}
                fill="var(--brass)"
                letterSpacing="0.02em"
              >
                {mark.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-28">
        {/* Section header */}
        <div className="mb-10 flex items-center gap-3 lg:mb-14">
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Service Areas
          </span>
        </div>

        <div className="mb-20 max-w-xl lg:mb-28">
          <h2
            id="areas-heading"
            className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
          >
            We know these
            <br />
            streets by name.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Across Sharjah and Ajman — not a radius on a map, but the roads and
            neighbourhoods we turn onto every week.
          </p>
        </div>

        {/* Diptych — offset hard, not mirrored: Sharjah large and high-left,
            Ajman smaller, lower, and pinned to the right edge. */}
        <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-12 lg:gap-x-8">
          <Register
            region={regions[0]}
            base={reduceMotion ? 0 : 0.5}
            listVariants={listVariants}
            itemVariants={itemVariants}
            className="lg:col-[1/7] lg:row-[1]"
            nameClass="text-[clamp(2.6rem,5.4vw,4.5rem)]"
          />

          <Register
            region={regions[1]}
            base={reduceMotion ? 0 : 1.1}
            listVariants={listVariants}
            itemVariants={itemVariants}
            align="right"
            className="lg:col-[9/13] lg:row-[1] lg:translate-y-40"
            nameClass="text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />
        </div>

        {/* Quiet door left open */}
        <div className="mt-24 border-t border-border/70 pt-8 lg:mt-56">
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Don&apos;t see your area?{" "}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-foreground underline decoration-brass/50 decoration-1 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Just ask
              <ArrowUpRightIcon
                className="size-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>{" "}
            — chances are we&apos;re closer than you think.
          </p>
        </div>
      </div>
    </section>
  );
}

function Register({
  region,
  base,
  listVariants,
  itemVariants,
  className,
  nameClass,
  align = "left",
}: {
  region: Region;
  base: number;
  listVariants: Variants;
  itemVariants: Variants;
  className?: string;
  nameClass?: string;
  align?: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div className={className}>
      <div
        className={`flex items-center gap-3 ${isRight ? "lg:flex-row-reverse lg:text-right" : ""}`}
      >
        {/* Locator — the actual wordmark mark, not a stand-in bullet */}
        <Logo
          markOnly
          label=""
          className="[&_svg]:h-7 [&_svg]:w-7 shrink-0"
        />
        <h3
          className={`font-serif font-medium leading-[1.0] tracking-[-0.015em] text-foreground ${nameClass}`}
        >
          {region.city}
        </h3>
      </div>
      <p
        className={`mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground ${isRight ? "lg:text-right" : ""}`}
      >
        {region.note}
      </p>

      <motion.ul
        custom={base}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-7 flex flex-col gap-y-3.5"
      >
        {region.neighbourhoods.map((name) => (
          <motion.li
            key={name}
            variants={itemVariants}
            className={`group flex items-center gap-3.5 ${isRight ? "lg:flex-row-reverse" : ""}`}
          >
            {/* a drawn tick, not a round bullet */}
            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 origin-left bg-brass/70 transition-all duration-300 group-hover:w-8 group-hover:bg-brass"
            />
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-foreground/85">
              {name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

function PaperGrain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-multiply dark:opacity-[0.09] dark:mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
