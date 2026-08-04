"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { z } from "zod";
import { SIZE_RANGES, type SizeRange } from "@/types/product";

/**
 * Normalized cart line used by the local catalogue adapter today and by the
 * Shopify cart adapter later. Product presentation is resolved from the
 * catalogue by handle, so cart state stays small and commerce-focused.
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
  subtotalMad: number;
  addLine: (line: Omit<CartLine, "quantity">, quantity?: number) => void;
  setLineQuantity: (handle: string, size: SizeRange, quantity: number) => void;
  removeLine: (handle: string, size: SizeRange) => void;
  clearCart: () => void;
}

const cartSchema = z.array(
  z.object({
    handle: z.string().min(1),
    name: z.string().min(1),
    size: z.enum(SIZE_RANGES),
    priceMad: z.number().nonnegative(),
    quantity: z.number().int().min(1).max(99),
  }),
);

const STORAGE_KEY = "luma-cart-v1";
const EMPTY_LINES: readonly CartLine[] = Object.freeze([]);
const listeners = new Set<() => void>();
let currentLines: readonly CartLine[] = readStoredLines();

function readStoredLines(): readonly CartLine[] {
  if (typeof window === "undefined") return EMPTY_LINES;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_LINES;
    const parsed = cartSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : EMPTY_LINES;
  } catch {
    return EMPTY_LINES;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentLines;
}

function getServerSnapshot() {
  return EMPTY_LINES;
}

function commit(next: readonly CartLine[]) {
  currentLines = next;

  try {
    if (next.length === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  } catch {
    // The cart still works in memory when storage is blocked or unavailable.
  }

  listeners.forEach((listener) => listener());
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addLine = useCallback(
    (incoming: Omit<CartLine, "quantity">, quantity = 1) => {
      const safeQuantity = Math.max(1, Math.min(99, Math.floor(quantity)));
      const existing = currentLines.find(
        (line) => line.handle === incoming.handle && line.size === incoming.size,
      );

      if (!existing) {
        commit([...currentLines, { ...incoming, quantity: safeQuantity }]);
        return;
      }

      commit(
        currentLines.map((line) =>
          line === existing
            ? { ...line, quantity: Math.min(99, line.quantity + safeQuantity) }
            : line,
        ),
      );
    },
    [],
  );

  const setLineQuantity = useCallback(
    (handle: string, size: SizeRange, quantity: number) => {
      if (quantity <= 0) {
        commit(
          currentLines.filter(
            (line) => line.handle !== handle || line.size !== size,
          ),
        );
        return;
      }

      commit(
        currentLines.map((line) =>
          line.handle === handle && line.size === size
            ? { ...line, quantity: Math.min(99, Math.floor(quantity)) }
            : line,
        ),
      );
    },
    [],
  );

  const removeLine = useCallback((handle: string, size: SizeRange) => {
    commit(
      currentLines.filter(
        (line) => line.handle !== handle || line.size !== size,
      ),
    );
  }, []);

  const clearCart = useCallback(() => commit(EMPTY_LINES), []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((total, line) => total + line.quantity, 0);
    const subtotalMad = lines.reduce(
      (total, line) => total + line.priceMad * line.quantity,
      0,
    );

    return {
      lines,
      itemCount,
      subtotalMad,
      addLine,
      setLineQuantity,
      removeLine,
      clearCart,
    };
  }, [lines, addLine, setLineQuantity, removeLine, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
