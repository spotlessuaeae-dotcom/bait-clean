import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render only the mark, without the wordmark. */
  markOnly?: boolean;
  /** Accessible label; set to "" when the logo is decorative next to visible text. */
  label?: string;
}

/**
 * Bait Clean identity.
 *
 * The mark abstracts the Arabic letter ب (baa) — the first letter of بيت / "bait"
 * (home) — as a single confident baseline stroke with one dot beneath it. Read
 * another way, the stroke is a low courtyard roofline over its threshold: a quiet
 * bicultural signature rather than a literal house.
 */
export function Logo({ className, markOnly = false, label = "Bait Clean — home" }: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-3 text-foreground", className)}
      role="img"
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0 text-primary"
        fill="none"
        aria-hidden="true"
      >
        {/* baseline stroke — the ب body / courtyard roofline */}
        <path
          d="M6 24.5 C6 26.6 7.7 28.3 9.8 28.3 L28 28.3 C31.6 28.3 34.5 25.4 34.5 21.8 L34.5 14"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* the single dot of ب */}
        <circle cx="20" cy="34.4" r="1.9" className="fill-brass" />
      </svg>

      {!markOnly && (
        <span className="font-serif text-xl font-medium leading-none tracking-[0.14em] text-foreground">
          <span>BAIT</span>
          <span className="mx-1.5 align-middle text-brass" aria-hidden="true">
            ·
          </span>
          <span>CLEAN</span>
        </span>
      )}
    </span>
  );
}
