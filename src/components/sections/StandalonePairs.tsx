import {
  getAllSockDesigns,
  getEditionOnlyDesignNames,
  getStandaloneDesignNames,
} from "@/lib/catalogue";
import { storeConfig } from "@/config/store";
import { formatMad } from "@/lib/money";
import { capitalise, spellCount } from "@/lib/text";
import { ProductCard } from "@/components/product/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Every sock design in the catalogue.
 *
 * Purchasable designs are quick-addable as single pairs. Edition-exclusive
 * designs are shown without a price and link to their edition instead of a
 * product page that does not exist. Both counts are derived, so promoting
 * a design to standalone sale updates this copy on its own.
 */
export function StandalonePairs() {
  const designs = getAllSockDesigns();
  const singleCount = getStandaloneDesignNames().length;
  const editionOnlyCount = getEditionOnlyDesignNames().length;

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
            <p className="subtitle text-sm uppercase tracking-[0.16em] text-orange-red">
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
            {capitalise(spellCount(singleCount))} sold as single pairs at{" "}
            {formatMad(storeConfig.pricing.singlePairMad)}.{" "}
            {capitalise(spellCount(editionOnlyCount))}{" "}
            {editionOnlyCount === 1 ? "lives" : "live"} only inside the
            editions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {designs.map((item) => (
            <ProductCard key={item.key} item={item} />
          ))}
        </div>

        <div className="mt-10">
          <CtaLink href="/socks" variant="dark">
            Shop all socks
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
