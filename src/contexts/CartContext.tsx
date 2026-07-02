"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

// Cart is keyed by donut id → quantity (mirrors the design mockup's cart shape).
export type CartItems = Record<number, number>;

interface CartContextType {
  items: CartItems;
  count: number;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  // Order-drawer UI state. Colocated with the cart data it presents (rather
  // than a separate provider) — the drawer is the cart's own surface, and the
  // mockup likewise keeps `cart` + `cartOpen` together at the top level.
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addItem = useCallback(
    (id: number) => setItems((c) => ({ ...c, [id]: (c[id] || 0) + 1 })),
    []
  );

  const removeItem = useCallback(
    (id: number) =>
      setItems((c) => {
        const next = { ...c, [id]: Math.max(0, (c[id] || 0) - 1) };
        if (next[id] === 0) delete next[id];
        return next;
      }),
    []
  );

  const clearCart = useCallback(() => setItems({}), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const count = Object.values(items).reduce((sum, n) => sum + n, 0);

  const value = useMemo<CartContextType>(
    () => ({
      items,
      count,
      addItem,
      removeItem,
      clearCart,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
    }),
    [
      items,
      count,
      addItem,
      removeItem,
      clearCart,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
