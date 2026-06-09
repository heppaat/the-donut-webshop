"use client";

import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollHeaderProps {
  children: ReactNode;
  className?: string;
}

export const ScrollHeader = ({ children, className }: ScrollHeaderProps) => {
  const scrolled = useScrolled(96);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 isolate z-20 w-full border-b transition-[background-color,border-color,padding] duration-300 ease-in-out select-none",
        scrolled
          ? "border-black/5 bg-background/85 py-4 backdrop-blur-md"
          : "border-transparent bg-transparent py-6",
        className
      )}
    >
      {children}
    </header>
  );
};
