"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
  type MotionValue,
} from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type Figure = {
  src: string;
  alt: string;
  caption?: string;
};

const anchor: Figure = {
  src: "/standard-direction-edge.png",
  alt: "Earth-toned gloved hands carefully brushing dust from a wooden window track in warm daylight.",
};

const windowTrack: Figure = {
  src: "/standard-window.png",
  alt: "A professional cleaner wiping a bright window track clean.",
  caption: "Window tracks.",
};

const grout: Figure = {
  src: "/standard-grout.png",
  alt: "A yellow-gloved cleaner scrubbing pale bathroom tile grout.",
  caption: "Grout lines.",
};

const shelf: Figure = {
  src: "/standard-corners-brass.png",
  alt: "A close architectural detail of warm brass trim meeting a pale stone corner with precise, clean lines.",
  caption: "Corners and edges.",
};

export function TheStandard() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle depth drift — anchor moves least, small details a touch more.
  const driftAnchor = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const driftSlow = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const driftFast = useTransform(scrollYProgress, [0, 1], [56, -56]);
  const zero = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const figureVariants: Variants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      scale: reduceMotion ? 1 : 1.04,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        delay: reduceMotion ? 0 : i * 0.16,
        ease,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border/70 bg-background"
      aria-labelledby="standard-heading"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
          {/* Text — tucked into the top-left margin */}
          <div className="lg:col-[1/5] lg:row-[1] lg:self-start lg:pt-4 lg:pr-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                The Standard
              </span>
            </div>
            <h2
              id="standard-heading"
              className="max-w-sm font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
            >
              The parts you only notice up close.
            </h2>
            <p className="mt-5 max-w-xs text-lg leading-relaxed text-muted-foreground text-pretty">
              A room can look clean from the doorway. Whether it is shows up
              close — in the tracks, the corners, and the edges a quick pass
              tends to skip.
            </p>
          </div>

          {/* Anchor — dominant, bleeds to the right edge */}
          <DriftFigure
            className="lg:col-[6/13] lg:row-[1/3]"
            aspect="aspect-[4/5]"
            figure={anchor}
            index={0}
            variants={figureVariants}
            drift={reduceMotion ? zero : driftAnchor}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
          />

          {/* Window — medium, left column, nudged down */}
          <DriftFigure
            className="lg:col-[1/4] lg:row-[2] lg:translate-y-6"
            aspect="aspect-[3/4]"
            figure={windowTrack}
            index={1}
            variants={figureVariants}
            drift={reduceMotion ? zero : driftFast}
            sizes="(min-width: 1024px) 24vw, 100vw"
          />

          {/* Grout — smallest, offset within its cell */}
          <DriftFigure
            className="lg:col-[4/6] lg:row-[2] lg:translate-y-20"
            aspect="aspect-square"
            figure={grout}
            index={2}
            variants={figureVariants}
            drift={reduceMotion ? zero : driftSlow}
            sizes="(min-width: 1024px) 16vw, 100vw"
          />

          {/* Shelf — medium, below, offset left */}
          <DriftFigure
            className="lg:col-[2/6] lg:row-[3] lg:-translate-y-2 lg:w-[86%]"
            aspect="aspect-[5/4]"
            figure={shelf}
            index={3}
            variants={figureVariants}
            drift={reduceMotion ? zero : driftSlow}
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

function DriftFigure({
  figure,
  index,
  variants,
  drift,
  className,
  aspect,
  sizes,
  priority,
}: {
  figure: Figure;
  index: number;
  variants: Variants;
  drift: MotionValue<number>;
  className?: string;
  aspect: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <motion.figure style={{ y: drift }} className={className}>
      <motion.div
        custom={index}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`relative w-full overflow-hidden rounded-xl bg-muted ${aspect}`}
      >
        <Image
          src={figure.src || "/placeholder.svg"}
          alt={figure.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
      {figure.caption ? (
        <figcaption className="mt-3 flex items-center gap-2">
          <span className="h-px w-4 bg-brass/60" aria-hidden="true" />
          <span className="text-sm leading-relaxed text-muted-foreground">
            {figure.caption}
          </span>
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
