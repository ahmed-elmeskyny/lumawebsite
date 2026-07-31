import type { Metadata } from "next";
import { getFeaturedEditions } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";
import { CollectionNav } from "@/components/product/CollectionNav";

export const metadata: Metadata = {
  title: "Luma Three-Pair Sock Editions",
  description:
    "Discover Color Your Steps and Healthy Shifts: fixed Luma editions with three predetermined designs in each box.",
};

export default function EditionsCollectionPage() {
  const editions = getFeaturedEditions();

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-7 lg:px-12 lg:py-16">
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
        Three pairs. One box.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-onyx/80">
        Each Luma edition brings together three predetermined designs in one
        collectible world. Choose your edition and one size for all three
        pairs.
      </p>
      <CollectionNav current="/collections/editions" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
        {editions.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
