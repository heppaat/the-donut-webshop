"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { NavBrand } from "@/components/navbar/NavBrand";
import { CartButton } from "@/components/navbar/CartButton";
import { MenuToggleButton } from "@/components/navbar/MenuToggleButton";
import { MobileMenuCard } from "@/components/navbar/MobileMenuCard";
import { PageDimOverlay } from "@/components/navbar/PageDimOverlay";

// The panel unmounts instantly; this delay only holds it mounted long enough
// for the items to finish their reverse retract (see `.mobile-menu-item`
// in animations.css). Longest path = the last item out: (total-1)*0.08s delay
// + 0.36s = 0.6s at 4 links. Keep in sync if the item exit timing changes.
const CLOSE_ANIMATION_MS = 600;

/**
 * Mobile-only header (shown below `md`). Hides on scroll-down and reveals on
 * scroll-up (and stays put while the menu is open), and owns the mobile-menu
 * open/close state + the `MobileMenuCard` it toggles.
 */
export const MobileHeader = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile = below the `md` breakpoint (768px).
  const isMobileViewport = useMediaQuery("(max-width: 767px)");

  // Hide on scroll-down / reveal on scroll-up — but never hide while the menu
  // is open (the panel is anchored to this header).
  const scrolledVisible = useScrollDirection(100);
  const isVisible = scrolledVisible || isMobileOpen;

  // Freeze page scroll while the menu is open. Keyed on `isMobileOpen` (the
  // source of truth), so the lock holds through the close animation and lifts
  // when the panel unmounts.
  useBodyScrollLock(isMobileOpen);

  const closeMobileMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      setIsMobileOpen(false);
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileOpen) {
      closeMobileMenu();
    } else {
      setIsMobileOpen(true);
    }
  }, [isMobileOpen, closeMobileMenu]);

  // Leaving the mobile viewport: force-close instantly (no exit animation).
  useEffect(() => {
    if (!isMobileViewport && (isMobileOpen || isClosing)) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setIsMobileOpen(false);
      setIsClosing(false);
    }
  }, [isMobileViewport, isMobileOpen, isClosing]);

  // Close on Escape.
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileOpen, closeMobileMenu]);

  // Clear the close timer on unmount.
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Frosted scrim behind the open menu. Sibling of the header (not nested)
          so its z-40 stays in the root stacking context — below the z-50 header
          + menu card, above the page. Tapping it closes the menu. */}
      {isMobileOpen && (
        <PageDimOverlay isClosing={isClosing} onClick={closeMobileMenu} />
      )}

      <header
        className={cn(
          // Structure + slide behavior. TODO: fill in color + height/padding.
          "fixed top-0 left-0 z-50 w-full bg-background/85 py-4 backdrop-blur-md transition-transform duration-300 ease-in-out select-none md:hidden",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* `relative` so the absolutely-positioned MobileMenuCard anchors here. */}
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <NavBrand />
          {/* Cart + menu grouped on the right. The cart is an action (opens the
              OrderDrawer), not a nav target, so it lives here rather than in
              NAV_LINKS — mirrors the desktop CartButton in NavActions and keeps
              the mobile menu list a pure set of anchor links. */}
          <div className="flex items-center gap-1">
            <CartButton />
            <MenuToggleButton
              isOpen={isMobileOpen}
              isClosing={isClosing}
              onToggle={toggleMobileMenu}
            />
          </div>
          <MobileMenuCard
            isOpen={isMobileOpen}
            isClosing={isClosing}
            onCloseMenu={closeMobileMenu}
          />
        </div>
      </header>
    </>
  );
};
