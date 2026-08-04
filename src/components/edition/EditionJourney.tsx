import Image from "next/image";
import type { EditionStory, StoryBeat } from "@/data/editionStories";
import { Reveal } from "@/components/ui/Reveal";
import { TemporaryAmbulance } from "@/components/edition/TemporaryAmbulance";

interface EditionJourneyProps {
  story: EditionStory;
}

function JourneyRoute({ medical }: { medical: boolean }) {
  const desktopPath = medical
    ? "M18 0 C18 100 78 135 78 250 S22 390 22 510 S78 650 78 760 S50 920 50 1000"
    : "M15 0 C15 115 82 125 82 260 S20 400 20 520 S82 670 82 790 S52 930 52 1000";
  const mobilePath = "M14 0 C19 190 11 315 16 470 S11 735 16 1000";

  return (
    <>
      {[
        { path: mobilePath, className: "lg:hidden", wide: medical ? 34 : 9 },
        { path: desktopPath, className: "hidden lg:block", wide: medical ? 52 : 10 },
      ].map((route) => (
        <svg
          key={route.className}
          aria-hidden="true"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className={`pointer-events-none absolute inset-0 h-full w-full ${route.className}`}
        >
          <path
            d={route.path}
            fill="none"
            stroke={medical ? "#F1F1F1" : "#1A5EDB"}
            strokeWidth={route.wide}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={medical ? 0.78 : 0.22}
          />
          <path
            d={route.path}
            fill="none"
            stroke={medical ? "#1D987C" : "#1A5EDB"}
            strokeWidth={medical ? 4 : 5}
            strokeDasharray={medical ? "12 16" : "3 18"}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={medical ? 0.62 : 0.48}
          />
        </svg>
      ))}
    </>
  );
}

function JourneyGuide({ medical }: { medical: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 z-30 w-20 lg:left-1/2 lg:w-32 lg:-translate-x-1/2"
    >
      <div className="sticky top-[38vh] mt-[92vh]">
        {medical ? (
          <TemporaryAmbulance className="w-20 lg:w-32" />
        ) : (
          <Image
            src="/assets/mascot/luma-skate-yellow.svg"
            alt=""
            width={160}
            height={160}
            className="h-auto w-16 drop-shadow-[0_10px_16px_rgba(56,54,57,0.18)] lg:w-24"
          />
        )}
      </div>
    </div>
  );
}

