import { getFeaturedEditions, toCardItem } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";

/**
 * Featured fixed editions — the primary product moment on the homepage.
 * Packaging messaging (rigid magnetic box, one size for all three pairs)
 * is merged in here rather than living in its own section.
 *
 * These use the same card system as the sock grid so the storefront
 * reads as one product language; the two-column grid gives them scale.
 */
export function FeaturedEditions() {
  const editions = getFeaturedEditions();

  return (
    <section
      aria-labelledby="featured-editions-heading"
      className="relative overflow-hidden bg-luma-white"
    >
      <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-celtic-blue">
              The box collection
            </p>
            <h2
              id="featured-editions-heading"
              className="mt-3 font-display text-[clamp(2.5rem,7vw,4rem)] leading-[0.95] tracking-tight text-onyx"
            >
              Three pairs. One whole mood.
            </h2>
          </div>
          <p className="max-w-sm text-onyx/75">
            Each edition arrives in a Luma rigid magnetic box. One size covers
            all three pairs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {editions.map((edition) => (
            <ProductCard key={edition.handle} item={toCardItem(edition)} />
          ))}
        </div>
      </div>
    </section>
  );
}
