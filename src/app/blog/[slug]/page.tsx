import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 2);
  const heroText = post.darkField ? "text-luma-white" : "text-onyx";

  return (
    <article className="bg-eggshell">
      {/* `on-dark` switches the focus ring to yellow (globals.css). Without
          it the celtic-blue ring is invisible on a celtic-blue hero. */}
      <header
        className={`${post.field} ${post.darkField ? "on-dark" : ""} relative overflow-hidden`}
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-20 size-[28rem] rounded-full bg-luma-white/12"
        />
        <div className="relative mx-auto grid min-h-[76svh] max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-7 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <Reveal className="relative z-10 max-w-3xl">
            <Link
              href="/blog"
              className={`inline-flex items-center gap-2 rounded-sm text-sm underline decoration-2 underline-offset-4 ${
                post.darkField ? "text-cyber-yellow" : "text-celtic-blue"
              }`}
            >
              <span aria-hidden="true">←</span> The Luma Journal
            </Link>
            <p
              className={`subtitle mt-8 text-sm uppercase tracking-[0.18em] ${
                post.darkField ? "text-cyber-yellow" : "text-celtic-blue"
              }`}
            >
              {post.category}
            </p>
            <h1
              className={`mt-4 font-display text-[clamp(3.5rem,9vw,6.75rem)] leading-[0.86] tracking-tight ${heroText}`}
            >
              {post.title}
            </h1>
            <p
              className={`mt-7 max-w-2xl text-xl leading-relaxed sm:text-2xl ${
                post.darkField ? "text-luma-white" : "text-onyx"
              }`}
            >
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delayMs={100} className="relative flex min-h-[420px] items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute aspect-square w-[84%] rounded-[46%_54%_58%_42%/50%_44%_56%_50%] bg-luma-white/22"
            />
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              width={post.cover.width}
              height={post.cover.height}
              priority
              unoptimized={post.cover.src.endsWith(".svg")}
              sizes="(min-width: 1024px) 46vw, 92vw"
              className={`relative z-10 max-h-[620px] w-full drop-shadow-[0_24px_38px_rgba(56,54,57,0.25)] ${
                post.coverFit === "contain" ? "object-contain p-6" : "aspect-square rounded-[2rem] object-cover"
              }`}
            />
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-[920px] px-4 py-16 sm:px-7 lg:py-24">
        {post.sections.map((section, index) => (
          <Reveal key={section.heading}>
            <section
              aria-labelledby={`article-section-${index}`}
              className="border-b border-onyx/15 py-12 first:pt-0 last:border-0 last:pb-0"
            >
              <p className="font-display text-5xl leading-none text-celtic-blue/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2
                id={`article-section-${index}`}
                className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.92] tracking-tight text-onyx"
              >
                {section.heading}
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-[1.75] text-onyx sm:text-xl">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.pullQuote && (
                <blockquote className="pattern-rings-dark mt-10 rotate-[-1deg] rounded-[2rem] bg-cyber-yellow p-7 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-onyx shadow-[0_16px_36px_rgba(56,54,57,0.12)] sm:p-10">
                  “{section.pullQuote}”
                </blockquote>
              )}
            </section>
          </Reveal>
        ))}
      </div>

      <section aria-labelledby="related-reading" className="bg-luma-white">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
          <Reveal>
            <p className="subtitle text-sm uppercase tracking-[0.18em] text-luma-green">
              Keep exploring
            </p>
            <h2
              id="related-reading"
              className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-onyx"
            >
              Read next.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {related.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delayMs={index * 90}>
                <BlogCard post={relatedPost} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
