import type { ProductImage } from "@/types/product";

/**
 * Narrative content for the edition landing pages.
 *
 * DRAFT COPY — written in Luma's voice from the brand owner's story seeds
 * and the actual sock artwork (28 July 2026). Edit freely; nothing here
 * is a factual product, material, or health claim.
 *
 * This is presentation content only. Prices, sizes, and availability come
 * from the catalogue via lib/catalogue.ts, so the Shopify adapter
 * boundary stays clean.
 */

export interface StoryBeat {
  /** Design name — must match a design in the edition's contents */
  design: string;
  /** Short chapter label, e.g. "The arrival" */
  title: string;
  body: string;
  image: ProductImage;
  /** Lifestyle photograph of the design being worn */
  wornImage: ProductImage;
  /** Tailwind background class for this beat's colour field */
  field: string;
}

export interface EditionStory {
  handle: string;
  /**
   * Position in the ongoing edition series. Rendered as "Edition 01",
   * "Edition 02" — the numbering is what tells a first-time visitor these
   * are a growing collection rather than two unrelated products.
   */
  seriesNumber: number;
  /**
   * The single idea the edition is built around, in a few words. Shown
   * next to the box so the theme is readable before anyone opens a story.
   */
  theme: string;
  /** Small label above the hero heading */
  eyebrow: string;
  heroHeading: string;
  heroBody: string;
  /** Hero colour field */
  heroField: string;
  /** True when the hero field is dark and needs light text */
  heroDark: boolean;
  heroImage: ProductImage;
  /** Oversized ghosted word behind the hero */
  ghostWord: string;
  chapterHeading: string;
  chapterBody: string;
  beats: readonly StoryBeat[];
  closingHeading: string;
  closingBody: string;
}

const sock = (slug: string, alt: string): ProductImage => ({
  src: `/assets/products/socks/cutout/sock-${slug}-card.png`,
  alt,
  width: slug === "shroom-pop" ? 362 : 363,
  height: 712,
});

const worn = (slug: string, alt: string): ProductImage => ({
  src: `/assets/products/gallery/sock-${slug}-on-leg.jpg`,
  alt,
  width: 2250,
  height: 2251,
});

