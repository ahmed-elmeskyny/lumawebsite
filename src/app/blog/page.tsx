import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { GhostType } from "@/components/ui/GhostType";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "The Luma Journal | Sock Craft, Materials, Style and Stories",
  description:
    "Explore how socks are made, material guides, practical advice, sock design and culture, industry ideas, and stories from Luma.",
};

const JOURNAL_TOPICS = [
  "Sock craft",
  "Materials",
  "Practical guides",
  "Style & culture",
  "Sock-world news",
  "Inside Luma",
] as const;

export default function BlogPage() {
  const featured = blogPosts[0]!;
  const morePosts = blogPosts.slice(1);

  return (
    <div className="bg-eggshell">
      <section className="on-dark pattern-rings relative overflow-hidden bg-celtic-blue text-luma-white">
        <GhostType className="-bottom-6 left-0 text-[22vw] text-luma-white/7">
          JOURNAL
        </GhostType>
        <div
          aria-hidden="true"
          className="absolute -right-24 top-8 size-72 rounded-full bg-cyber-yellow sm:size-[26rem]"
        />
        <div className="relative mx-auto grid min-h-[52svh] max-w-[1440px] items-center gap-6 px-4 py-12 sm:px-7 sm:py-14 lg:grid-cols-[minmax(0,64fr)_minmax(0,36fr)] lg:px-12 lg:py-16">
          <Reveal className="relative z-10 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyber-yellow">
              The Luma Journal
            </p>
            <h1 className="mt-3 font-display text-[clamp(3.5rem,9vw,6.75rem)] leading-[0.86] tracking-tight">
              Stories worth wearing.
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-luma-white sm:text-xl">
              How socks are made, what materials change, how to choose a pair,
              what is happening across the sock world—and what Luma is building.
            </p>
          </Reveal>
          <Reveal delayMs={120} className="relative z-10 flex justify-center lg:justify-end">
            <Image
              src="/assets/mascot/luma-pizza-peach.svg"
              alt="Luma relaxing with a slice of pizza"
              width={310}
              height={360}
              priority
              unoptimized
              className="h-auto w-[46%] max-w-[240px] -rotate-3 drop-shadow-[0_22px_32px_rgba(56,54,57,0.28)] lg:w-full"
            />
          </Reveal>
        </div>
      </section>

      <section aria-label="Journal topics" className="bg-onyx text-luma-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 px-4 py-5 sm:px-7 lg:px-12">
          <span className="mr-2 text-xs font-bold uppercase tracking-[0.16em] text-cyber-yellow">
            Explore
          </span>
          {JOURNAL_TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-luma-white/25 px-4 py-2 text-sm font-semibold text-luma-white"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="featured-story" className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-luma-green">
            Start here
          </p>
          <article className="mt-5 overflow-hidden rounded-[2.25rem] bg-luma-white shadow-[0_20px_55px_rgba(56,54,57,0.12)]">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid rounded-[2.25rem] focus-visible:outline-offset-[-4px] lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)]"
            >
              <div className={`${featured.field} relative min-h-[300px] overflow-hidden sm:min-h-[420px]`}>
                <Image
                  src={featured.cover.src}
                  alt={featured.cover.alt}
                  width={featured.cover.width}
                  height={featured.cover.height}
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                    featured.coverFit === "contain" ? "object-contain p-8 sm:p-10" : "object-cover"
                  }`}
                />
                <span className="absolute left-5 top-5 rounded-full bg-cyber-yellow px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-onyx">
                  Featured story
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-celtic-blue">
                  {featured.category}
                </p>
                <h2
                  id="featured-story"
                  className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-tight text-onyx"
                >
                  {featured.title}
                </h2>
                <p className="mt-5 text-base font-semibold leading-relaxed text-onyx sm:text-lg">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-celtic-blue">
                  Read the story <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        </Reveal>
      </section>

      <section aria-labelledby="latest-stories" className="bg-luma-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-red">
                Keep reading
              </p>
              <h2
                id="latest-stories"
                className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-onyx"
              >
                The sock world, decoded.
              </h2>
            </div>
            <p className="max-w-md text-lg font-semibold leading-relaxed text-onyx">
              Craft, fibres, fit, style, culture, and Luma stories—all in one
              colorful journal.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {morePosts.map((post, index) => (
              <Reveal key={post.slug} delayMs={(index % 2) * 90}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pattern-rings-dark bg-cyber-yellow">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-16 sm:px-7 lg:grid-cols-[minmax(0,68fr)_minmax(0,32fr)] lg:px-12 lg:py-20">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-celtic-blue">
              Enough reading for now?
            </p>
            <h2 className="mt-3 font-display text-[clamp(3rem,8vw,5.75rem)] leading-[0.88] tracking-tight text-onyx">
              Put the story on your feet.
            </h2>
          </Reveal>
          <Reveal delayMs={100} className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/socks"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-onyx px-7 py-3.5 font-bold text-luma-white transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Shop Luma&apos;s socks
            </Link>
            <Link
              href="/editions"
              className="inline-flex min-h-13 items-center justify-center rounded-full border-2 border-onyx px-7 py-3.5 font-bold text-onyx transition-colors hover:bg-onyx hover:text-luma-white"
            >
              Explore editions
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