function StoryScene({
  beat,
  index,
  medical,
}: {
  beat: StoryBeat;
  index: number;
  medical: boolean;
}) {
  const flip = index % 2 === 1;

  return (
    <article
      aria-labelledby={`beat-${index}`}
      className="relative z-20 mx-auto grid min-h-[82svh] max-w-[1440px] items-center gap-10 py-16 pl-20 pr-4 sm:pr-7 lg:grid-cols-2 lg:gap-36 lg:px-12 lg:py-24"
    >
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="relative mx-auto min-h-[470px] w-full max-w-[570px] sm:min-h-[590px]">
          <div
            aria-hidden="true"
            className={`${beat.field} absolute inset-x-[3%] inset-y-[6%] rounded-[44%_56%_48%_52%/55%_42%_58%_45%] opacity-95 shadow-[0_24px_70px_rgba(56,54,57,0.12)]`}
          />
          <p
            aria-hidden="true"
            className="ghost-type absolute left-1/2 top-[12%] z-0 -translate-x-1/2 text-[clamp(4rem,13vw,9rem)] text-onyx/10"
          >
            {beat.title.toUpperCase()}
          </p>
          <Image
            src={beat.image.src}
            alt={beat.image.alt}
            width={beat.image.width}
            height={beat.image.height}
            sizes="(min-width: 1024px) 34vw, 72vw"
            className={`absolute top-[3%] z-10 h-[82%] w-auto object-contain drop-shadow-[0_20px_28px_rgba(56,54,57,0.24)] ${
              flip ? "right-[8%]" : "left-[12%]"
            }`}
          />
          <div
            className={`absolute bottom-[3%] z-20 w-[48%] overflow-hidden rounded-[1.5rem] border-[6px] border-luma-white bg-luma-white shadow-[0_18px_40px_rgba(56,54,57,0.25)] ${
              flip
                ? "left-[3%] rotate-[-4deg]"
                : "right-[1%] rotate-[4deg]"
            }`}
          >
            <Image
              src={beat.wornImage.src}
              alt={beat.wornImage.alt}
              width={beat.wornImage.width}
              height={beat.wornImage.height}
              sizes="(min-width: 1024px) 18vw, 42vw"
              className="aspect-square w-full object-cover"
            />
          </div>
          <span className="absolute right-[4%] top-[5%] z-20 grid size-16 rotate-6 place-items-center rounded-full bg-cyber-yellow font-display text-2xl text-onyx shadow-lg sm:size-20 sm:text-3xl">
            {`0${index + 1}`}
          </span>
        </div>
      </Reveal>

      <Reveal delayMs={100} className={flip ? "lg:order-1" : ""}>
        <div className="relative max-w-xl">
          <p className="subtitle inline-flex rounded-full bg-onyx px-4 py-2 text-xs uppercase tracking-[0.16em] text-luma-white">
            {medical ? `Route stop ${index + 1}` : `Chapter ${index + 1}`}
          </p>
          <p className="subtitle mt-6 text-sm uppercase tracking-[0.16em] text-onyx">
            {beat.title}
          </p>
          <h2
            id={`beat-${index}`}
            className="mt-2 font-display text-[clamp(2.65rem,7vw,5.25rem)] leading-[0.9] tracking-tight text-onyx"
          >
            {beat.design}
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-onyx sm:text-xl">
            {beat.body}
          </p>
        </div>
      </Reveal>
    </article>
  );
}

export function EditionJourney({ story }: EditionJourneyProps) {
  const medical = story.handle === "healthy-shifts";

  return (
    <section
      aria-labelledby="journey-heading"
      className={`relative overflow-clip ${medical ? "bg-crystal" : "bg-eggshell"}`}
    >
      <JourneyRoute medical={medical} />
      <JourneyGuide medical={medical} />

      <div className="relative z-20 mx-auto max-w-[1440px] px-4 pb-8 pt-20 pl-20 sm:pr-7 lg:px-12 lg:pb-16 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="subtitle text-sm uppercase tracking-[0.18em] text-celtic-blue">
            {medical ? "Luma is on call" : "Follow the footprints"}
          </p>
          <h2
            id="journey-heading"
            className="mt-4 font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-onyx"
          >
            {story.chapterHeading}
          </h2>
          <p
            className={`relative z-10 mx-auto mt-6 max-w-2xl rounded-2xl px-4 py-2 text-lg leading-relaxed text-onyx sm:text-xl ${
              medical ? "bg-crystal/80" : "bg-eggshell/80"
            }`}
          >
            {story.chapterBody}
          </p>
        </Reveal>
      </div>

      <div className="relative">
        {story.beats.map((beat, index) => (
          <StoryScene
            key={beat.design}
            beat={beat}
            index={index}
            medical={medical}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className={`relative z-20 mx-auto mb-[-1px] h-24 max-w-[1440px] ${
          medical ? "text-luma-green" : "text-celtic-blue"
        }`}
      >
        <div className="absolute bottom-0 left-1/2 h-24 w-1 -translate-x-1/2 bg-current opacity-40" />
        {/* Fill matches the section behind it, so the dot reads as a hole
            in the route rather than a stray eggshell disc on crystal. */}
        <div
          className={`absolute bottom-0 left-1/2 size-8 -translate-x-1/2 rounded-full border-8 border-current ${
            medical ? "bg-crystal" : "bg-eggshell"
          }`}
        />
      </div>
    </section>
  );
}
