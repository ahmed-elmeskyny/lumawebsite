"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import type { SizeRange } from "@/types/product";

interface QuickAddProps {
  handle: string;
  name: string;
  priceMad: number;
  sizeRanges: readonly SizeRange[];
  inStock: boolean;
}

/**
 * Quick-add control shown on a product card.
 *
 * The trigger appears on hover on pointer devices and is always visible
 * on touch. Opening it reveals a small panel where a size must be chosen
 * before adding — no size is preselected, matching the product page rule
 * in docs/SITE_BRIEF.md.
 */
export function QuickAdd({
  handle,
  name,
  priceMad,
  sizeRanges,
  inStock,
}: QuickAddProps) {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<SizeRange | null>(null);
  const [added, setAdded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const { addLine } = useCart();

  const close = useCallback(() => {
    setOpen(false);
    setSize(null);
    setAdded(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  if (!inStock) {
    return null;
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Quick add ${name}`}
        className={cn(
          "absolute right-3 bottom-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-onyx text-luma-white shadow-lg transition-all hover:bg-celtic-blue focus-visible:opacity-100 motion-reduce:transition-none",
          "opacity-100 sm:opacity-0 sm:group-hover:opacity-100",
          open && "sm:opacity-100",
        )}
      >
        <CartPlusIcon />
      </button>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          className="absolute inset-x-2 bottom-2 z-30 rounded-2xl bg-luma-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-lg leading-tight text-onyx">
              {name}
            </p>
            <button
              type="button"
              onClick={close}
              className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-onyx/60 hover:text-onyx"
            >
              <span className="sr-only">Close</span>
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <fieldset className="mt-3">
            <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-onyx/60">
              Choose your size
            </legend>
            <div className="mt-2 flex gap-2">
              {sizeRanges.map((range) => (
                <label
                  key={range}
                  className={cn(
                    "flex-1 cursor-pointer rounded-xl border-2 px-2 py-2 text-center text-sm font-semibold transition-colors focus-within:outline-2 focus-within:outline-celtic-blue focus-within:outline-offset-2",
                    size === range
                      ? "border-celtic-blue bg-celtic-blue text-luma-white"
                      : "border-onyx/25 text-onyx hover:border-onyx",
                  )}
                >
                  <input
                    type="radio"
                    name={`quick-size-${handle}`}
                    value={range}
                    checked={size === range}
                    onChange={() => {
                      setSize(range);
                      setAdded(false);
                    }}
                    className="sr-only"
                  />
                  {range}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="button"
            disabled={!size}
            onClick={() => {
              if (!size) return;
              addLine({ handle, name, size, priceMad });
              setAdded(true);
            }}
            className="mt-3 w-full rounded-xl bg-onyx px-4 py-2.5 text-sm font-semibold text-luma-white transition-colors hover:bg-celtic-blue disabled:cursor-not-allowed disabled:bg-onyx/25"
          >
            {size ? "Add to cart" : "Select a size"}
          </button>

          <p aria-live="polite" className="mt-2 min-h-4 text-xs text-onyx/70">
            {added ? `Added — ${name}, ${size}.` : ""}
          </p>
        </div>
      )}
    </>
  );
}

function CartPlusIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 6h12l-1 9.5a1.5 1.5 0 0 1-1.5 1.3h-7A1.5 1.5 0 0 1 5 15.5L4 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 9v5M7.5 11.5h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
