import Image from "next/image";
import Link from "next/link";
import { formatMad } from "@/lib/money";
import type { CatalogueProduct } from "@/types/product";

/**
 * Product-led color fields: each design gets a background pulled from its
 * own artwork so the grid reads as a set of distinct worlds.
 */
const PRODUCT_FIELDS: Record<string, string> = {
  "color-your-steps": "bg-crystal",
  "healthy-shifts": "bg-classic-rose",
  "hypno-wave": "bg-crystal",
  daydream: "bg-light-green",
  "shroom-pop": "bg-classic-rose",
  "vibe-attack": "bg-cyber-yellow",
};

/**
 * Shared grid card for shop and collection pages. Every card
 * communicates image, name, product type, and price without interaction
 * (docs/REFERENCE_AARDVARK.md product-card direction).
 */
export function ProductCard({ product }: { product: CatalogueProduct }) {
  const isEdition = product.type === "edition";
  const field = PRODUCT_FIELDS[product.handle] ?? "bg-eggshell";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-luma-white transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className={`${field} p-4 sm:p-6`}>
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          sizes="(min-width: 1024px) 30vw, 46vw"
          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-onyx px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-luma-white">
            {isEdition ? "3-pair edition" : "Single pair"}
          </span>
          <span className="font-display text-xl text-onyx">
            {formatMad(product.priceMad)}
          </span>
        </div>
        <h3 className="font-display text-2xl leading-tight text-onyx">
          <Link
            href={`/products/${product.handle}`}
            className="rounded-sm after:absolute after:inset-0 after:rounded-[2rem] hover:text-celtic-blue"
          >
            {product.name}
          </Link>
        </h3>
        {product.contents ? (
          <p className="text-sm text-onyx/70">
            {product.contents.map((component) => component.name).join(" · ")}
          </p>
        ) : (
          product.moodTags && (
            <p className="text-sm text-onyx/70">
              {product.moodTags.slice(0, 2).join(" · ")}
            </p>
          )
        )}
      </div>
    </article>
  );
}
