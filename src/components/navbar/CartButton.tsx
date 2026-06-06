import { ComponentProps } from "react";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export const CartButton = ({
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      aria-label="Shopping cart"
      className={cn(
        "flex size-11 items-center justify-center rounded-full border-2 border-foreground bg-white text-foreground transition-transform duration-200 hover:scale-105",
        className
      )}
      {...props}
    >
      <ShoppingCart className="size-5" strokeWidth={2} />
    </button>
  );
};
