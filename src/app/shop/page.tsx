import type { Metadata } from "next";
import { getAllProducts } from "@/lib/catalogue";
import { ProductCard } from "@/components/product/ProductCard";
import { CollectionNav } from "@/components/product/CollectionNav";

export const metadata: Metadata = {
  title: "Shop Luma Socks and Editions",
  description:
    "Explore Luma standalone socks and fixed three-pair boxes, made for color, character, and self-expression.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-7 lg:px-12 lg:py-16">
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
        Pick your mood.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-onyx/80">
        Explore fixed three-pair editions and standalone designs made for every
        side of you.
      </p>
      <CollectionNav current="/shop" />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
