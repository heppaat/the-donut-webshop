import { cn } from "@/lib/utils";

interface PageDimOverlayProps {
  /** Fades the scrim back out; the parent owns the deferred unmount. */
  isClosing?: boolean;
  /** Tapping the scrim — typically closes whatever it backs. */
  onClick?: () => void;
  className?: string;
}

/**
 * Full-screen frosted scrim that dims the page behind an open menu/drawer.
 * A modern glass accent (backdrop-blur), so it fades in/out smoothly rather
 * than snapping like the brutalist panels. Sits at `z-40` — one tier below the
 * `z-50` headers, so the nav + menu card stay crisp above it while all page
 * content dims. Render it as a *sibling* of the header, never nested inside it
 * (nesting would sandbox this `z-40` inside the header's `z-50` context).
 */
export const PageDimOverlay = ({
  isClosing = false,
  onClick,
  className,
}: PageDimOverlayProps) => {
  return (
    <div
      aria-hidden="true"
      onClick={onClick}
      className={cn(
        "page-dim-overlay fixed inset-0 z-40 bg-black/20 backdrop-blur-sm",
        isClosing && "is-closing",
        className
      )}
    />
  );
};
