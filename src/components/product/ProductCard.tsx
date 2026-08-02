import Image from "next/image";
import Link from "next/link";
import { formatMad } from "@/lib/money";
import type { CatalogueProduct } from "@/types/product";

/**
 * Per-product colour fields, chosen so each design reads clearly against
 * its background: warm fields behind cool socks, cool fields behind warm
 * and white socks.
 */
const PRODUCT_FIELDS: Record<string, string> = {
  // Editions: tonal fields that flatter each box's own artwork
  "color-your-steps": "bg-crystal",
  "healthy-shifts": "bg-light-green",
  // Standalone socks
  "hypno-wave": "bg-cyber-yellow",
  daydream: "bg-tangerine",
  "shroom-pop": "bg-rose-pink",
  "vibe-attack": "bg-light-green",
};

/**
 * Shared e-commerce product card for the homepage, shop, and collection
 * grids. The whole card is clickable, and name, type, and price read
 * without any interaction.
 *
 * Standalone socks use transparent cutouts (`cardImage`) so the colour
 * field stays visible behind the product; editions use their transparent
 * box renders directly.
 */
export function ProductCard({ product }: { product: CatalogueProduct }) {
  const isEdition = product.type === "edition";
  const field = PRODUCT_FIELDS[product.handle] ?? "bg-eggshell";
  const image = product.cardImage ?? product.image;

  return (
    <article
      className={`${field} group relative flex flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      <div className="relative aspect-4/5 overflow-hidden">
        {/* Decorative disc echoing the brand's circular graphics */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/25"
        />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 26vw, 46vw"
          className="object-contain p-4 pb-6 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-5 sm:pb-7"
        />
      </div>

      <div className="relative flex flex-1 flex-col gap-1 px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-tight text-onyx sm:text-2xl">
            <Link
              href={`/products/${product.handle}`}
              className="rounded-sm after:absolute after:inset-0 after:rounded-[1.75rem]"
            >
              {product.name}
            </Link>
          </h3>
          <span className="shrink-0 font-display text-lg text-onyx sm:text-xl">
            {formatMad(product.priceMad)}
          </span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-onyx/60">
          {isEdition ? "3-pair edition" : "Single pair"}
          {!isEdition && product.moodTags && (
            <span className="font-normal normal-case tracking-normal">
              {" · "}
              {product.moodTags.slice(0, 2).join(", ")}
            </span>
          )}
        </p>
      </div>
    </article>
  );
}
