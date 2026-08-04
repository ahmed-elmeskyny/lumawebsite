import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { storeConfig } from "@/config/store";
import { editionStories, getEditionStory } from "@/data/editionStories";
import { getProductByHandle } from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { ProductGallery } from "@/components/product/ProductGallery";
import { PurchasePanel } from "@/components/product/PurchasePanel";
import { EditionJourney } from "@/components/edition/EditionJourney";
import { TemporaryAmbulance } from "@/components/edition/TemporaryAmbulance";
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
    title: product.name,
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
  const isHealthyShifts = story.handle === "healthy-shifts";

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

        <div className="relative mx-auto grid min-h-[78svh] max-w-[1440px] items-center gap-8 px-4 py-14 sm:px-7 lg:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] lg:gap-12 lg:px-12 lg:py-20">
          <div className="max-w-xl">
            <p
              className={`subtitle text-sm uppercase tracking-[0.16em] ${
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
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-cyber-yellow px-7 py-3.5 text-base text-onyx transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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

          <div className="relative min-h-[420px] sm:min-h-[560px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_48%_52%/55%_44%_56%_45%] bg-luma-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-[4%] bottom-[9%] h-[22%] rounded-[50%] bg-onyx/15 blur-xl"
            />
            <Image
              src={story.heroImage.src}
              alt={story.heroImage.alt}
              width={story.heroImage.width}
              height={story.heroImage.height}
              priority
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="absolute inset-0 z-10 h-full w-full scale-110 object-contain drop-shadow-[0_24px_46px_rgba(0,0,0,0.3)]"
            />
            {isHealthyShifts ? (
              <div className="absolute bottom-[5%] right-[2%] z-20 w-32 -rotate-3 rounded-2xl bg-cyber-yellow p-3 shadow-xl sm:w-44">
                <TemporaryAmbulance />
              </div>
            ) : (
              <Image
                src="/assets/mascot/luma-wave-blue.svg"
                alt=""
                width={180}
                height={180}
                className="absolute bottom-[2%] right-[2%] z-20 h-auto w-24 rotate-6 drop-shadow-[0_12px_18px_rgba(0,0,0,0.2)] sm:w-36"
              />
            )}
          </div>
        </div>
      </section>

      <EditionJourney story={story} />

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
            <ProductGallery
              images={product.gallery}
              field={story.heroField}
            />

            <div>
              <p className="subtitle text-sm uppercase tracking-[0.14em] text-onyx">
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
                          <p className="mt-2 text-sm text-onyx">
                            {component.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Disclosure>
                )}
                <Disclosure summary="Delivery and payment">
                  <p className="text-sm">
                    Delivery is {formatMad(storeConfig.delivery.feeMad)}.
                    Payment is cash on delivery, so you pay when your order
                    arrives.
                  </p>
                </Disclosure>
              </div>

              <Link
                href="/size-guide"
                className="mt-5 inline-block rounded-sm text-sm text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
              >
                Find your size
              </Link>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/editions"
              className="inline-flex min-h-12 items-center text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
            >
              ← See both editions
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
