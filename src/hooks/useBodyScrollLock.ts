"use client";
import { useEffect } from "react";

/**
 * Freezes page scroll while `locked` is true (an open mobile menu, drawer, or
 * modal), restoring the body's previous inline styles on unlock/unmount.
 * Compensates for the now-hidden scrollbar with matching right padding so the
 * page doesn't shift horizontally when the lock engages (a no-op on mobile,
 * where scrollbars are overlaid and take up no width).
 */
export const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;

    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    // Width the scrollbar occupied (0 on overlay-scrollbar devices).
    const scrollbarWidth = window.innerWidth - body.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const basePadding = parseFloat(getComputedStyle(body).paddingRight) || 0;
      body.style.paddingRight = `${basePadding + scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [locked]);
};
