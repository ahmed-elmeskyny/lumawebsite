"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { storeConfig } from "@/config/store";
import { getProductByHandle } from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import type { CartLine } from "@/components/cart/CartProvider";

export function CartView() {
  const {
    lines,
    itemCount,
    subtotalMad,
    setLineQuantity,
    removeLine,
    clearCart,
  } = useCart();

  if (lines.length === 0) {
    return <EmptyCart />;
  }

  const deliveryMad = storeConfig.delivery.feeMad;
  const totalMad = subtotalMad + deliveryMad;

  return (
    <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 sm:px-7 sm:py-14 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-start lg:px-12">
      <section aria-labelledby="cart-heading">
        <div className="flex items-end justify-between gap-4 border-b-2 border-onyx/15 pb-5">
          <div>
            <p className="subtitle text-xs uppercase tracking-[0.16em] text-celtic-blue">
              Your selection
            </p>
            <h1
              id="cart-heading"
              className="mt-2 font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.92] text-onyx"
            >
              Your cart.
            </h1>
            <p className="mt-2 text-sm text-onyx/85">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="min-h-11 rounded-full px-3 text-sm text-onyx underline decoration-2 underline-offset-4 hover:text-celtic-blue"
          >
            Clear cart
          </button>
        </div>

        <ul aria-label="Cart items" className="divide-y-2 divide-onyx/10">
          {lines.map((line) => (
            <CartLineItem
              key={line.handle + "-" + line.size}
              line={line}
              setQuantity={setLineQuantity}
              remove={removeLine}
            />
          ))}
        </ul>

        <Link
          href="/socks"
          className="mt-6 inline-flex min-h-11 items-center text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
        >
          ← Continue shopping
        </Link>
      </section>

      <aside
        aria-labelledby="summary-heading"
        className="sticky top-24 overflow-hidden rounded-[2rem] border-2 border-onyx bg-cyber-yellow shadow-[8px_8px_0_#383639]"
      >
        <div className="pattern-rings-dark p-6 sm:p-7">
          <p className="subtitle text-xs uppercase tracking-[0.14em] text-onyx">
            Ready when you are
          </p>
          <h2
            id="summary-heading"
            className="mt-2 font-display text-3xl leading-tight text-onyx"
          >
            Order summary
          </h2>

          <dl className="mt-6 space-y-3 text-sm text-onyx">
            <div className="flex justify-between gap-4">
              <dt>Subtotal</dt>
              <dd>{formatMad(subtotalMad)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Delivery</dt>
              <dd>{formatMad(deliveryMad)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t-2 border-onyx/20 pt-4 text-lg">
              <dt>Total</dt>
              <dd>{formatMad(totalMad)}</dd>
            </div>
          </dl>

          <div className="mt-6 rounded-2xl bg-luma-white/85 p-4">
            <p className="text-onyx">Pay on delivery</p>
            <p className="mt-1 text-sm leading-relaxed text-onyx/85">
              Cash on delivery is how Luma takes payment. You pay the courier
              when your order arrives — nothing is charged upfront.
            </p>
          </div>

          <button
            type="button"
            disabled
            aria-describedby="checkout-note"
            className="mt-5 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-onyx px-5 py-3.5 text-base text-luma-white disabled:cursor-not-allowed disabled:opacity-55"
          >
            Checkout
          </button>
          <p
            id="checkout-note"
            className="mt-3 text-center text-xs leading-relaxed text-onyx/85"
          >
            Checkout activates when the Shopify store is connected.
          </p>
        </div>
      </aside>
    </div>
  );
}

function CartLineItem({
  line,
  setQuantity,
  remove,
}: {
  line: CartLine;
  setQuantity: ReturnType<typeof useCart>["setLineQuantity"];
  remove: ReturnType<typeof useCart>["removeLine"];
}) {
  const product = getProductByHandle(line.handle);
  const image = product?.cardImage ?? product?.image;
  const typeLabel = product?.type === "edition" ? "3-pair edition" : "Single pair";
  const productHref =
    product?.type === "edition"
      ? "/editions/" + line.handle
      : "/products/" + line.handle;

  return (
    <li className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
      <Link
        href={productHref}
        className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-crystal"
        aria-label={"View " + line.name}
      >
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 640px) 128px, 96px"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
          />
        )}
      </Link>

      <div className="min-w-0 self-center">
        <p className="subtitle text-xs uppercase tracking-[0.1em] text-onyx">
          {typeLabel}
        </p>
        <h2 className="mt-1 font-display text-2xl leading-tight text-onyx">
          <Link
            href={productHref}
            className="hover:text-celtic-blue"
          >
            {line.name}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-onyx/85">{line.size}</p>
        <p className="mt-3 text-onyx">{formatMad(line.priceMad)}</p>
      </div>

      <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
        <div
          className="inline-flex items-center rounded-xl border-2 border-onyx/25 bg-luma-white"
          aria-label={"Quantity for " + line.name}
        >
          <button
            type="button"
            onClick={() =>
              setQuantity(line.handle, line.size, line.quantity - 1)
            }
            aria-label={"Decrease " + line.name + " quantity"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-xl text-onyx transition-colors hover:bg-celtic-blue/15 hover:text-celtic-blue motion-reduce:transition-none"
          >
            −
          </button>
          <output
            aria-live="polite"
            className="w-8 text-center text-sm text-onyx"
          >
            {line.quantity}
          </output>
          <button
            type="button"
            onClick={() =>
              setQuantity(line.handle, line.size, line.quantity + 1)
            }
            disabled={line.quantity >= 99}
            aria-label={"Increase " + line.name + " quantity"}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-xl text-onyx transition-colors hover:bg-celtic-blue/15 hover:text-celtic-blue disabled:cursor-not-allowed disabled:bg-transparent disabled:text-onyx/30 motion-reduce:transition-none"
          >
            +
          </button>
        </div>

        <div className="text-right">
          <p className=" text-onyx">
            {formatMad(line.priceMad * line.quantity)}
          </p>
          <button
            type="button"
            onClick={() => remove(line.handle, line.size)}
            className="mt-1 min-h-11 text-sm text-onyx/85 underline decoration-2 underline-offset-4 hover:text-orange-red"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

function EmptyCart() {
  return (
    <section className="relative overflow-hidden bg-crystal px-4 py-20 text-center sm:px-7 sm:py-28">
      <span
        aria-hidden="true"
        className="ghost-type absolute left-1/2 top-8 -translate-x-1/2 font-display text-[clamp(6rem,22vw,17rem)] text-onyx/[0.05]"
      >
        EMPTY
      </span>
      <div className="relative mx-auto max-w-2xl">
        <Image
          src="/assets/mascot/luma-wave-blue.svg"
          alt=""
          width={130}
          height={160}
          unoptimized
          className="mx-auto h-28 w-auto"
        />
        <p className="subtitle mt-6 text-xs uppercase tracking-[0.16em] text-celtic-blue">
          Nothing here yet
        </p>
        <h1 className="mt-3 font-display text-[clamp(3rem,10vw,6rem)] leading-[0.9] text-onyx">
          Your cart is waiting.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-onyx/85">
          Pick a pair, choose your size, and bring some colour to your next
          step.
        </p>
        <Link
          href="/socks"
          className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-celtic-blue px-7 py-3.5 text-base text-luma-white transition-colors hover:bg-onyx"
        >
          Shop the drop
        </Link>
      </div>
    </section>
  );
}
