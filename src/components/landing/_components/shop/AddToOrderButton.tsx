"use client";

import useCart from "@/hooks/useCart";

/**
 * Client leaf inside the (otherwise server-rendered) DonutCard — the only body
 * part that needs the cart, so the card itself stays an RSC. Before this donut
 * is in the box it's a single "Add to order" button; once added it swaps to a
 * −/＋ stepper showing the live quantity (mirrors the design mockup). The navbar
 * count badge + OrderDrawer update live off the same cart.
 */
export const AddToOrderButton = ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  const { items, addItem, removeItem } = useCart();
  const qty = items[id] ?? 0;

  if (qty === 0) {
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
  }

  return (
    <div className="mt-3 flex items-center justify-between gap-2 rounded-full border-2 border-foreground bg-primary p-1">
      <button
        type="button"
        onClick={() => removeItem(id)}
        aria-label={`Remove one ${name} from order`}
        className="grid size-9 place-items-center rounded-full border-2 border-foreground bg-white font-display text-lg leading-none text-foreground transition-transform duration-150 active:scale-90"
      >
        <span aria-hidden>−</span>
      </button>
      <span
        aria-live="polite"
        className="font-display text-sm text-primary-foreground"
      >
        {qty} in order
      </span>
      <button
        type="button"
        onClick={() => addItem(id)}
        aria-label={`Add one ${name} to order`}
        className="grid size-9 place-items-center rounded-full border-2 border-foreground bg-white font-display text-lg leading-none text-foreground transition-transform duration-150 active:scale-90"
      >
        <span aria-hidden>＋</span>
      </button>
    </div>
  );
};
