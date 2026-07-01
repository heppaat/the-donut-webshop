import { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NAV_LINKS, NavLink } from "@/components/navbar/constants";
import { cn } from "@/lib/utils";

interface MobileMenuCardProps {
  isOpen: boolean;
  isClosing: boolean;
  onCloseMenu: () => void;
}

export const MobileMenuCard = ({
  isOpen,
  isClosing,
  onCloseMenu,
}: MobileMenuCardProps) => {
  if (!isOpen) return null;

  return (
    <nav
      aria-label="Mobile"
      // The panel itself has no animation — it appears/disappears instantly
      // (mounted & unmounted by React); only the items below animate.
      className="absolute inset-x-4 top-full mt-6 overflow-hidden rounded-3xl border-2 border-foreground bg-background shadow-brutal md:hidden"
    >
      <ul className="flex flex-col">
        {NAV_LINKS.map(({ label, href }: NavLink, index) => (
          <li
            key={href}
            // Inline `--index` (0-based) + `--total` drive the staggered
            // enter/exit delay; see `.mobile-menu-item` in animations.css.
            style={
              { "--index": index, "--total": NAV_LINKS.length } as CSSProperties
            }
            className={cn(
              "mobile-menu-item border-b-2 border-foreground last:border-b-0",
              isClosing && "is-closing"
            )}
          >
            <Link
              href={href}
              onClick={onCloseMenu}
              // `hover:` only fires on hover-capable devices (Tailwind v4), so
              // `active:` gives touch users press feedback on tap.
              className="group flex items-center justify-between px-5 py-4 transition-colors hover:bg-primary hover:text-background active:bg-primary active:text-background"
            >
              <span className="flex items-baseline gap-3">
                {/* Spec-sheet index — JetBrains-Mono micro-label. */}
                <span className="font-mono text-2xs tracking-label text-foreground/50 group-hover:text-background/70 group-active:text-background/70">
                  0{index + 1}
                </span>
                <span className="font-display text-2xl">{label}</span>
              </span>
              {/* Arrow slides in from the left on hover (desktop delight). */}
              <ArrowRight
                className="size-5 -translate-x-10 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={3}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
