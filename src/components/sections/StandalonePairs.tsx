import { getAllSockDesigns } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Every sock design in the catalogue.
 *
 * The four standalone pairs are purchasable and quick-addable; the six
 * edition designs are shown without a price and link to their edition,
 * because they are not sold separately at launch (docs/PRODUCTS.md).
 */
export function StandalonePairs() {
  const designs = getAllSockDesigns();

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
              Meet every design.
            </h2>
          </div>
          <p className="max-w-xs text-onyx/75">
            Four sold as single pairs at 80 MAD. Six live inside the editions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {designs.map((item) => (
            <ProductCard key={item.key} item={item} />
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
