import Image from "next/image";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Brand-led product-expression section (docs/CONTENT.md replaces the
 * technical quality section until material facts are confirmed — no
 * quality, comfort, construction, or sustainability claims here).
 */
export function ExpressionBand() {
  return (
    <section
      aria-labelledby="expression-heading"
      className="on-dark relative overflow-hidden bg-orange-red"
    >
      <GhostType className="top-2 left-0 text-[20vw] text-luma-white/10">
        MADE TO BE SEEN
      </GhostType>

      <div className="relative mx-auto max-w-[1440px] px-4 py-20 sm:px-7 lg:px-12 lg:py-28">
        <Image
          src="/assets/brand/Luma Socks - Stickers  (28).svg"
          alt=""
          width={90}
          height={78}
          unoptimized
          className="absolute right-5 top-10 h-14 w-auto rotate-12 sm:h-20 lg:right-20"
        />
        <Image
          src="/assets/brand/Luma Socks - Stickers  (23).svg"
          alt=""
          width={90}
          height={82}
          unoptimized
          className="absolute bottom-10 left-4 h-12 w-auto -rotate-12 sm:h-16 lg:left-20"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-onyx">
            Small detail. Big energy.
          </p>
          <h2
            id="expression-heading"
            className="mt-4 font-display text-[clamp(3rem,10vw,6rem)] leading-[0.92] tracking-tight text-luma-white"
          >
            Made to be seen.
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-luma-white">
            Luma turns the part of your outfit people overlook into the part
            they remember.
          </p>
        </div>
      </div>
    </section>
  );
}