export const editionStories: readonly EditionStory[] = [
  {
    handle: "color-your-steps",
    seriesNumber: 1,
    theme: "Art, color and movement",
    eyebrow: "Edition 01 · The first one",
    heroHeading: "Luma was here.",
    heroBody:
      "The very first Luma edition. Three designs that follow one small character out of the ground, across the world, and into everything he touches.",
    heroField: "bg-celtic-blue",
    heroDark: true,
    ghostWord: "ARRIVED",
    heroImage: {
      src: "/assets/editions/luma-color-your-steps-open-filled-v1.png",
      alt: "Color Your Steps open box with Kickflip Luma, Luma Doodle, and Watch Your Step socks",
      width: 1254,
      height: 1254,
    },
    chapterHeading: "Every story starts somewhere.",
    chapterBody:
      "This one starts underground. Read it in order, or just pick the pair that looks most like your day.",
    beats: [
      {
        design: "Watch Your Step",
        title: "The arrival",
        body: "It opens with a hole in the pavement and a trail of footprints heading somewhere. Luma climbs out, plants a sign that reads LUMA WAS HERE, and sets off across the yellow. By the ankle he has already found somewhere to nap. Watch your step — he is around here somewhere.",
        image: sock("watch-your-step", "Watch Your Step socks"),
        wornImage: worn("watch-your-step", "Watch Your Step socks being worn"),
        field: "bg-cyber-yellow",
      },
      {
        design: "Kickflip Luma",
        title: "The run",
        body: "Once he is out, he does not walk. Boards, kickflips, and a green blur moving across white cotton. This is Luma working out that the world is much bigger than the hole he came from — and a lot more fun at speed.",
        image: sock("kickflip-luma", "Kickflip Luma socks"),
        wornImage: worn("kickflip-luma", "Kickflip Luma socks being worn"),
        field: "bg-light-green",
      },
      {
        design: "Luma Doodle",
        title: "The mark",
        body: "Everywhere Luma goes, he leaves something behind: a scribble, a tick, a heart, a question. Luma Doodle is what is left after a character who cannot stop touching things. Look down at the toe — he is still watching you.",
        image: sock("luma-doodle", "Luma Doodle socks"),
        wornImage: worn("luma-doodle", "Luma Doodle socks being worn"),
        field: "bg-crystal",
      },
    ],
    closingHeading: "Three pairs. One arrival.",
    closingBody:
      "Color Your Steps is where Luma turns up and starts changing things. One rigid magnetic box, three designs, one size for all three pairs.",
  },
  {
    handle: "healthy-shifts",
    seriesNumber: 2,
    theme: "Long shifts and the people who work them",
    eyebrow: "Edition 02 · Doctor's orders",
    heroHeading: "Luma takes a shift.",
    heroBody:
      "Three designs for long days, hard rounds, and anyone who spends more hours on their feet than they would like to admit.",
    heroField: "bg-luma-green",
    heroDark: true,
    ghostWord: "ON CALL",
    heroImage: {
      src: "/assets/editions/luma-healthy-shifts-open-filled-v1.png",
      alt: "Healthy Shifts open box with Plus Pulse, Vital Signs, and Luma Med Team socks",
      width: 1254,
      height: 1254,
    },
    chapterHeading: "Some people look after everyone else all day.",
    chapterBody:
      "This edition is for them. Luma puts on the coat, does the rounds, and writes exactly one prescription.",
    beats: [
      {
        design: "Luma Med Team",
        title: "The rounds",
        body: "A whole ward of Lumas: one with a clipboard, one wheeling an X-ray, one behind the wheel of the ambulance. Luma Med Team is the crew that turns up when somebody needs looking after — which, halfway through a twelve-hour shift, is usually you.",
        image: sock("luma-med-team", "Luma Med Team socks"),
        wornImage: worn("luma-med-team", "Luma Med Team socks being worn"),
        field: "bg-crystal",
      },
      {
        design: "Vital Signs",
        title: "The check-up",
        body: "Stethoscopes, syringes, thermometers, tablets — the whole toolkit scattered across deep purple. Vital Signs is the bit where somebody finally stops and asks how you are actually doing.",
        image: sock("vital-signs", "Vital Signs socks"),
        wornImage: worn("vital-signs", "Vital Signs socks being worn"),
        field: "bg-classic-rose",
      },
      {
        design: "Plus Pulse",
        title: "The prescription",
        body: "Quiet teal, a steady grid of plus signs, nothing shouting for once. After the rounds and the check-up, this is the calm one. One pair, worn as often as you like. That is the whole prescription.",
        image: sock("plus-pulse", "Plus Pulse socks"),
        wornImage: worn("plus-pulse", "Plus Pulse socks being worn"),
        field: "bg-light-green",
      },
    ],
    closingHeading: "Three pairs. One long shift.",
    closingBody:
      "Healthy Shifts is Luma's answer for people who spend the day on their feet. One rigid magnetic box, three designs, one size for all three pairs.",
  },
];

export function getEditionStory(handle: string): EditionStory | undefined {
  return editionStories.find((story) => story.handle === handle);
}

/** "Edition 01" — zero-padded so the series reads as a numbered set. */
export function editionLabel(seriesNumber: number): string {
  return `Edition ${String(seriesNumber).padStart(2, "0")}`;
}

/**
 * The number the next edition will carry. Derived, so the "in the works"
 * tile advances on its own when a third edition is added.
 */
export function nextEditionNumber(): number {
  return (
    editionStories.reduce(
      (highest, story) => Math.max(highest, story.seriesNumber),
      0,
    ) + 1
  );
}
