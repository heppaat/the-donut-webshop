import Image from "next/image";
import DonutSquare from "/public/donut_square.png";
import { Donut } from "@/components/landing/_components/shop/donuts";

export const DonutCard = ({ name, flavor, price, hue, tag }: Donut) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-background shadow-brutal transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg">
      {/* Image area — pastel tint per donut */}
      <div
        className="relative aspect-square overflow-hidden border-b-2 border-foreground"
        style={{ backgroundColor: `hsl(${hue} 70% 88%)` }}
      >
        {/* Tag chip */}
        {tag && (
          <span className="absolute left-3.5 top-3.5 z-20 rounded-full bg-foreground px-3 py-1 font-mono text-2xs font-bold uppercase tracking-widest text-background">
            {tag}
          </span>
        )}

        {/* Donut (shared image, hue-rotated to the flavor) */}
        <Image
          src={DonutSquare}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          style={{ filter: `hue-rotate(${hue - 320}deg)` }}
          className="z-10 object-contain p-6 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl tracking-tight text-foreground">
            {name}
          </h3>
          <span className="font-display text-2xl text-primary">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="flex-1 font-mono text-xs leading-relaxed text-foreground/60">
          {flavor}
        </p>

        {/* TODO: wire to cart (addItem) — intentionally inert for now */}
        <button
          type="button"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-foreground bg-foreground px-4 py-3 font-display text-sm text-background transition-colors duration-150 hover:border-primary hover:bg-primary"
        >
          <span aria-hidden>＋</span> Add to order
        </button>
      </div>
    </div>
  );
};
