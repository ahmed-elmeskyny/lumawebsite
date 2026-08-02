import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Compact brand introduction — the homepage's only brand-story block.
 * The full narrative lives on /our-story.
 */
export function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="on-dark pattern-rings relative overflow-hidden bg-celtic-blue [--rings-x:82%]"
    >
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-4 py-14 text-center sm:px-7 lg:flex-row lg:gap-12 lg:px-12 lg:py-16 lg:text-left">
        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 bottom-0 rounded-[45%] bg-cyber-yellow/85"
          />
          <Image
            src="/assets/mascot/luma-flower-green.svg"
            alt=""
            width={187}
            height={237}
            unoptimized
            className="relative h-36 w-auto sm:h-44"
          />
        </div>
        <div className="max-w-2xl">
          <h2
            id="brand-story-heading"
            className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-tight text-luma-white"
          >
            More than something you wear.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-luma-white/90">
            Luma turns everyday socks into a canvas for color, character, and
            self-expression.
          </p>
        </div>
        <div className="lg:ml-auto">
          <CtaLink href="/our-story">Meet Luma</CtaLink>
        </div>
      </div>
    </section>
  );
}
