"use client";
import { useEffect, useState } from "react";

/**
 * Hide-on-scroll-down / reveal-on-scroll-up.
 * Returns whether a header should currently be visible: always visible near the
 * top of the page (within `topThreshold`), otherwise visible only while
 * scrolling up. Used by the mobile header.
 */
export const useScrollDirection = (topThreshold = 100) => {
  // Start visible — at the top of the page the header should show on load.
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > topThreshold) {
        setIsVisible(currentScroll < lastScrollY);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topThreshold]);

  return isVisible;
};
