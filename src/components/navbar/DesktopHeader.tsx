"use client";

import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DesktopHeaderProps {
  children: ReactNode;
  className?: string;
}

// Desktop-only header (shown at `md`+). Stays in place and frosts over once
// scrolled past its own height. The mobile header is a separate component.
export const DesktopHeader = ({ children, className }: DesktopHeaderProps) => {
  const scrolled = useScrolled(96);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 isolate z-50 hidden w-full transition-[background-color,padding] duration-300 ease-in-out select-none md:block",
        scrolled
          ? "bg-background/85 py-4 backdrop-blur-md"
          : "bg-transparent py-6",
        className
      )}
    >
      {children}
    </header>
  );
};
