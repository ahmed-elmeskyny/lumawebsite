import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Minimal honest recovery page. Several header destinations are planned
 * routes that are intentionally not built in Checkpoint 1; this page keeps
 * that state navigable instead of showing the bare framework 404.
 */
export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 px-4 py-20 sm:px-7 lg:px-12">
      <h1 className="font-display text-4xl text-onyx">
        This page isn’t here yet.
      </h1>
      <p className="max-w-md text-lg text-onyx/80">
        This part of the Luma store is still being built. Head back to the
        homepage to keep exploring.
      </p>
      <CtaLink href="/" variant="dark">Back to the homepage</CtaLink>
    </section>
  );
}
