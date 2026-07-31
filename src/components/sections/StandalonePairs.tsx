import { getStandaloneProducts } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Featured standalone pairs; copy from docs/CONTENT.md "Standalone
 * products". Cards link to the product pages.
 */
export function StandalonePairs() {
  const products = getStandaloneProducts();

  return (
    <section
      aria-labelledby="standalone-heading"
      className="relative overflow-hidden bg-eggshell"
    >
      <GhostType className="-top-3 left-0 text-[16vw] text-onyx/6">
        ONE PAIR FULL PERSONALITY
      </GhostType>

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-red">
              One pair, full personality
            </p>
            <h2
              id="standalone-heading"
              className="mt-3 font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx"
            >
              Start with a favorite.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-onyx/80">
              Four standalone designs. Same question: which one feels most like
              you?
            </p>
          </div>
          <CtaLink href="/collections/standalone-socks" variant="dark">
            Shop single pairs
          </CtaLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
