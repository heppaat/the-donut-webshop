import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/navbar/CartButton";
import { cn } from "@/lib/utils";

export const NavActions = ({ className }: { className?: string }) => {
  return (
    <div className={cn("hidden items-center gap-4 md:flex", className)}>
      <CartButton />
      {/* Rendered as an anchor (asChild) so it stays a server component — the
          `#shop` hash scrolls to the menu section, smoothly via the global
          `scroll-behavior: smooth` base style; no onClick/client boundary. */}
      <Button
        asChild
        className="h-11 rounded-full border-2 border-transparent bg-foreground font-semibold text-background hover:border-foreground has-[>svg]:px-6"
      >
        <a href="#shop">
          Order now
          <ArrowRight className="size-4" strokeWidth={3} />
        </a>
      </Button>
    </div>
  );
};
