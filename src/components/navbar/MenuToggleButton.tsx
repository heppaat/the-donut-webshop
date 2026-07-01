"use client";

import { Squash } from "hamburger-react";
import { cn } from "@/lib/utils";

interface MenuToggleButtonProps {
  isOpen: boolean;
  isClosing: boolean;
  onToggle: () => void;
  className?: string;
}

export const MenuToggleButton = ({
  isOpen,
  isClosing,
  onToggle,
  className,
}: MenuToggleButtonProps) => {
  const showCloseIcon = isOpen && !isClosing;

  return (
    // `currentColor` makes the bars inherit `text-foreground` from here.
    <div
      className={cn(
        "flex items-center justify-center text-foreground md:hidden",
        className
      )}
    >
      <Squash
        toggled={showCloseIcon}
        toggle={onToggle}
        size={28}
        rounded
        color="currentColor"
        label={showCloseIcon ? "Close menu" : "Open menu"}
      />
    </div>
  );
};
