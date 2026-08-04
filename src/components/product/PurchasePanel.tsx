"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import type { CatalogueProduct, SizeRange } from "@/types/product";

export function PurchasePanel({ product }: { product: CatalogueProduct }) {
  const [selectedSize, setSelectedSize] = useState<SizeRange | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const groupId = useId();
  const { addLine } = useCart();
  const isEdition = product.type === "edition";

  const addToCart = () => {
    if (!selectedSize || !product.inStock) return;

    addLine(
      {
        handle: product.handle,
        name: product.name,
        size: selectedSize,
        priceMad: product.priceMad,
      },
      quantity,
    );
    setAdded(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <fieldset disabled={!product.inStock}>
        <legend
          id={groupId}
          className="text-sm font-bold uppercase tracking-[0.12em] text-onyx"
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
                  !product.inStock && "cursor-not-allowed opacity-45",
                )}
              >
                <input
                  type="radio"
                  name={"size-" + product.handle}
                  value={size}
                  checked={isSelected}
                  onChange={() => {
                    setSelectedSize(size);
                    setAdded(false);
                  }}
                  className="sr-only"
                />
                {size}
              </label>
            );
          })}
        </div>
        <p className="mt-2 text-sm text-onyx/70">
          {isEdition
            ? "Choose one size for the box. All three pairs use the selected size."
            : "Choose the range that includes your usual EU shoe size."}
        </p>
      </fieldset>

      <div>
        <label
          htmlFor={"quantity-" + product.handle}
          className="text-sm font-bold uppercase tracking-[0.12em] text-onyx"
        >
          Quantity
        </label>
        <div className="mt-3 inline-flex items-center rounded-xl border-2 border-onyx/30">
          <button
            type="button"
            onClick={() => {
              setQuantity((current) => Math.max(1, current - 1));
              setAdded(false);
            }}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-xl font-semibold text-onyx disabled:text-onyx/30"
            disabled={quantity <= 1 || !product.inStock}
          >
            −
          </button>
          <input
            id={"quantity-" + product.handle}
            type="text"
            inputMode="numeric"
            readOnly
            value={quantity}
            className="w-10 border-0 bg-transparent text-center text-base font-semibold text-onyx"
          />
          <button
            type="button"
            onClick={() => {
              setQuantity((current) => Math.min(99, current + 1));
              setAdded(false);
            }}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-xl font-semibold text-onyx disabled:text-onyx/30"
            disabled={!product.inStock || quantity >= 99}
          >
            +
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-eggshell p-4">
        <p className="font-semibold text-onyx">Pay when your order arrives.</p>
        <p className="mt-1 text-sm text-onyx/80">Delivery: 35 MAD</p>
      </div>

      <div>
        <button
          type="button"
          onClick={addToCart}
          disabled={!selectedSize || !product.inStock}
          className="inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-celtic-blue px-6 py-3.5 text-lg font-semibold text-luma-white transition-colors hover:bg-onyx disabled:cursor-not-allowed disabled:bg-onyx/25"
        >
          {!product.inStock
            ? "Out of stock"
            : selectedSize
              ? "Add to cart"
              : "Select a size"}
        </button>
        <p
          aria-live="polite"
          className="mt-2 min-h-5 text-sm font-medium text-onyx/75"
        >
          {added
            ? quantity +
              " × " +
              product.name +
              " added in " +
              selectedSize +
              "."
            : ""}
        </p>
        {added && (
          <Link
            href="/cart"
            className="mt-2 inline-flex min-h-11 items-center font-bold text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
          >
            View your cart
          </Link>
        )}
      </div>
    </div>
  );
}
