import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";

export const metadata = {
  title: "Page Not Found",
};

/** Recovery page for URLs that do not resolve — typos, dead links, old bookmarks. */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-crystal px-4 py-20 text-center sm:px-7 sm:py-28">
      <span
        aria-hidden="true"
        className="ghost-type absolute left-1/2 top-8 -translate-x-1/2 font-display text-[clamp(6rem,22vw,17rem)] text-onyx/[0.06]"
      >
        404
      </span>
      <div className="relative mx-auto max-w-2xl">
        <Image
          src="/assets/mascot/luma-sleep-purple.svg"
          alt=""
          width={130}
          height={160}
          unoptimized
          className="mx-auto h-28 w-auto"
        />
        <p className="subtitle mt-6 text-xs uppercase tracking-[0.16em] text-celtic-blue">
          Nothing at this address
        </p>
        <h1 className="mt-3 font-display text-[clamp(3rem,10vw,6rem)] leading-[0.9] text-onyx">
          This page took a wrong step.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-onyx/80">
          The link may be out of date, or the address may have a typo. Luma is
          still here — pick up the trail below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaLink href="/socks" variant="dark">
            Shop the socks
          </CtaLink>
          <CtaLink href="/editions" variant="outlineDark">
            Explore the editions
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
