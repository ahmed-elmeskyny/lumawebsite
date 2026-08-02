import { getStandaloneProducts } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Individual socks grid. One section-level CTA rather than competing
 * buttons on each card — the cards themselves are fully clickable.
 */
export function StandalonePairs() {
  const products = getStandaloneProducts();

  return (
    <section
      aria-labelledby="standalone-heading"
      className="relative overflow-hidden bg-eggshell"
    >
      <GhostType className="-top-3 left-0 text-[16vw] text-onyx/6">
        SHOP THE SOCKS
      </GhostType>

      <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-red">
              One pair, full personality
            </p>
            <h2
              id="standalone-heading"
              className="mt-3 font-display text-[clamp(2.5rem,7vw,4rem)] leading-[0.95] tracking-tight text-onyx"
            >
              Shop individual socks.
            </h2>
          </div>
          <p className="text-onyx/75">Single pairs, 80 MAD each.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <CtaLink href="/shop" variant="dark">
            Shop all socks
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
