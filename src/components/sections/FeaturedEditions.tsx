import Image from "next/image";
import {
  getEditionOnlyDesignNames,
  getFeaturedEditions,
  toCardItem,
} from "@/lib/catalogue";
import { spellCount } from "@/lib/text";
import {
  editionLabel,
  getEditionStory,
  nextEditionNumber,
} from "@/data/editionStories";
import { ProductCard } from "@/components/product/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { GhostType } from "@/components/ui/GhostType";

/**
 * The edition series, explained before it is sold.
 *
 * This section sits AFTER the single pairs because "edition" is a concept
 * a first-time visitor has to be taught — leading with two unexplained box
 * renders left people looking at packaging without knowing what was inside
 * or why it cost three times a single pair.
 *
 * So the order here is: say what an edition is, show how one works in
 * three steps, then show the numbered series with a placeholder for the
 * next one. The numbering and the "in the works" tile are what
 * communicate that this is an ongoing collection, not a pair of one-offs.
 *
 * Dark field on purpose: editions get the same onyx treatment as the
 * /editions hub, so the brand's "special shelf" is visually consistent.
 */
function buildHowItWorks() {
  const exclusiveCount = getEditionOnlyDesignNames().length;
  return [
    {
      title: "One theme",
      body: "Every edition is built around a single idea, and the three designs inside all belong to it.",
    },
    {
      title: "Three fixed designs",
      body: `The trio is chosen to work together, so you cannot swap one out. Most are also sold as single pairs — ${spellCount(exclusiveCount)} ${exclusiveCount === 1 ? "exists" : "exist"} only inside a box.`,
    },
    {
      title: "One size, one box",
      body: "Choose a single size for all three pairs. They arrive in a Luma rigid magnetic box built to keep.",
    },
  ];
}

export function FeaturedEditions() {
  const editions = getFeaturedEditions();
  const howItWorks = buildHowItWorks();

  return (
    <section
      aria-labelledby="featured-editions-heading"
      className="on-dark pattern-rings relative overflow-hidden bg-onyx text-luma-white"
    >
      <GhostType className="-bottom-4 left-0 text-[20vw] text-luma-white/8">
        EDITIONS
      </GhostType>

      <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="subtitle text-sm uppercase tracking-[0.16em] text-cyber-yellow">
            The edition series
          </p>
          <h2
            id="featured-editions-heading"
            className="mt-3 font-display text-[clamp(2.5rem,7vw,4rem)] leading-[0.95] tracking-tight text-luma-white"
          >
            Themed boxes. Three pairs each.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-luma-white/90">
            An edition is a set of three Luma designs built around one idea,
            boxed together. Each one is numbered, and new themes and
            collaborations join the series as they land.
          </p>
        </div>

        {/* How an edition works — the part that was missing.
            Deliberately unnumbered: "01 / 02 / 03" here would read as
            edition numbers, which are shown on the boxes just below. */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-3 lg:gap-6">
          {howItWorks.map((step) => (
            <li
              key={step.title}
              className="rounded-2xl border border-luma-white/20 bg-luma-white/5 p-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="block h-1.5 w-10 rounded-full bg-cyber-yellow"
              />
              <p className="mt-4 font-display text-xl leading-tight text-luma-white">
                {step.title}
              </p>
              <p className="mt-2 leading-relaxed text-luma-white/80">
                {step.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {editions.map((edition) => {
            const story = getEditionStory(edition.handle);
            const card = toCardItem(edition);
            return (
              <div key={edition.handle} className="flex flex-col">
                <ProductCard
                  item={{
                    ...card,
                    // The series number replaces the generic "3-pair
                    // edition" label — the three steps above already
                    // established what an edition contains.
                    typeLabel: story
                      ? editionLabel(story.seriesNumber)
                      : card.typeLabel,
                  }}
                />
                {story && (
                  <p className="mt-3 px-1 text-sm leading-relaxed text-luma-white/75">
                    {story.theme}
                  </p>
                )}
              </div>
            );
          })}

          <NextEditionTile />
        </div>

        <div className="mt-10">
          <CtaLink href="/editions">See how the editions work</CtaLink>
        </div>
      </div>
    </section>
  );
}

/**
 * Placeholder for the next edition. Deliberately vague: it promises that
 * the series continues without naming a date, a theme, or a collaborator
 * — none of which are confirmed.
 */
function NextEditionTile() {
  return (
    <div className="flex min-h-[18rem] flex-col items-center justify-center rounded-[1.75rem] border-2 border-dashed border-luma-white/30 p-6 text-center">
      <Image
        src="/assets/mascot/luma-wave-blue.svg"
        alt=""
        width={120}
        height={148}
        unoptimized
        className="h-20 w-auto opacity-90"
      />
      <p className="subtitle mt-5 text-xs uppercase tracking-[0.16em] text-cyber-yellow">
        {editionLabel(nextEditionNumber())}
      </p>
      <p className="mt-2 font-display text-2xl leading-tight text-luma-white">
        In the works.
      </p>
      <p className="mt-2 max-w-[22ch] leading-relaxed text-luma-white/75">
        New themes and collaborations are on the way.
      </p>
    </div>
  );
}
