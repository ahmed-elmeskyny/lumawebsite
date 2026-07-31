import { Hero } from "@/components/sections/Hero";
import { FeaturedEditions } from "@/components/sections/FeaturedEditions";
import { BoxExperience } from "@/components/sections/BoxExperience";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MoodDiscovery } from "@/components/sections/MoodDiscovery";
import { StandalonePairs } from "@/components/sections/StandalonePairs";
import { ExpressionBand } from "@/components/sections/ExpressionBand";
import { BrandStory } from "@/components/sections/BrandStory";
import { FaqPreview } from "@/components/sections/FaqPreview";

/**
 * Homepage in the approved section order (docs/SITE_BRIEF.md). The
 * customer-content invitation and newsletter sections are intentionally
 * omitted until the Instagram URL is verified and a newsletter provider
 * with approved consent copy exists.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEditions />
      <BoxExperience />
      <HowItWorks />
      <MoodDiscovery />
      <StandalonePairs />
      <ExpressionBand />
      <BrandStory />
      <FaqPreview />
    </>
  );
}
