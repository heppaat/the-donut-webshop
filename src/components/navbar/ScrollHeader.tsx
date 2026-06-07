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
        "fixed left-0 top-0 z-20 isolate w-full select-none border-b transition-[background-color,border-color,padding] duration-300 ease-in-out",
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
