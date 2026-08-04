import { Hero } from "@/components/sections/Hero";
import { FeaturedEditions } from "@/components/sections/FeaturedEditions";
import { StandalonePairs } from "@/components/sections/StandalonePairs";
import { ExpressionBand } from "@/components/sections/ExpressionBand";
import { BrandStory } from "@/components/sections/BrandStory";
import { FaqPreview } from "@/components/sections/FaqPreview";

/**
 * Product-led homepage.
 *
 * Hierarchy: products first, then category and price, then the shopping
 * action, then brand personality, then operational information.
 *
 * Intentionally absent: the customer-content invitation (Instagram URL
 * unverified) and a newsletter block (no provider, consent copy, or
 * privacy link yet).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEditions />
      <StandalonePairs />
      <ExpressionBand />
      <BrandStory />
      <FaqPreview />
    </>
  );
}
