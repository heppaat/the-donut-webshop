"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface NavbarContextType {
  isMobileMenuOpen: boolean;
  isClosing: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const NavbarContext = createContext<NavbarContextType | undefined>(
  undefined
);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    // Wait for exit animations to complete
    // 0.1s (first item delay) + 0.6s (last item delay) + 0.25s (animation duration) = 950ms
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 950);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const value: NavbarContextType = {
    isMobileMenuOpen,
    isClosing,
    toggleMobileMenu,
    closeMobileMenu,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
}
