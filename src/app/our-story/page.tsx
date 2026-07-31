import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story | Luma Socks",
  description:
    "Meet Luma, a Moroccan sock brand turning everyday pairs into a canvas for color, mood, and self-expression.",
};

/** Copy is the approved "Our Story Page" set from docs/CONTENT.md. */
export default function OurStoryPage() {
  return (
    <div className="bg-eggshell">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-luma-green">
              The Luma story
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.75rem,9vw,5rem)] leading-[0.95] tracking-tight text-onyx">
              Wear who you are.
            </h1>
            <p className="mt-6 text-xl font-medium leading-relaxed text-onyx">
              Most socks are designed to disappear. Luma was created to do the
              opposite.
            </p>
            <div className="mt-5 flex flex-col gap-4 text-lg leading-relaxed text-onyx/80">
              <p>
                We started Luma in Morocco with a simple belief: something you
                wear every day can still feel personal. A pair of socks can
                carry a color, a character, a joke, or a mood—and give an
                ordinary outfit a detail that feels completely yours.
              </p>
              <p>
                Luma brings original sock designs, collectible editions,
                playful packaging, and a curious mascot into one growing world.
                Some days call for bold. Some for weird. Some for dreamy. The
                point is not to choose one identity forever. It is to wear the
                one that feels right today.
              </p>
              <p>
                This story starts in Morocco and is made to travel. One pair,
                one mood, one colorful step at a time.
              </p>
            </div>
            <p className="mt-8 font-display text-2xl text-onyx">
              Made with color in Morocco.
            </p>
          </div>
          <div className="flex justify-center lg:sticky lg:top-24 lg:justify-end">
            <Image
              src="/assets/mascot/luma-peace-red.svg"
              alt=""
              width={198}
              height={231}
              unoptimized
              className="h-52 w-auto sm:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
