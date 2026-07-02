"use client";

import { ComponentProps } from "react";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import useCart from "@/hooks/useCart";

export const CartButton = ({
  className,
  ...props
}: ComponentProps<"button">) => {
  const { count, openDrawer } = useCart();

  return (
    <button
      onClick={openDrawer}
      aria-label={`Open your box, ${count} item${count === 1 ? "" : "s"}`}
      aria-haspopup="dialog"
      className={cn(
        "relative flex size-11 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground transition-transform duration-150 active:scale-95",
        className
      )}
      {...props}
    >
      <ShoppingCart className="size-5" strokeWidth={2.4} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-white bg-primary px-1 font-mono text-2xs font-bold text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  );
};
