"use client";
import { useEffect } from "react";

/**
 * Freezes page scroll while `locked` is true (an open mobile menu, drawer, or
 * modal), restoring the body's previous inline styles on unlock/unmount.
 *
 * We rely on `scrollbar-gutter: stable` (globals.css) to keep the layout width
 * constant when the scrollbar is hidden — that's what stops the fixed navbar
 * from shifting sideways, which body padding alone can't fix (a fixed element
 * is anchored to the viewport, out of reach of the body's padding box). The
 * manual padding fallback below only runs on older engines without gutter
 * support; where the gutter is reserved, adding it would itself shift content.
 */
export const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";

    const gutterReserved =
      typeof CSS !== "undefined" && CSS.supports("scrollbar-gutter", "stable");
    if (!gutterReserved) {
      // Width the scrollbar occupied (0 on overlay-scrollbar devices).
      const scrollbarWidth = window.innerWidth - body.clientWidth;
      if (scrollbarWidth > 0) {
        const basePadding =
          parseFloat(getComputedStyle(body).paddingRight) || 0;
        body.style.paddingRight = `${basePadding + scrollbarWidth}px`;
      }
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [locked]);
};
