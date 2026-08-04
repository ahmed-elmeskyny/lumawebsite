import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[1.75rem] bg-luma-white shadow-[0_14px_34px_rgba(56,54,57,0.1)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col rounded-[1.75rem] focus-visible:outline-offset-[-4px]"
        aria-label={`Read ${post.title}`}
      >
        <div className={`${post.field} relative aspect-[16/10] overflow-hidden`}>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luma-white/18"
          />
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            priority={priority}
            unoptimized={post.cover.src.endsWith(".svg")}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 92vw"
            className={`relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
              post.coverFit === "contain" ? "object-contain p-6" : "object-cover"
            }`}
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="subtitle text-xs uppercase tracking-[0.16em] text-celtic-blue">
            {post.category}
          </p>
          <h3 className="mt-2.5 font-display text-[1.75rem] leading-[0.96] tracking-tight text-onyx">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-onyx">
            {post.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm text-celtic-blue">
            Read the story <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
