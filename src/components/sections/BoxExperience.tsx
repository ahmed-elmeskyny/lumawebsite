import Link from "next/link";
import Image from "next/image";
import { BoxReveal } from "@/components/sections/BoxReveal";
import { GhostType } from "@/components/ui/GhostType";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Packaging story ("Box experience" copy set in docs/CONTENT.md). The
 * edition link stays available regardless of the reveal state.
 */
export function BoxExperience() {
  return (
    <section
      aria-labelledby="box-experience-heading"
      className="pattern-rings-dark relative overflow-hidden bg-eggshell [--rings-x:75%]"
    >
      <GhostType className="-top-2 left-0 text-[16vw] text-onyx/6">
        OPEN THE MOOD
      </GhostType>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-7 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-[45%] bg-cyber-yellow/70"
          />
          <div className="relative">
            <BoxReveal />
          </div>
          <Image
            src="/assets/mascot/luma-flex-blue.svg"
            alt=""
            width={100}
            height={114}
            unoptimized
            className="absolute -bottom-2 -left-1 h-24 w-auto sm:h-32"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-celtic-blue">
            More than the pair
          </p>
          <h2
            id="box-experience-heading"
            className="mt-3 font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx"
          >
            Open the mood.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-onyx/80">
            Every edition brings three fixed designs together in a Luma rigid
            magnetic box. The artwork continues from the socks to the moment
            you open it.
          </p>
          <p className="mt-4 rounded-2xl bg-luma-white px-5 py-4 font-medium text-onyx">
            One edition. Three designs. One size for all three pairs.
          </p>
          <div className="mt-7">
            <CtaLink href="/collections/editions" variant="dark">
              Explore the boxes
            </CtaLink>
          </div>
          <Link
            href="/size-guide"
            className="mt-4 ml-1 inline-block rounded-sm text-sm font-medium text-celtic-blue underline underline-offset-4 hover:text-onyx"
          >
            See the size guide
          </Link>
        </div>
      </div>
    </section>
  );
}
