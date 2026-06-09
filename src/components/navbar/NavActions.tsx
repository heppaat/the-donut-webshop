import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/navbar/CartButton";

export const NavActions = () => {
  return (
    <div className="flex items-center gap-4">
      <CartButton />
      <Button className="h-11 rounded-full border-2 border-transparent bg-foreground font-semibold text-background hover:border-foreground has-[>svg]:px-6">
        Order now
        <ArrowRight className="size-4" strokeWidth={3} />
      </Button>
    </div>
  );
};
