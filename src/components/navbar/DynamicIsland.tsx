"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { NAV_LINKS } from "@/components/navbar/constants";

// Snappy spring keeps the sliding pill mechanical, not gooey — in keeping with
// the brutalist surface (the motion is the modern accent, the pill stays flat).
const PILL_SPRING = { type: "spring", stiffness: 380, damping: 32 } as const;

/**
 * Desktop-only center nav pill ("dynamic island").
 * A single highlight pill slides between links via Motion's shared `layoutId`
 * ("magic move"): hovering a link previews it, and the highlight settles on the
 * link you last clicked (it does NOT follow scroll position).
 * Hidden below `md`; the mobile nav is a separate component (built later).
 */
export const DynamicIsland = () => {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Hover previews a link; otherwise the highlight rests on the last click.
  const highlighted = hovered ?? selected;

  return (
    <motion.nav
      initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseLeave={() => setHovered(null)}
      className="mx-auto hidden h-11 items-center gap-1 rounded-full border-2 border-foreground bg-white p-1 shadow-brutal-sm md:flex"
    >
      {NAV_LINKS.map((link) => {
        const isActive = highlighted === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            onMouseEnter={() => setHovered(link.href)}
            onClick={() => setSelected(link.href)}
            className="relative flex items-center rounded-full px-5 py-1.5 text-sm font-semibold text-foreground"
          >
            {/* Label stays one color; the pill inverts it via blend mode. */}
            <span>{link.label}</span>
            {/* White pill painted ON TOP with `mix-blend-difference`: the text
                inverts purely where the pill overlaps it, so the color tracks
                the spring exactly instead of flipping on state change. On this
                near-black/near-white palette difference renders the pill black
                with white text — the brutalist invert, perfectly synced. */}
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                aria-hidden
                className="absolute inset-0 rounded-full bg-white mix-blend-difference"
                transition={reduceMotion ? { duration: 0 } : PILL_SPRING}
              />
            )}
          </Link>
        );
      })}
    </motion.nav>
  );
};
