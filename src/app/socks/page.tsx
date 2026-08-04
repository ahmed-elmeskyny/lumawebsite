import type { Metadata } from "next";
import Link from "next/link";
import {
  getEditionOnlyDesignNames,
  getStandaloneProducts,
  toCardItem,
} from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { capitalise, spellCount } from "@/lib/text";
import { storeConfig } from "@/config/store";
import { ProductCard } from "@/components/product/ProductCard";
import { GhostType } from "@/components/ui/GhostType";

export const metadata: Metadata = {
  title: "Luma's Socks — Single Pairs",
  description:
    "Every Luma design sold as a single pair. Pick one, choose your size, and let the smallest part of your outfit say the most.",
};

/** All standalone single pairs. Editions live at /editions. */
export default function SocksPage() {
  const products = getStandaloneProducts();
  const editionOnlyCount = getEditionOnlyDesignNames().length;

  return (
    <div>
      <section className="relative overflow-hidden bg-eggshell">
        <GhostType className="-bottom-3 left-0 text-[18vw] text-onyx/8">
          LUMA&rsquo;S SOCKS
        </GhostType>
        <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
          <p className="subtitle text-sm uppercase tracking-[0.16em] text-orange-red">
            One pair, full personality
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.75rem,9vw,5rem)] leading-[0.92] tracking-tight text-onyx">
            Luma&rsquo;s socks.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-onyx/80">
            Every design we sell on its own, {products.length} in total, at{" "}
            {formatMad(storeConfig.pricing.singlePairMad)} each.{" "}
            {capitalise(spellCount(editionOnlyCount))}{" "}
            {editionOnlyCount === 1 ? "more design lives" : "more designs live"}{" "}
            only inside the{" "}
            <Link
              href="/editions"
              className="text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
            >
              editions
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-7 lg:px-12 lg:py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.handle} item={toCardItem(product)} />
          ))}
        </div>
      </div>
    </div>
  );
}
