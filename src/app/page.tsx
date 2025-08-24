import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Button Tests
        </h1>

        {/* Horizontal button layout */}
        <div className="flex flex-wrap">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button icon={<ShoppingCart size={16} />}>Add to Cart</Button>
          <Button variant="secondary" icon={<Heart size={16} />}>
            Favorite Donut
          </Button>
          <Button variant="outline">Outlined Button</Button>
          <Button variant="outline" icon={<ShoppingCart size={16} />}>
            Add to Cart
          </Button>
          <Button icon={<ShoppingCart size={16} />} size="icon" />
        </div>
      </div>
    </div>
  );
}
