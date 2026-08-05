import { Hero } from "@/components/sections/Hero";
import { FeaturedEditions } from "@/components/sections/FeaturedEditions";
import { StandalonePairs } from "@/components/sections/StandalonePairs";
import { ExpressionBand } from "@/components/sections/ExpressionBand";
import { BrandStory } from "@/components/sections/BrandStory";
import { FaqPreview } from "@/components/sections/FaqPreview";

/**
 * Product-led homepage.
 *
 * Order matters here. Single pairs come first because they need no
 * explanation — a sock at 80 MAD is instantly understood, and it lets a
 * new visitor grasp what Luma sells within one scroll.
 *
 * Editions follow, because "edition" is a concept that has to be taught
 * before it can be sold. Leading with the boxes (the previous order) meant
 * the first thing a visitor saw was packaging, with no way to tell what
 * was inside or why it cost three times a single pair. Placing the series
 * after the grid means the reader already knows the designs by the time
 * they are offered three of them in a box.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StandalonePairs />
      <FeaturedEditions />
      <ExpressionBand />
      <BrandStory />
      <FaqPreview />
    </>
  );
}
