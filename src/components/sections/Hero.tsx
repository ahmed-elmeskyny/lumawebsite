import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Homepage hero.
 *
 * Composition: the brand animation sits back like a taped-up poster, a
 * yellow disc acts as a spotlight, and the real product — Luma socks
 * actually worn — stands in front of both with the feet meeting the
 * bottom edge of the section.
 *
 * The edition boxes were deliberately removed from the hero (user
 * direction, 28 July 2026); they lead the Featured Editions section
 * immediately below instead.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="on-dark pattern-rings relative overflow-hidden bg-celtic-blue"
    >
      <GhostType className="bottom-2 left-0 text-[22vw] text-luma-white/8">
        WEAR WHO YOU ARE
      </GhostType>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-4 pb-12 sm:px-7 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-10 lg:px-12 lg:pb-20">
        <div className="max-w-xl pt-10 lg:pt-16">
          <p className="motion-rise text-sm font-semibold uppercase tracking-[0.16em] text-cyber-yellow">
            Socks for every side of you.
          </p>
          <h1
            id="hero-heading"
            className="motion-rise mt-4 font-display text-[clamp(3.25rem,15vw,5.5rem)] leading-[0.92] tracking-tight text-luma-white lg:text-[clamp(4rem,6.5vw,7rem)]"
          >
            Wear who you&nbsp;are.
          </h1>
          <p className="motion-rise-delayed mt-6 max-w-md text-lg leading-relaxed text-luma-white/90">
            Color, character, and a little surprise—made to turn an everyday
            pair into part of your story.
          </p>
          <div className="motion-rise-delayed mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="/socks">Shop the drop</CtaLink>
            <CtaLink href="/editions" variant="quietLight">
              Explore the editions
            </CtaLink>
          </div>
        </div>

        <div className="motion-settle relative mx-auto flex w-full max-w-xl items-center justify-center py-6 lg:max-w-none lg:py-10">
          {/* Spotlight disc behind the poster */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-yellow"
          />

          {/* Brand animation, angled like a pinned poster */}
          <div className="relative z-10 w-[88%] -rotate-2 overflow-hidden rounded-2xl bg-luma-white shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
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
              priority
              className="hidden aspect-16/9 w-full object-cover motion-reduce:block"
            />
          </div>

          <Image
            src="/assets/brand/Luma Socks - Stickers  (17).svg"
            alt=""
            width={70}
            height={70}
            unoptimized
            className="absolute -top-1 right-2 z-30 h-12 w-auto -rotate-12 sm:h-16"
          />
        </div>
      </div>
    </section>
  );
}
