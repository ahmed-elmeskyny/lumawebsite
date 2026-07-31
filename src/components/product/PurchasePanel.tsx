"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { CatalogueProduct, SizeRange } from "@/types/product";

/**
 * Purchase controls for the pre-Shopify checkpoint.
 *
 * - No size is preselected; the customer must choose (docs/SITE_BRIEF.md).
 * - The edition size note explains one size covers all three pairs.
 * - Add to cart is genuinely disabled: there is no cart backend yet, and a
 *   control that pretends to work would be dishonest. The visible note is
 *   a development-stage label, reported in the checkpoint handoff — not
 *   approved launch copy.
 */
export function PurchasePanel({ product }: { product: CatalogueProduct }) {
  const [selectedSize, setSelectedSize] = useState<SizeRange | null>(null);
  const [quantity, setQuantity] = useState(1);
  const groupId = useId();
  const isEdition = product.type === "edition";

  return (
    <div className="flex flex-col gap-5">
      <fieldset>
        <legend
          id={groupId}
          className="text-sm font-semibold uppercase tracking-[0.12em] text-onyx"
        >
          Select your size
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.sizeRanges.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <label
                key={size}
                className={cn(
                  "inline-flex min-h-12 cursor-pointer items-center rounded-xl border-2 px-5 py-2.5 text-base font-semibold transition-colors focus-within:outline-2 focus-within:outline-celtic-blue focus-within:outline-offset-2",
                  isSelected
                    ? "border-celtic-blue bg-celtic-blue text-luma-white"
                    : "border-onyx/30 text-onyx hover:border-onyx",
                )}
              >
                <input
                  type="radio"
                  name={`size-${product.handle}`}
                  value={size}
                  checked={isSelected}
                  onChange={() => setSelectedSize(size)}
                  className="sr-only"
                />
                {size}
              </label>
            );
          })}
        </div>
        <p className="mt-2 text-sm text-onyx/70">
          {isEdition
            ? "Choose one size for the box. All three pairs will use the selected size."
            : "Choose the range that includes your usual EU shoe size."}
        </p>
      </fieldset>

      <div>
        <label
          htmlFor={`quantity-${product.handle}`}
          className="text-sm font-semibold uppercase tracking-[0.12em] text-onyx"
        >
          Quantity
        </label>
        <div className="mt-3 inline-flex items-center rounded-xl border-2 border-onyx/30">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-xl font-semibold text-onyx disabled:text-onyx/30"
            disabled={quantity <= 1}
          >
            −
          </button>
          <input
            id={`quantity-${product.handle}`}
            type="text"
            inputMode="numeric"
            readOnly
            value={quantity}
            className="w-10 border-0 bg-transparent text-center text-base font-semibold text-onyx"
          />
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.min(99, current + 1))}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-xl font-semibold text-onyx"
          >
            +
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-eggshell p-4">
        <p className="font-medium text-onyx">Pay when your order arrives.</p>
        <p className="mt-1 text-sm text-onyx/80">Delivery: 35 MAD</p>
      </div>

      <div>
        <button
          type="button"
          disabled
          className="inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-celtic-blue px-6 py-3.5 text-lg font-semibold text-luma-white disabled:cursor-not-allowed disabled:bg-onyx/25"
        >
          Add to cart
        </button>
        <p className="mt-2 text-sm text-onyx/60">
          The cart is not available yet in this development preview.
        </p>
      </div>
    </div>
  );
}
