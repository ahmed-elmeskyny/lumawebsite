import Image from "next/image";
import { GhostType } from "@/components/ui/GhostType";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * The single editorial interruption in the shopping flow. A dominant
 * product asset carries it; the copy stays to one headline and two short
 * sentences so it does not become another brand explanation.
 *
 * No material, construction, comfort, or sustainability claims here —
 * those remain unconfirmed (docs/PRODUCTS.md).
 */
export function ExpressionBand() {
  return (
    <section
      aria-labelledby="expression-heading"
      className="on-dark relative overflow-hidden bg-orange-red"
    >
      <GhostType className="top-4 left-0 text-[20vw] text-luma-white/10">
        MADE TO BE SEEN
      </GhostType>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-14 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-20">
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-2 bottom-2 rounded-[45%] bg-cyber-yellow/90"
          />
          <Image
            src="/assets/products/socks/sock-vibe-attack.jpg"
            alt="Vibe Attack socks, front view"
            width={1080}
            height={1080}
            sizes="(min-width: 1024px) 42vw, 88vw"
            className="relative mx-auto h-auto w-[78%] rounded-3xl object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.25)]"
          />
          <Image
            src="/assets/brand/Luma Socks - Stickers  (28).svg"
            alt=""
            width={90}
            height={78}
            unoptimized
            className="absolute -top-1 right-2 h-14 w-auto rotate-12 sm:h-20"
          />
        </div>

        <div className="order-1 max-w-lg lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-onyx">
            Small detail. Big energy.
          </p>
          <h2
            id="expression-heading"
            className="mt-3 font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.92] tracking-tight text-luma-white"
          >
            Made to be seen.
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-luma-white">
            Luma turns the part of your outfit people overlook into the part
            they remember.
          </p>
          <div className="mt-7">
            <CtaLink href="/socks" variant="dark">
              Find your pair
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
