import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Brand story moment; copy from docs/CONTENT.md "Brand story". The
 * mascot is decorative here (empty alt) per docs/BRAND.md.
 */
export function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="on-dark pattern-rings relative overflow-hidden bg-celtic-blue [--rings-x:80%]"
    >
      <GhostType className="-bottom-5 left-0 text-[20vw] text-luma-white/8">
        THIS IS LUMA
      </GhostType>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-2 bottom-2 rounded-[45%] bg-cyber-yellow/85"
          />
          <Image
            src="/assets/mascot/luma-flower-green.svg"
            alt=""
            width={187}
            height={237}
            unoptimized
            className="relative h-52 w-auto sm:h-64"
          />
        </div>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyber-yellow">
            This is Luma
          </p>
          <h2
            id="brand-story-heading"
            className="mt-3 font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-luma-white"
          >
            Built from the ankle up.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-luma-white/90">
            Luma began in Morocco with a simple idea: socks do not have to
            disappear into an outfit. They can carry a mood, start a
            conversation, or show a side of you before you say a word.
          </p>
          <p className="mt-5 font-display text-2xl text-cyber-yellow">
            Made with color in Morocco.
          </p>
          <div className="mt-7">
            <CtaLink href="/our-story">Read our story</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
