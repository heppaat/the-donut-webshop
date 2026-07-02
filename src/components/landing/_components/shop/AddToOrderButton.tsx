"use client";

import useCart from "@/hooks/useCart";

/**
 * Client leaf inside the (otherwise server-rendered) DonutCard — the only part
 * that needs the cart, so the card itself stays an RSC. Adds one of this donut
 * to the box; the navbar count badge + OrderDrawer update live.
 */
export const AddToOrderButton = ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(id)}
      aria-label={`Add ${name} to order`}
      className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-foreground bg-foreground px-4 py-3 font-display text-sm text-background transition-colors duration-150 hover:border-primary hover:bg-primary active:bg-primary"
    >
      <span aria-hidden>＋</span> Add to order
    </button>
  );
};
