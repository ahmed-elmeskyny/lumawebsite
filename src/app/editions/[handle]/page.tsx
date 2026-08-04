import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editionStories, getEditionStory } from "@/data/editionStories";
import { getProductByHandle } from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { PurchasePanel } from "@/components/product/PurchasePanel";
import { Reveal } from "@/components/ui/Reveal";
import { GhostType } from "@/components/ui/GhostType";
import { Disclosure } from "@/components/ui/Disclosure";

interface EditionPageProps {
  params: Promise<{ handle: string }>;
}

export function generateStaticParams() {
  return editionStories.map((story) => ({ handle: story.handle }));
}

export async function generateMetadata({
  params,
}: EditionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const story = getEditionStory(handle);
  const product = getProductByHandle(handle);
  if (!story || !product) {
    return {};
  }
  return {
    title: `${product.name} | Luma Socks`,
    description: story.heroBody,
  };
}

/**
 * Edition landing page: a marketing and story page that also sells.
 *
 * The story leads, the purchase controls live at the end, and both share
 * one URL — this replaces the old /products/[handle] page for editions
 * (old URLs redirect here via next.config.ts).
 */
export default async function EditionStoryPage({ params }: EditionPageProps) {
  const { handle } = await params;
  const story = getEditionStory(handle);
  const product = getProductByHandle(handle);

  if (!story || !product) {
    notFound();
  }

  const heroText = story.heroDark ? "text-luma-white" : "text-onyx";
  const heroBody = story.heroDark ? "text-luma-white/90" : "text-onyx/80";

  return (
    <article>
      {/* Hero */}
      <section
        aria-labelledby="edition-heading"
        className={`${story.heroField} ${story.heroDark ? "on-dark pattern-rings" : ""} relative overflow-hidden`}
      >
        <GhostType
          className={`-bottom-4 left-0 text-[22vw] ${
            story.heroDark ? "text-luma-white/8" : "text-onyx/8"
          }`}
        >
          {story.ghostWord}
        </GhostType>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-14 sm:px-7 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-12 lg:px-12 lg:py-20">
          <div className="max-w-xl">
            <p
              className={`text-sm font-bold uppercase tracking-[0.16em] ${
                story.heroDark ? "text-cyber-yellow" : "text-celtic-blue"
              }`}
            >
              {story.eyebrow}
            </p>
            <h1
              id="edition-heading"
              className={`mt-4 font-display text-[clamp(3rem,12vw,5rem)] leading-[0.92] tracking-tight ${heroText}`}
            >
              {story.heroHeading}
            </h1>
            <p className={`mt-6 text-lg leading-relaxed ${heroBody}`}>
              {story.heroBody}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#order"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-cyber-yellow px-7 py-3.5 text-base font-bold text-onyx transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Order the box
              </a>
              <p className={`font-display text-2xl ${heroText}`}>
                {formatMad(product.priceMad)}
              </p>
            </div>

            <p
              className={`mt-3 text-sm ${story.heroDark ? "text-luma-white/70" : "text-onyx/70"}`}
            >
              3 pairs · One size for all three · Rigid magnetic box
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/15"
            />
            <Image
              src={story.heroImage.src}
              alt={story.heroImage.alt}
              width={story.heroImage.width}
              height={story.heroImage.height}
              priority
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="relative h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* Chapter intro */}
      <section className="bg-luma-white">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(2rem,6vw,3.25rem)] leading-[0.98] tracking-tight text-onyx">
              {story.chapterHeading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-onyx/80">
              {story.chapterBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story beats */}
      {story.beats.map((beat, index) => {
        const flip = index % 2 === 1;
        return (
          <section
            key={beat.design}
            aria-labelledby={`beat-${index}`}
            className={`${beat.field} relative overflow-hidden`}
          >
            <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-14 sm:px-7 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <div className="relative mx-auto max-w-md">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/30"
                  />
                  <Image
                    src={beat.image.src}
                    alt={beat.image.alt}
                    width={beat.image.width}
                    height={beat.image.height}
                    sizes="(min-width: 1024px) 42vw, 80vw"
                    className="relative mx-auto h-auto w-[72%] object-contain drop-shadow-[0_14px_26px_rgba(0,0,0,0.22)]"
                  />
                </div>
              </Reveal>

              <Reveal delayMs={120} className={flip ? "lg:order-1" : ""}>
                <p className="font-display text-5xl leading-none text-onyx/25">
                  {`0${index + 1}`}
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-onyx/70">
                  {beat.title}
                </p>
                <h2
                  id={`beat-${index}`}
                  className="mt-2 font-display text-[clamp(2.25rem,7vw,3.5rem)] leading-[0.95] tracking-tight text-onyx"
                >
                  {beat.design}
                </h2>
                <p className="mt-4 max-w-prose text-lg leading-relaxed text-onyx/85">
                  {beat.body}
                </p>

                <div className="mt-7 max-w-xs overflow-hidden rounded-2xl">
                  <Image
                    src={beat.wornImage.src}
                    alt={beat.wornImage.alt}
                    width={beat.wornImage.width}
                    height={beat.wornImage.height}
                    sizes="(min-width: 1024px) 20vw, 60vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Order */}
      <section id="order" className="scroll-mt-20 bg-eggshell">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[clamp(2.25rem,7vw,3.75rem)] leading-[0.95] tracking-tight text-onyx">
                {story.closingHeading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-onyx/80">
                {story.closingBody}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 aspect-square w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-yellow/60"
              />
              <Image
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="relative h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)]"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-onyx/60">
                Fixed three-pair edition
              </p>
              <h3 className="mt-2 font-display text-[clamp(2rem,6vw,3rem)] leading-none text-onyx">
                {product.name}
              </h3>
              <p className="mt-4 text-3xl font-display text-onyx">
                {formatMad(product.priceMad)}
              </p>

              <div className="mt-7">
                <PurchasePanel product={product} />
              </div>

              <div className="mt-8 divide-y divide-onyx/15 border-y border-onyx/15">
                {product.contents && (
                  <Disclosure summary="Inside the box">
                    <p className="text-sm">
                      Three predetermined designs. They cannot be swapped, and
                      your chosen size applies to all three pairs.
                    </p>
                    <ul className="mt-3 grid grid-cols-3 gap-3">
                      {product.contents.map((component) => (
                        <li key={component.name} className="text-center">
                          <div className="overflow-hidden rounded-xl bg-luma-white">
                            <Image
                              src={component.image.src}
                              alt={component.image.alt}
                              width={component.image.width}
                              height={component.image.height}
                              sizes="(min-width: 1024px) 12vw, 28vw"
                              className="h-auto w-full object-contain"
                            />
                          </div>
                          <p className="mt-2 text-sm font-bold text-onyx">
                            {component.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Disclosure>
                )}
                <Disclosure summary="Delivery and payment">
                  <p className="text-sm">
                    Delivery is 35 MAD. Pay on delivery is available, so you
                    can pay when your order arrives.
                  </p>
                </Disclosure>
              </div>

              <Link
                href="/size-guide"
                className="mt-5 inline-block rounded-sm text-sm font-bold text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
              >
                Find your size
              </Link>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/editions"
              className="inline-flex min-h-12 items-center font-bold text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
            >
              ← See both editions
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
