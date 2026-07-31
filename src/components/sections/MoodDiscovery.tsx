import Image from "next/image";
import { GhostType } from "@/components/ui/GhostType";

/**
 * Mood discovery — visual grouping only at this stage. The approved
 * labels (docs/CONTENT.md) are presented as editorial text, deliberately
 * NOT as buttons, links, or filters: functional mood filtering waits for
 * approved Shopify tags or metafields (docs/SITE_BRIEF.md).
 */
const MOODS = [
  { label: "Bold", field: "bg-cyber-yellow", tilt: "-rotate-2" },
  { label: "Dreamy", field: "bg-crystal", tilt: "rotate-1" },
  { label: "Playful", field: "bg-classic-rose", tilt: "-rotate-1" },
  { label: "Loud", field: "bg-tangerine", tilt: "rotate-2" },
  { label: "Weird", field: "bg-light-green", tilt: "-rotate-2" },
  { label: "Chill", field: "bg-luma-white", tilt: "rotate-1" },
  { label: "Creative", field: "bg-rose-pink", tilt: "-rotate-1" },
] as const;

export function MoodDiscovery() {
  return (
    <section
      aria-labelledby="mood-heading"
      className="on-dark relative overflow-hidden bg-luma-green"
    >
      <GhostType className="-bottom-4 right-0 text-[18vw] text-luma-white/8">
        PICK YOUR MOOD
      </GhostType>

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyber-yellow">
              What are you wearing today?
            </p>
            <h2
              id="mood-heading"
              className="mt-3 font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-luma-white"
            >
              Pick your mood.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-luma-white/85">
              Quiet outfit or loud outfit, there is always room for a little
              more you.
            </p>
          </div>
          <Image
            src="/assets/mascot/luma-peace-red.svg"
            alt=""
            width={99}
            height={115}
            unoptimized
            className="h-28 w-auto sm:h-36"
          />
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {MOODS.map((mood) => (
            <li
              key={mood.label}
              className={`${mood.field} ${mood.tilt} rounded-full px-6 py-3 font-display text-xl text-onyx sm:text-2xl`}
            >
              {mood.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
