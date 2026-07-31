import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Homepage hero.
 *
 * Composition follows the Luma hero direction supplied by the user on
 * 28 July 2026: deep Celtic Blue field, oversized ghosted lettering and
 * ring pattern as texture, the brand animation framed in a white card
 * over a yellow blob, a yellow pill primary action, and a numbered
 * two-up detail row beneath the actions.
 *
 * The mockup's detail row carried sustainability and material claims
 * ("Eco-Friendly Materials", "High needle density…"). Those are
 * prohibited by CLAUDE.md and PRODUCTS.md until documented approval, so
 * the same layout device carries approved commerce facts instead.
 *
 * All headline, body, and action copy is the approved hero set from
 * docs/CONTENT.md.
 */
const HERO_DETAILS = [
  {
    index: "01",
    title: "Cash on delivery",
    detail: "Pay when your order arrives.",
  },
  {
    index: "02",
    title: "Two size ranges",
    detail: "EU 36–40 and EU 41–46.",
  },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="on-dark pattern-rings relative overflow-hidden bg-celtic-blue"
    >
      <GhostType className="-bottom-6 left-0 text-[22vw] text-luma-white/8 lg:-bottom-10">
        COLOR YOUR STEPS
      </GhostType>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 pb-16 pt-10 sm:px-7 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-16">
        <div className="max-w-xl">
          <p className="motion-rise text-sm font-semibold uppercase tracking-[0.16em] text-cyber-yellow">
            Socks for every side of you.
          </p>
          <h1
            id="hero-heading"
            className="motion-rise mt-4 font-display text-[clamp(3.25rem,15vw,5.5rem)] leading-[0.92] tracking-tight text-luma-white lg:text-[clamp(4.5rem,7.5vw,8rem)]"
          >
            Wear who you&nbsp;are.
          </h1>
          <p className="motion-rise-delayed mt-6 max-w-md text-lg leading-relaxed text-luma-white/90">
            Color, character, and a little surprise—made to turn an everyday
            pair into part of your story.
          </p>

          <div className="motion-rise-delayed mt-8 flex flex-wrap gap-3">
            <CtaLink href="/shop">Shop the drop</CtaLink>
            <CtaLink href="/collections/editions" variant="outlineLight">
              Discover the editions
            </CtaLink>
          </div>

          <dl className="motion-rise-delayed mt-10 grid max-w-lg gap-6 sm:grid-cols-2">
            {HERO_DETAILS.map((item) => (
              <div key={item.index} className="border-t border-luma-white/25 pt-3">
                <dt className="flex items-baseline gap-2 text-sm font-semibold text-luma-white">
                  <span className="text-cyber-yellow">{item.index}</span>
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm text-luma-white/75">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="motion-settle relative">
          {/* Yellow blob behind the media, per the supplied direction */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-2 top-4 bottom-10 rounded-[45%] bg-cyber-yellow/85 sm:inset-x-6"
          />

          <div className="relative overflow-hidden rounded-3xl bg-luma-white shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <video
              aria-hidden="true"
              tabIndex={-1}
              className="aspect-16/9 w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              playsInline
              preload="auto"
              poster="/assets/brand/luma-delivering-happiness-poster.jpg"
            >
              <source
                src="/assets/brand/luma-delivering-happiness-1280.webm"
                type="video/webm"
              />
              <source
                src="/assets/brand/luma-delivering-happiness-1280.mp4"
                type="video/mp4"
              />
            </video>
            <Image
              src="/assets/brand/luma-delivering-happiness-poster.jpg"
              alt=""
              width={1280}
              height={720}
              className="hidden aspect-16/9 w-full object-cover motion-reduce:block"
            />
          </div>

          {/* Real product imagery stays present in the first viewport,
              breaking out of the media card. */}
          <Image
            src="/assets/editions/luma-combined-editions-homepage-hero-v1.png"
            alt="Luma's two three-pair editions side by side: the blue Color Your Steps box and the teal Healthy Shifts box, open with their sock designs"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 45vw, 88vw"
            className="relative mx-auto -mt-8 h-auto w-[92%] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.28)] sm:-mt-12"
          />

          <Image
            src="/assets/brand/Luma Socks - Stickers  (18).svg"
            alt=""
            width={70}
            height={70}
            unoptimized
            className="absolute -top-2 right-0 h-12 w-auto rotate-12 sm:h-16"
          />
        </div>
      </div>

      <p className="relative mx-auto max-w-[1440px] px-4 pb-6 text-sm text-luma-white/70 sm:px-7 lg:px-12">
        Cash on delivery across Morocco.
      </p>
    </section>
  );
}
