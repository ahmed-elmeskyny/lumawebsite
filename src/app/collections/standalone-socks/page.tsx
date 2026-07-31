import type { Metadata } from "next";
import { getStandaloneProducts } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";
import { CollectionNav } from "@/components/product/CollectionNav";

export const metadata: Metadata = {
  title: "Standalone Socks | Luma Socks",
  description:
    "Choose one design, pick your size, and let the smallest part of your outfit say the most.",
};

export default function StandaloneCollectionPage() {
  const products = getStandaloneProducts();

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-7 lg:px-12 lg:py-16">
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
        One pair. Full personality.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-onyx/80">
        Choose one design, pick your size, and let the smallest part of your
        outfit say the most.
      </p>
      <CollectionNav current="/collections/standalone-socks" />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
