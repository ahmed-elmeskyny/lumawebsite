"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { SizeRange } from "@/types/product";

/**
 * LOCAL CART PROTOTYPE — not a commerce backend.
 *
 * docs/LUMA_VISUAL_DIRECTION.md permits Add to Cart to work as a clearly
 * labelled local prototype before Shopify is connected. This holds cart
 * lines in memory only: nothing is persisted, no order is created, and
 * there is no checkout. A Shopify cart implementation replaces this
 * provider without changing the components that consume it.
 */
export interface CartLine {
  handle: string;
  name: string;
  size: SizeRange;
  priceMad: number;
  quantity: number;
}

interface CartContextValue {
  lines: readonly CartLine[];
  itemCount: number;
  addLine: (line: Omit<CartLine, "quantity">) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<readonly CartLine[]>([]);

  const addLine = useCallback((incoming: Omit<CartLine, "quantity">) => {
    setLines((current) => {
      const index = current.findIndex(
        (line) => line.handle === incoming.handle && line.size === incoming.size,
      );
      if (index === -1) {
        return [...current, { ...incoming, quantity: 1 }];
      }
      return current.map((line, i) =>
        i === index ? { ...line, quantity: line.quantity + 1 } : line,
      );
    });
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      itemCount: lines.reduce((total, line) => total + line.quantity, 0),
      addLine,
    }),
    [lines, addLine],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
