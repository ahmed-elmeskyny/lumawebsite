import Image from "next/image";
import Link from "next/link";
import { getFeaturedEditions } from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { GhostType } from "@/components/ui/GhostType";
import type { CatalogueProduct } from "@/types/product";

/**
 * Per-edition presentation. The field colour deliberately contrasts with
 * each box's own artwork (blue box on yellow, teal box on pink) so the
 * product stays dominant instead of blending into its background.
 */
const EDITION_STYLES: Record<
  string,
  { field: string; ghost: string; blob: string; openRender: string }
> = {
  "color-your-steps": {
    field: "bg-crystal",
    ghost: "text-celtic-blue/15",
    blob: "bg-luma-white/45",
    openRender: "/assets/editions/luma-color-your-steps-open-filled-v1.png",
  },
  "healthy-shifts": {
    field: "bg-light-green",
    ghost: "text-luma-green/20",
    blob: "bg-luma-white/45",
    openRender: "/assets/editions/luma-healthy-shifts-open-filled-v1.png",
  },
};

/**
 * Featured fixed editions — the primary product moment on the homepage.
 * Packaging messaging (rigid magnetic box, one size for all three pairs)
 * is merged in here rather than living in its own section.
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

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {editions.map((edition) => (
            <EditionCard key={edition.handle} edition={edition} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EditionCard({ edition }: { edition: CatalogueProduct }) {
  const style = EDITION_STYLES[edition.handle];
  const field = style?.field ?? "bg-eggshell";
  const includes = edition.contents
    ?.map((component) => component.name)
    .join(" · ");

  return (
    <article
      className={`${field} group relative isolate flex flex-col overflow-hidden rounded-[2.5rem] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      {/* Decoration sits behind product and copy */}
      <GhostType
        className={`-top-3 left-0 text-[26vw] lg:text-[13vw] ${style?.ghost ?? "text-onyx/10"}`}
      >
        {edition.name.toUpperCase()}
      </GhostType>
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full sm:h-80 sm:w-80 ${style?.blob ?? "bg-onyx/10"}`}
      />

      {/* Product: closed box by default, open box revealed on hover.
          The closed view is complete on its own for touch devices. */}
      <div className="relative px-3 pt-5 sm:px-5 sm:pt-6">
        <div className="relative">
          <Image
            src={edition.image.src}
            alt={edition.image.alt}
            width={edition.image.width}
            height={edition.image.height}
            sizes="(min-width: 1024px) 46vw, 94vw"
            className="h-auto w-full scale-[1.06] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] transition-opacity duration-300 group-hover:opacity-0 motion-reduce:transition-none"
          />
          {style?.openRender && (
            <Image
              src={style.openRender}
              alt=""
              aria-hidden="true"
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 46vw, 94vw"
              className="absolute inset-0 h-auto w-full scale-[1.06] object-contain opacity-0 drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
            />
          )}
        </div>
      </div>

      <div className="relative mt-auto flex flex-col gap-1.5 px-6 pb-6 pt-4 sm:px-8 sm:pb-7">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-onyx px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-luma-white">
            3-pair edition
          </span>
          <span className="font-display text-2xl text-onyx">
            {formatMad(edition.priceMad)}
          </span>
        </div>
        <h3 className="font-display text-[clamp(2rem,5vw,2.75rem)] leading-none text-onyx">
          <Link
            href={`/products/${edition.handle}`}
            className="rounded-sm after:absolute after:inset-0 after:rounded-[2.5rem]"
          >
            {edition.name}
          </Link>
        </h3>
        <p className="max-w-md text-onyx/80">{edition.shortDescription}</p>
        {includes && (
          <p className="text-sm text-onyx/65">Includes {includes}</p>
        )}
        <span className="mt-3 inline-flex w-fit items-center gap-2 font-semibold text-onyx underline underline-offset-4 decoration-onyx/40 group-hover:decoration-onyx">
          Explore the edition
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}
