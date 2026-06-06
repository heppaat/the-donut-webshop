"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollHeaderProps {
  children: ReactNode;
  className?: string;
}

export const ScrollHeader = ({ children, className }: ScrollHeaderProps) => {
  const isHeaderVisible = useScrollDirection();

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-20 isolate w-full select-none transition-transform duration-300 ease-in-out",
        className,
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      {children}
    </header>
  );
};
