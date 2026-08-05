import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedEditions } from "@/lib/catalogue";
import {
  editionLabel,
  getEditionStory,
  nextEditionNumber,
} from "@/data/editionStories";
import { formatMad } from "@/lib/money";
import { GhostType } from "@/components/ui/GhostType";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Editions",
  description:
    "Each Luma edition is a story in three pairs. Discover Color Your Steps and Healthy Shifts.",
};

/** Editions hub — the gateway into each edition's story page. */
export default function EditionsPage() {
  const editions = getFeaturedEditions();

  return (
    <div>
      <section className="relative overflow-hidden bg-onyx">
        <GhostType className="-bottom-3 left-0 text-[20vw] text-luma-white/8">
          EDITIONS
        </GhostType>
        <div className="on-dark relative mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
          <p className="subtitle text-sm uppercase tracking-[0.16em] text-cyber-yellow">
            The edition series
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.75rem,9vw,5rem)] leading-[0.92] tracking-tight text-luma-white">
            Every edition is a story in three pairs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-luma-white/90">
            An edition is three Luma designs built around one theme, boxed
            together: a fixed set, one rigid magnetic box, and one size across
            all three pairs. Each is numbered, and the series keeps growing.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-14">
          {editions.map((edition, index) => {
            const story = getEditionStory(edition.handle);
            const flip = index % 2 === 1;
            return (
              <Reveal key={edition.handle}>
                <article
                  className={`${story?.heroField ?? "bg-eggshell"} ${
                    story?.heroDark ? "on-dark" : ""
                  } group relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12`}
                >
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 aspect-square w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/20"
                      />
                      <Image
                        src={edition.image.src}
                        alt={edition.image.alt}
                        width={edition.image.width}
                        height={edition.image.height}
                        sizes="(min-width: 1024px) 44vw, 88vw"
                        className="relative h-auto w-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                  </div>

                  <div className={flip ? "lg:order-1" : ""}>
                    <p
                      className={`subtitle text-sm uppercase tracking-[0.16em] ${
                        story?.heroDark ? "text-cyber-yellow" : "text-celtic-blue"
                      }`}
                    >
                      {story?.eyebrow ?? "Fixed three-pair edition"}
                    </p>
                    <h2
                      className={`mt-3 font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.95] tracking-tight ${
                        story?.heroDark ? "text-luma-white" : "text-onyx"
                      }`}
                    >
                      <Link
                        href={`/editions/${edition.handle}`}
                        className="rounded-sm after:absolute after:inset-0 after:rounded-[2.5rem]"
                      >
                        {edition.name}
                      </Link>
                    </h2>
                    <p
                      className={`mt-4 max-w-md text-lg leading-relaxed ${
                        story?.heroDark ? "text-luma-white/85" : "text-onyx/80"
                      }`}
                    >
                      {story?.heroBody ?? edition.shortDescription}
                    </p>

                    {story && (
                      <p
                        className={`subtitle mt-5 text-xs uppercase tracking-[0.14em] ${
                          story.heroDark ? "text-cyber-yellow" : "text-celtic-blue"
                        }`}
                      >
                        Theme · {story.theme}
                      </p>
                    )}

                    {edition.contents && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {edition.contents.map((component) => (
                          <li
                            key={component.name}
                            className={`rounded-full border px-3 py-1 text-sm ${
                              story?.heroDark
                                ? "border-luma-white/35 text-luma-white/90"
                                : "border-onyx/25 text-onyx/80"
                            }`}
                          >
                            {component.name}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <span className="inline-flex min-h-12 items-center rounded-full bg-cyber-yellow px-6 text-onyx">
                        Read the story
                      </span>
                      <span
                        className={`font-display text-2xl ${
                          story?.heroDark ? "text-luma-white" : "text-onyx"
                        }`}
                      >
                        {formatMad(edition.priceMad)}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Closes the list with the series itself, so the page reads as an
              ongoing collection rather than a catalogue of two. No date,
              theme, or collaborator is named — none are confirmed. */}
          <Reveal>
            <article className="flex flex-col items-center rounded-[2.5rem] border-2 border-dashed border-onyx/25 p-10 text-center sm:p-14">
              <Image
                src="/assets/mascot/luma-peace-red.svg"
                alt=""
                width={140}
                height={165}
                unoptimized
                className="h-24 w-auto"
              />
              <p className="subtitle mt-6 text-sm uppercase tracking-[0.16em] text-celtic-blue">
                {editionLabel(nextEditionNumber())}
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-tight text-onyx">
                The next one is in the works.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-onyx/80">
                New themes and collaborations join the series as they land.
                Sign up at the bottom of any page and you will hear about the
                next box first.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
