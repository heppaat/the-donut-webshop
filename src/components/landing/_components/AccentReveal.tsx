"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Scroll-into-view "sticker pop" for the italic Playfair accent words in the
 * section headlines (About / Shop / Spin). The word springs in from slightly
 * small and tilted, then bounces to full size / straight — nodding to the
 * brutalist rotate(-8deg) sticker motif. Only transform + opacity animate, so
 * the italic glyphs are never clipped.
 *
 * A client leaf on purpose: the sections stay server components, only this word
 * opts into Motion. Fires once (never re-triggers on scroll-by); collapses to a
 * plain <span> under prefers-reduced-motion.
 *
 * Detection is split from the animation on purpose: the OUTER span carries the
 * `useInView` observer and stays fully visible (no transform / no fade), while
 * the INNER span runs the pop. Observing the *animated* element directly (e.g.
 * `whileInView` on it) is unreliable — its hidden initial state (opacity 0 +
 * scaled-down transform) can read as "not intersecting", so the reveal never
 * fires. The clean wrapper gives the observer a stable box to watch.
 */
export const AccentReveal = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      <motion.span
        className="inline-block"
        initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
        animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : undefined}
        transition={{
          // Low damping = a springy overshoot: the "slap + wobble flat" of a
          // sticker being placed.
          scale: { type: "spring", stiffness: 320, damping: 20 },
          rotate: { type: "spring", stiffness: 320, damping: 20 },
          opacity: { duration: 0.2, ease: "easeOut" },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
