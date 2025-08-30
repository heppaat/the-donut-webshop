import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mt-16 mb-4">
          TEST FOR SCROLLING
        </h1>

        <div className="flex flex-col gap-16">
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
        <div className="flex flex-col gap-16">
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
        <div className="flex flex-col gap-16">
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
