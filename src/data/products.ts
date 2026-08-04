import type { CatalogueProduct, ProductImage } from "@/types/product";
import { SIZE_RANGES } from "@/types/product";

/**
 * Local catalogue mirroring the approved launch structure. Names,
 * contents, prices, mood labels, and copy come from docs/PRODUCTS.md and
 * docs/CONTENT.md; asset roles come from docs/ASSET_MANIFEST.md. Do not
 * add records or fields that are not approved.
 *
 * Access this data through lib/catalogue.ts, never directly from
 * components.
 */

const square = (src: string, alt: string): ProductImage => ({
  src,
  alt,
  width: 1254,
  height: 1254,
});

const packshot = (src: string, alt: string): ProductImage => ({
  src,
  alt,
  width: 1080,
  height: 1080,
});

const galleryPhoto = (src: string, alt: string): ProductImage => ({
  src,
  alt,
  width: 2250,
  height: 2251,
});

const cutout = (
  src: string,
  alt: string,
  w: number,
  h: number,
): ProductImage => ({
  src,
  alt,
  width: w,
  height: h,
});

export const catalogueProducts: readonly CatalogueProduct[] = [
  {
    handle: "color-your-steps",
    name: "Color Your Steps",
    type: "edition",
    priceMad: 235,
    shortDescription:
      "Three expressive designs for the days when one mood is not enough.",
    description:
      "Color Your Steps brings together Kickflip Luma, Luma Doodle, and Watch Your Step in one bright, art-led edition. Choose one size for all three pairs and open a box built around color, character, and movement.",
    moodTags: ["Bold", "Playful", "Creative"],
    contents: [
      {
        name: "Kickflip Luma",
        image: cutout(
          "/assets/products/socks/cutout/sock-kickflip-luma-card.png",
          "Kickflip Luma socks, front view",
          363,
          712,
        ),
      },
      {
        name: "Luma Doodle",
        image: cutout(
          "/assets/products/socks/cutout/sock-luma-doodle-card.png",
          "Luma Doodle socks, front view",
          363,
          712,
        ),
      },
      {
        name: "Watch Your Step",
        image: cutout(
          "/assets/products/socks/cutout/sock-watch-your-step-card.png",
          "Watch Your Step socks, front view",
          363,
          712,
        ),
      },
    ],
    // Placeholder until Shopify owns inventory (see types/product.ts)
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: square(
      "/assets/editions/luma-color-your-steps-closed-v1.png",
      "Color Your Steps closed rigid magnetic box",
    ),
    gallery: [
      square(
        "/assets/editions/luma-color-your-steps-open-filled-v1.png",
        "Color Your Steps open box with Kickflip Luma, Luma Doodle, and Watch Your Step socks",
      ),
      square(
        "/assets/editions/luma-color-your-steps-closed-v1.png",
        "Color Your Steps closed rigid magnetic box",
      ),
      square(
        "/assets/editions/luma-color-your-steps-box-with-socks-v1.png",
        "Color Your Steps box with its three sock designs beside it",
      ),
      square(
        "/assets/editions/luma-color-your-steps-top-down-v1.png",
        "Color Your Steps open box seen from above",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-kickflip-luma-on-leg.jpg",
        "Kickflip Luma socks worn on a green studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-luma-doodle-on-leg.jpg",
        "Luma Doodle socks worn on a blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-watch-your-step-on-leg.jpg",
        "Watch Your Step socks worn on a blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-color-your-steps.jpg",
        "Color Your Steps edition material and fit information card",
      ),
    ],
  },
  {
    handle: "healthy-shifts",
    name: "Healthy Shifts",
    type: "edition",
    priceMad: 235,
    shortDescription:
      "A colorful shift for symbols usually seen somewhere more serious.",
    description:
      "Healthy Shifts brings together Plus Pulse, Vital Signs, and Luma Med Team in one medical-inspired edition. Choose one size for all three pairs and let its teal, blue, and purple world do the talking.",
    moodTags: ["Playful", "Clever", "Unexpected"],
    contents: [
      {
        name: "Plus Pulse",
        image: cutout(
          "/assets/products/socks/cutout/sock-plus-pulse-card.png",
          "Plus Pulse socks, front view",
          363,
          712,
        ),
      },
      {
        name: "Vital Signs",
        image: cutout(
          "/assets/products/socks/cutout/sock-vital-signs-card.png",
          "Vital Signs socks, front view",
          363,
          712,
        ),
      },
      {
        name: "Luma Med Team",
        image: cutout(
          "/assets/products/socks/cutout/sock-luma-med-team-card.png",
          "Luma Med Team socks, front view",
          363,
          712,
        ),
      },
    ],
    // Placeholder until Shopify owns inventory (see types/product.ts)
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: square(
      "/assets/editions/luma-healthy-shifts-closed-v1.png",
      "Healthy Shifts closed rigid magnetic box",
    ),
    gallery: [
      square(
        "/assets/editions/luma-healthy-shifts-open-filled-v1.png",
        "Healthy Shifts open box with Plus Pulse, Vital Signs, and Luma Med Team socks",
      ),
      square(
        "/assets/editions/luma-healthy-shifts-closed-v1.png",
        "Healthy Shifts closed rigid magnetic box",
      ),
      square(
        "/assets/editions/luma-healthy-shifts-box-with-socks-v1.png",
        "Healthy Shifts box with its three sock designs beside it",
      ),
      square(
        "/assets/editions/luma-healthy-shifts-top-down-v1.png",
        "Healthy Shifts open box seen from above",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-plus-pulse-on-leg.jpg",
        "Plus Pulse socks worn on a teal studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-vital-signs-on-leg.jpg",
        "Vital Signs socks worn on a blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-luma-med-team-on-leg.jpg",
        "Luma Med Team socks worn on a green studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-healthy-shifts.jpg",
        "Healthy Shifts material and fit information card",
      ),
    ],
  },
  {
    handle: "hypno-wave",
    name: "Hypno Wave",
    type: "standalone",
    priceMad: 80,
    shortDescription: "A graphic rhythm that pulls the eye in.",
    description:
      "Hypno Wave turns a repeating visual rhythm into the detail your outfit will not ignore. Wear it when simple needs a sharper edge.",
    moodTags: ["Bold", "Hypnotic", "Graphic"],
    // Placeholder until Shopify owns inventory (see types/product.ts)
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-hypno-wave.jpg",
      "Hypno Wave socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-hypno-wave-card.png",
      "Hypno Wave socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-hypno-wave.jpg",
        "Hypno Wave socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-hypno-wave-on-leg.jpg",
        "Hypno Wave socks worn on a pale blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-standalone.jpg",
        "Luma sock material and fit information card",
      ),
    ],
  },
  {
    handle: "daydream",
    name: "Daydream",
    type: "standalone",
    priceMad: 80,
    shortDescription: "For wandering minds and colorful plans.",
    description:
      "Daydream brings an easy, imaginative mood to whatever you are wearing. A little escape, one step at a time.",
    moodTags: ["Dreamy", "Chill", "Playful"],
    // Placeholder until Shopify owns inventory (see types/product.ts)
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-daydream.jpg",
      "Daydream socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-daydream-card.png",
      "Daydream socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-daydream.jpg",
        "Daydream socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-daydream-on-leg.jpg",
        "Daydream socks worn on a blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-standalone.jpg",
        "Luma sock material and fit information card",
      ),
    ],
  },
  {
    handle: "shroom-pop",
    name: "Shroom Pop",
    type: "standalone",
    priceMad: 80,
    shortDescription: "A little strange. A lot of fun.",
    description:
      "Shroom Pop leans into the unexpected with a playful mood made to stand out. Wear it when normal feels a little too normal.",
    moodTags: ["Weird", "Playful", "Colorful"],
    // Placeholder until Shopify owns inventory (see types/product.ts)
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-shroom-pop.jpg",
      "Shroom Pop socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-shroom-pop-card.png",
      "Shroom Pop socks, front view",
      362,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-shroom-pop.jpg",
        "Shroom Pop socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-shroom-pop-on-leg.jpg",
        "Shroom Pop socks worn on a neutral studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-standalone.jpg",
        "Luma sock material and fit information card",
      ),
    ],
  },
  {
    handle: "vibe-attack",
    name: "Vibe Attack",
    type: "standalone",
    priceMad: 80,
    shortDescription: "When subtle is not the assignment.",
    description:
      "Vibe Attack brings full-volume energy to the smallest part of your outfit. Let the pair make the first move.",
    moodTags: ["Loud", "Energetic", "Graphic"],
    // Placeholder until Shopify owns inventory (see types/product.ts)
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-vibe-attack.jpg",
      "Vibe Attack socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-vibe-attack-card.png",
      "Vibe Attack socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-vibe-attack.jpg",
        "Vibe Attack socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-vibe-attack-on-leg.jpg",
        "Vibe Attack socks worn on a green studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-standalone.jpg",
        "Luma sock material and fit information card",
      ),
    ],
  },
  {
    handle: "kickflip-luma",
    name: "Kickflip Luma",
    type: "standalone",
    priceMad: 80,
    shortDescription: "The mascot, mid-trick, all over your ankles.",
    // Approved product copy pending: promoted to standalone sale
    // 28 July 2026; docs/CONTENT.md has no description or mood tags yet.
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-kickflip-luma.jpg",
      "Kickflip Luma socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-kickflip-luma-card.png",
      "Kickflip Luma socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-kickflip-luma.jpg",
        "Kickflip Luma socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-kickflip-luma-on-leg.jpg",
        "Kickflip Luma socks worn on a green studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-color-your-steps.jpg",
        "Color Your Steps edition material and fit information card",
      ),
    ],
  },
  {
    handle: "luma-doodle",
    name: "Luma Doodle",
    type: "standalone",
    priceMad: 80,
    shortDescription: "Scribbles, symbols, and a friendly face.",
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-luma-doodle.jpg",
      "Luma Doodle socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-luma-doodle-card.png",
      "Luma Doodle socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-luma-doodle.jpg",
        "Luma Doodle socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-luma-doodle-on-leg.jpg",
        "Luma Doodle socks worn on a blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-color-your-steps.jpg",
        "Color Your Steps edition material and fit information card",
      ),
    ],
  },
  {
    handle: "plus-pulse",
    name: "Plus Pulse",
    type: "standalone",
    priceMad: 80,
    shortDescription: "A quiet grid of plus signs in cool teal.",
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-plus-pulse.jpg",
      "Plus Pulse socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-plus-pulse-card.png",
      "Plus Pulse socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-plus-pulse.jpg",
        "Plus Pulse socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-plus-pulse-on-leg.jpg",
        "Plus Pulse socks worn on a teal studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-healthy-shifts.jpg",
        "Healthy Shifts material and fit information card",
      ),
    ],
  },
  {
    handle: "vital-signs",
    name: "Vital Signs",
    type: "standalone",
    priceMad: 80,
    shortDescription: "Medical-inspired icons on deep purple.",
    inStock: true,
    sizeRanges: SIZE_RANGES,
    image: packshot(
      "/assets/products/socks/sock-vital-signs.jpg",
      "Vital Signs socks, front view",
    ),
    cardImage: cutout(
      "/assets/products/socks/cutout/sock-vital-signs-card.png",
      "Vital Signs socks, front view",
      363,
      712,
    ),
    gallery: [
      packshot(
        "/assets/products/socks/sock-vital-signs.jpg",
        "Vital Signs socks, front view",
      ),
      galleryPhoto(
        "/assets/products/gallery/sock-vital-signs-on-leg.jpg",
        "Vital Signs socks worn on a blue studio background",
      ),
      galleryPhoto(
        "/assets/products/gallery/info-card-healthy-shifts.jpg",
        "Healthy Shifts material and fit information card",
      ),
    ],
  },
];
