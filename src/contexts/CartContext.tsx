"use client";

import { createContext, ReactNode, useState } from "react";

// Cart is keyed by donut id → quantity (mirrors the design mockup's cart shape).
export type CartItems = Record<number, number>;

interface CartContextType {
  items: CartItems;
  count: number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});

  const addItem = (id: number) =>
    setItems((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const removeItem = (id: number) =>
    setItems((c) => {
      const next = { ...c, [id]: Math.max(0, (c[id] || 0) - 1) };
      if (next[id] === 0) delete next[id];
      return next;
    });

  const clearCart = () => setItems({});

  const count = Object.values(items).reduce((sum, n) => sum + n, 0);

  const value: CartContextType = {
    items,
    count,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
