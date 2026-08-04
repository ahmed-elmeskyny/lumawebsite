import Image from "next/image";
import Link from "next/link";
import { formatMad } from "@/lib/money";
import { QuickAdd } from "@/components/product/QuickAdd";
import type { CardItem } from "@/types/product";

/**
 * Per-design colour fields, chosen so each product reads clearly against
 * its background. Edition-only designs inherit their edition's field.
 */
const FIELDS: Record<string, string> = {
  "color-your-steps": "bg-crystal",
  "healthy-shifts": "bg-light-green",
  "hypno-wave": "bg-cyber-yellow",
  daydream: "bg-tangerine",
  "shroom-pop": "bg-rose-pink",
  "vibe-attack": "bg-light-green",
  "kickflip-luma": "bg-crystal",
  "luma-doodle": "bg-cyber-yellow",
  "plus-pulse": "bg-classic-rose",
  "vital-signs": "bg-light-green",
};

/**
 * Shared product card.
 *
 * The name, price, and status sit on an inset white label rather than
 * directly on the colour field — the field colours vary a lot, and a
 * fixed light panel keeps the commerce facts legible on every one of
 * them. The label reads as a woven sock tag, which suits the brand.
 */
export function ProductCard({ item }: { item: CardItem }) {
  const field = FIELDS[item.fieldKey] ?? "bg-eggshell";
  const soldOut = item.purchasable && item.inStock === false;

  return (
    <article
      className={`${field} group relative flex flex-col overflow-hidden rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/25"
        />
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 1024px) 24vw, 46vw"
          className={`object-contain p-4 pb-6 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-5 sm:pb-7 ${
            soldOut ? "opacity-60" : ""
          } ${item.hoverImage ? "group-hover:opacity-0" : ""}`}
        />
        {item.hoverImage && (
          <Image
            src={item.hoverImage.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 24vw, 46vw"
            className="object-contain p-4 pb-6 opacity-0 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none sm:p-5 sm:pb-7"
          />
        )}

        {item.purchasable &&
          item.handle &&
          item.priceMad !== undefined &&
          item.sizeRanges && (
            <QuickAdd
              handle={item.handle}
              name={item.name}
              priceMad={item.priceMad}
              sizeRanges={item.sizeRanges}
              inStock={item.inStock !== false}
            />
          )}
      </div>

      {/* Inset label — keeps commerce facts legible on any colour field */}
      <div className="relative m-2 mt-0 flex-1 rounded-[1.25rem] bg-luma-white px-4 py-3.5 sm:px-5">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="min-w-0 font-display text-lg leading-tight text-onyx sm:text-2xl">
            <Link
              href={item.href}
              className="rounded-sm after:absolute after:inset-0 after:rounded-[1.75rem]"
            >
              {item.name}
            </Link>
          </h3>
          {item.priceMad !== undefined && (
            <span className="shrink-0 rounded-full bg-cyber-yellow px-2.5 py-1 font-display text-xs leading-none text-onyx sm:px-3 sm:text-base">
              {formatMad(item.priceMad)}
            </span>
          )}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.08em] text-onyx">
            {item.typeLabel}
            {item.moodTags && item.moodTags.length > 0 && (
              <span className="font-bold normal-case tracking-normal text-onyx/85">
                {" · "}
                {item.moodTags.slice(0, 2).join(", ")}
              </span>
            )}
          </p>

          {item.purchasable ? (
            <StockBadge inStock={item.inStock !== false} />
          ) : (
            <span className="text-[0.8rem] font-extrabold text-celtic-blue">
              {item.editionName}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function StockBadge({ inStock }: { inStock: boolean }) {
  return (
    // Text stays Onyx for contrast; the dot carries the colour cue, and
    // the wording carries the meaning so colour is never the only signal.
    <span className="flex items-center gap-1.5 text-[0.8rem] font-extrabold text-onyx">
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${
          inStock ? "bg-luma-green" : "bg-orange-red"
        }`}
      />
      {inStock ? "In stock" : "Out of stock"}
    </span>
  );
}
