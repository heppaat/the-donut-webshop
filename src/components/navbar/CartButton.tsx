"use client";

import { ComponentProps } from "react";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import useCart from "@/hooks/useCart";

export const CartButton = ({
  className,
  ...props
}: ComponentProps<"button">) => {
  const { count } = useCart();

  return (
    <button
      aria-label={`Shopping cart, ${count} item${count === 1 ? "" : "s"}`}
      className={cn(
        "relative flex size-11 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground transition-transform duration-200 hover:scale-105",
        className
      )}
      {...props}
    >
      <ShoppingCart className="size-5" strokeWidth={2} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-white bg-primary px-1 font-mono text-[11px] font-bold text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  );
};
