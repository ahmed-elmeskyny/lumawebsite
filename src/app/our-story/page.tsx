import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GhostType } from "@/components/ui/GhostType";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Story | Luma Socks",
  description:
    "Meet Luma and discover the belief behind a colorful sock brand built around creativity, character, and self-expression.",
};

const beliefCards = [
  {
    label: "Why",
    heading: "Expression belongs to everyone.",
    body: "We exist to help people show their colors, moods, and stories—not hide them. Because self-expression can start from the ground up.",
    field: "bg-cyber-yellow",
  },
  {
    label: "How",
    heading: "We turn socks into stories.",
    body: "Color, character, art, and humor become designs you can make part of your everyday style. Every pair begins with an idea worth wearing.",
    field: "bg-classic-rose",
  },
  {
    label: "What",
    heading: "Socks with something to say.",
    body: "Standalone designs and collectible editions that let you choose a mood, follow a story, and make every step feel more like you.",
    field: "bg-light-green",
  },
] as const;

const promises = [
  "Designs that carry a character, feeling, or story.",
  "Color that turns an everyday detail into a statement.",
  "Socks made to feel as considered as they look.",
] as const;

export default function OurStoryPage() {
  return (
    <article className="overflow-clip bg-eggshell">
      {/* Brand manifesto hero */}
      <section
        aria-labelledby="story-heading"
        className="on-dark pattern-rings relative min-h-[82svh] overflow-hidden bg-celtic-blue text-luma-white"
      >
        <GhostType className="-bottom-5 -left-4 text-[26vw] text-luma-white/8">
          WEAR
        </GhostType>
        <div
          aria-hidden="true"
          className="absolute -right-24 top-20 size-80 rounded-full bg-cyber-yellow sm:size-[28rem] lg:right-[4%] lg:top-1/2 lg:-translate-y-1/2"
        />
        <div
          aria-hidden="true"
          className="absolute -left-20 bottom-20 size-48 rounded-full bg-rose-pink/90"
        />

        <div className="relative mx-auto grid min-h-[82svh] max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-7 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:px-12 lg:py-24">
          <Reveal className="relative z-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyber-yellow">
              The Luma story
            </p>
            <h1
              id="story-heading"
              className="mt-4 font-display text-[clamp(4rem,13vw,8.5rem)] leading-[0.82] tracking-tight"
            >
              Wear who
              <br />
              you are.
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-luma-white sm:text-2xl">
              Luma is a movement of color, creativity, and self-expression—
              starting with the part of your outfit closest to the ground.
            </p>
          </Reveal>

          <Reveal delayMs={120} className="relative z-10 flex justify-center lg:justify-end">
            <Image
              src="/assets/mascot/luma-wave-blue.svg"
              alt="Luma waving hello"
              width={310}
              height={360}
              priority
              unoptimized
              className="h-auto w-[58%] max-w-[310px] rotate-3 drop-shadow-[0_24px_34px_rgba(56,54,57,0.3)] lg:w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* The emotional problem */}
      <section
        aria-labelledby="before-color-heading"
        className="on-dark relative overflow-hidden bg-onyx text-luma-white"
      >
        <GhostType className="-right-5 top-12 text-[19vw] text-luma-white/5">
          QUIET
        </GhostType>
        <div className="relative mx-auto grid min-h-[75svh] max-w-[1440px] items-center gap-12 px-4 py-20 sm:px-7 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-crystal">
              Before the color
            </p>
            <h2
              id="before-color-heading"
              className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.88] tracking-tight"
            >
              The world asked everyone to blend in.
            </h2>
          </Reveal>

          <Reveal delayMs={100} className="relative">
            <div className="absolute left-1/2 top-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-luma-white/10" />
            <div className="absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-luma-white/10" />
            <Image
              src="/assets/mascot/luma-sleep-purple.svg"
              alt="Luma resting quietly"
              width={300}
              height={300}
              unoptimized
              className="relative mx-auto h-auto w-[56%] max-w-[300px]"
            />
            <p className="mx-auto mt-8 max-w-xl text-center text-lg font-semibold leading-relaxed text-luma-white/85 sm:text-xl">
              Luma was full of feeling, imagination, and color—but kept it all
              inside. In a world of sameness, being seen felt like the hardest
              thing to do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Color breakthrough */}
      <section
        aria-labelledby="breakthrough-heading"
        className="relative overflow-hidden bg-luma-white"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-5">
          <span className="flex-1 bg-cyber-yellow" />
          <span className="flex-1 bg-orange-red" />
          <span className="flex-1 bg-rose-pink" />
          <span className="flex-1 bg-luma-green" />
          <span className="flex-1 bg-celtic-blue" />
        </div>
        <GhostType className="-bottom-8 left-0 text-[21vw] text-celtic-blue/6">
          COLOR
        </GhostType>

        <div className="relative mx-auto grid min-h-[85svh] max-w-[1440px] items-center gap-10 px-4 py-20 sm:px-7 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:gap-20 lg:px-12 lg:py-28">
          <Reveal className="relative flex min-h-[480px] items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute size-[78%] rounded-[45%_55%_60%_40%/48%_42%_58%_52%] bg-classic-rose"
            />
            <div
              aria-hidden="true"
              className="absolute left-[8%] top-[9%] size-28 rounded-full bg-cyber-yellow sm:size-40"
            />
            <Image
              src="/assets/mascot/luma-paint-pink.svg"
              alt="Luma painting with color"
              width={340}
              height={390}
              unoptimized
              className="relative z-10 h-auto w-[68%] max-w-[340px] -rotate-3 drop-shadow-[0_22px_32px_rgba(56,54,57,0.22)]"
            />
          </Reveal>

          <Reveal delayMs={100} className="relative z-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-red">
              The breakthrough
            </p>
            <h2
              id="breakthrough-heading"
              className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.88] tracking-tight text-onyx"
            >
              Then the color found a way out.
            </h2>
            <div className="mt-7 space-y-5 text-lg font-semibold leading-relaxed text-onyx sm:text-xl">
              <p>
                Luma reached for a pair of socks and began creating. Every
                color became a feeling. Every pattern became a story.
              </p>
              <p>
                Looking down, he discovered something powerful: you do not
                need to shout to be heard. Sometimes expression starts from
                the ground up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product as expression */}
      <section
        aria-labelledby="canvas-heading"
        className="pattern-rings-dark relative overflow-hidden bg-cyber-yellow"
      >
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-7 lg:px-12 lg:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-celtic-blue">
              Who we are
            </p>
            <h2
              id="canvas-heading"
              className="mt-4 font-display text-[clamp(3rem,10vw,7rem)] leading-[0.86] tracking-tight text-onyx"
            >
              Your daily canvas.
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-xl font-semibold leading-relaxed text-onyx sm:text-2xl">
              Socks are more than something you wear. They can carry your
              mood, your personality, and that small spark that feels entirely
              your own.
            </p>
          </Reveal>

          <div className="relative mx-auto mt-14 grid max-w-5xl grid-cols-3 items-end gap-2 sm:gap-8">
            <Reveal className="translate-y-8 -rotate-6">
              <Image
                src="/assets/products/socks/cutout/sock-daydream-card.png"
                alt="Daydream sock"
                width={363}
                height={712}
                sizes="30vw"
                className="h-auto w-full drop-shadow-[0_18px_28px_rgba(56,54,57,0.22)]"
              />
            </Reveal>
            <Reveal delayMs={80} className="relative z-10 -translate-y-3 rotate-3">
              <Image
                src="/assets/products/socks/cutout/sock-vibe-attack-card.png"
                alt="Vibe Attack sock"
                width={363}
                height={712}
                sizes="30vw"
                className="h-auto w-full drop-shadow-[0_18px_28px_rgba(56,54,57,0.22)]"
              />
            </Reveal>
            <Reveal delayMs={160} className="translate-y-10 rotate-6">
              <Image
                src="/assets/products/socks/cutout/sock-hypno-wave-card.png"
                alt="Hypno Wave sock"
                width={363}
                height={712}
                sizes="30vw"
                className="h-auto w-full drop-shadow-[0_18px_28px_rgba(56,54,57,0.22)]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why / How / What */}
      <section aria-labelledby="belief-heading" className="bg-eggshell">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-7 lg:px-12 lg:py-28">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-luma-green">
              Our belief
            </p>
            <h2
              id="belief-heading"
              className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.88] tracking-tight text-onyx"
            >
              More than a product. A way to show up.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {beliefCards.map((card, index) => (
              <Reveal key={card.label} delayMs={index * 90}>
                <article
                  className={`${card.field} relative min-h-[390px] overflow-hidden rounded-[2rem] p-7 shadow-[0_18px_45px_rgba(56,54,57,0.1)] sm:p-9`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 -top-8 font-display text-[10rem] leading-none text-onyx/8"
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-onyx/70">
                    {card.label}
                  </p>
                  <h3 className="mt-20 font-display text-[2.65rem] leading-[0.92] tracking-tight text-onyx">
                    {card.heading}
                  </h3>
                  <p className="mt-5 text-lg font-semibold leading-relaxed text-onyx">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot */}
      <section
        aria-labelledby="mascot-heading"
        className="relative overflow-hidden bg-rose-pink"
      >
        <GhostType className="-bottom-3 -right-5 text-[24vw] text-onyx/7">
          LUMA
        </GhostType>
        <div className="relative mx-auto grid min-h-[80svh] max-w-[1440px] items-center gap-12 px-4 py-20 sm:px-7 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-20 lg:px-12 lg:py-28">
          <Reveal className="relative flex justify-center">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/50"
            />
            <Image
              src="/assets/mascot/luma-peace-red.svg"
              alt="Luma making a peace sign"
              width={340}
              height={400}
              unoptimized
              className="relative h-auto w-[62%] max-w-[340px] drop-shadow-[0_24px_34px_rgba(56,54,57,0.2)]"
            />
          </Reveal>

          <Reveal delayMs={100} className="relative z-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-celtic-blue">
              Meet the mascot
            </p>
            <h2
              id="mascot-heading"
              className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.88] tracking-tight text-onyx"
            >
              A movement needs a face.
            </h2>
            <div className="mt-7 space-y-5 text-lg font-semibold leading-relaxed text-onyx sm:text-xl">
              <p>
                That is Luma. Playful, curious, and always changing. Sometimes
                cheeky, sometimes unexpectedly wise, but never afraid of
                color.
              </p>
              <p>
                He is more than a logo. He is the sidekick who connects every
                edition, design, inside joke, and future collaboration to one
                bigger world of self-expression.
              </p>
            </div>
            <p className="mt-8 inline-block rotate-[-2deg] rounded-2xl bg-luma-white px-5 py-4 font-display text-2xl leading-tight text-onyx shadow-lg">
              From head to toe—well, mostly toe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Promise and origin */}
      <section aria-labelledby="promise-heading" className="bg-luma-green text-luma-white">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-4 py-20 sm:px-7 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:px-12 lg:py-28">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyber-yellow">
              Our promise
            </p>
            <h2
              id="promise-heading"
              className="mt-4 max-w-4xl font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.88] tracking-tight"
            >
              Feel good. Stand out. Stay you.
            </h2>
            <ul className="mt-10 space-y-5">
              {promises.map((promise, index) => (
                <li key={promise} className="flex gap-4 text-lg font-semibold leading-relaxed sm:text-xl">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cyber-yellow font-display text-lg text-onyx">
                    {index + 1}
                  </span>
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={120} className="relative mx-auto max-w-md text-center lg:text-left">
            <div className="rounded-[2rem] border border-luma-white/25 bg-luma-white/10 p-8 sm:p-10">
              <p className="font-display text-5xl leading-none text-cyber-yellow">Born here.</p>
              <p className="mt-5 text-xl font-semibold leading-relaxed text-luma-white">
                Luma began in Morocco with a big idea: everyday fashion can be
                more expressive, more playful, and much more personal.
              </p>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-luma-white/85">
                The story starts here. The vision keeps moving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing invitation */}
      <section className="on-dark pattern-rings relative overflow-hidden bg-celtic-blue text-luma-white">
        <GhostType className="-bottom-6 left-0 text-[22vw] text-luma-white/7">
          YOURS
        </GhostType>
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-20 sm:px-7 lg:grid-cols-[minmax(0,62fr)_minmax(0,38fr)] lg:px-12 lg:py-28">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyber-yellow">
              The next chapter
            </p>
            <h2 className="mt-4 font-display text-[clamp(3.5rem,11vw,7.5rem)] leading-[0.84] tracking-tight">
              Your mood.
              <br />
              Your style.
              <br />
              Your story.
            </h2>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-luma-white">
              Luma is for the bold, the dreamers, and everyone who refuses to
              disappear into the background.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/socks"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-cyber-yellow px-7 py-3.5 font-bold text-onyx transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Shop Luma&apos;s socks
              </Link>
              <Link
                href="/editions"
                className="inline-flex min-h-13 items-center justify-center rounded-full border-2 border-luma-white px-7 py-3.5 font-bold text-luma-white transition-colors hover:bg-luma-white hover:text-celtic-blue"
              >
                Explore the editions
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={120} className="flex justify-center lg:justify-end">
            <Image
              src="/assets/mascot/luma-sit-wave-white.svg"
              alt=""
              width={300}
              height={350}
              unoptimized
              className="h-auto w-[58%] max-w-[300px] drop-shadow-[0_20px_30px_rgba(56,54,57,0.25)]"
            />
          </Reveal>
        </div>
      </section>
    </article>
  );
}
