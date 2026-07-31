import Image from "next/image";
import Link from "next/link";
import { getFeaturedEditions } from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { GhostType } from "@/components/ui/GhostType";
import type { CatalogueProduct } from "@/types/product";

/** Edition-led image fields so each edition owns a distinct world. */
const CARD_FIELDS: Record<string, string> = {
  "color-your-steps": "bg-crystal",
  "healthy-shifts": "bg-classic-rose",
};

/**
 * Featured fixed editions on a dark editorial field so the packaging
 * renders carry the section. Copy from docs/CONTENT.md; product facts
 * flow through the catalogue boundary.
 */
export function FeaturedEditions() {
  const editions = getFeaturedEditions();

  return (
    <section
      aria-labelledby="featured-editions-heading"
      className="on-dark relative overflow-hidden bg-onyx"
    >
      <GhostType className="-top-4 right-0 text-[18vw] text-luma-white/6">
        THE BOX COLLECTION
      </GhostType>

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyber-yellow">
            The box collection
          </p>
          <h2
            id="featured-editions-heading"
            className="mt-3 font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-luma-white"
          >
            Three pairs. One whole mood.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-luma-white/80">
            Meet Luma’s fixed three-pair editions. Pick your world, choose your
            size, and open the box.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {editions.map((edition, index) => (
            <EditionCard
              key={edition.handle}
              edition={edition}
              offset={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EditionCard({
  edition,
  offset,
}: {
  edition: CatalogueProduct;
  offset: boolean;
}) {
  const field = CARD_FIELDS[edition.handle] ?? "bg-eggshell";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] bg-luma-white transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        offset ? "md:mt-14" : ""
      }`}
    >
      <div className={`${field} px-6 pb-4 pt-8 sm:px-10`}>
        <Image
          src={edition.image.src}
          alt={edition.image.alt}
          width={edition.image.width}
          height={edition.image.height}
          sizes="(min-width: 768px) 44vw, 92vw"
          className="mx-auto h-auto w-full max-w-105 object-contain transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-onyx px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-luma-white">
            3-pair edition
          </span>
          <span className="font-display text-2xl text-onyx">
            {formatMad(edition.priceMad)}
          </span>
        </div>
        <h3 className="font-display text-3xl leading-tight text-onyx sm:text-4xl">
          <Link
            href={`/products/${edition.handle}`}
            className="rounded-sm after:absolute after:inset-0 after:rounded-[2rem] hover:text-celtic-blue"
          >
            {edition.name}
          </Link>
        </h3>
        <p className="text-onyx/80">{edition.shortDescription}</p>
        {edition.contents && (
          <ul className="mt-1 flex flex-wrap gap-2">
            {edition.contents.map((component) => (
              <li
                key={component.name}
                className="rounded-full border border-onyx/25 px-3 py-1 text-sm text-onyx/80"
              >
                {component.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
