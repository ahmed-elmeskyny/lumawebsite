import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductByHandle } from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { ProductGallery } from "@/components/product/ProductGallery";
import { PurchasePanel } from "@/components/product/PurchasePanel";
import { Disclosure } from "@/components/ui/Disclosure";

/** Edition-led gallery fields, consistent with the cards. */
const EDITION_FIELDS: Record<string, string> = {
  "color-your-steps": "bg-crystal",
  "healthy-shifts": "bg-classic-rose",
};

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) {
    return {};
  }
  // Approved metadata patterns from docs/CONTENT.md
  const description = product.contents
    ? `Discover ${product.name}, a fixed three-pair Luma edition containing ${product.contents
        .map((component) => component.name)
        .join(", ")
        .replace(/, ([^,]*)$/, ", and $1")}.`
    : `Shop ${product.name} by Luma in EU 36–40 or EU 41–46. Cash on delivery is available in Morocco.`;
  return {
    title: `${product.name} | Luma Socks`,
    description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) {
    notFound();
  }
  const isEdition = product.type === "edition";
  const field = isEdition
    ? (EDITION_FIELDS[product.handle] ?? "bg-eggshell")
    : "bg-luma-white";

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-7 lg:px-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Mobile order: type/moods → name → gallery → purchase info */}
        <div className="lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-onyx/60">
            {isEdition ? "Fixed three-pair edition" : "Single pair"}
            {product.moodTags && (
              <span className="normal-case tracking-normal text-onyx/60">
                {" "}
                · {product.moodTags.join(" · ")}
              </span>
            )}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.5rem,8vw,4rem)] leading-[0.95] tracking-tight text-onyx">
            {product.name}
          </h1>
          <div className="mt-5 lg:hidden">
            <ProductGallery images={product.gallery} field={field} />
          </div>
          <p className="mt-5 text-2xl font-semibold text-onyx">
            {formatMad(product.priceMad)}
          </p>
          {product.description && (
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-onyx/80">
              {product.description}
            </p>
          )}

          <div className="mt-7">
            <PurchasePanel product={product} />
          </div>

          <p className="mt-4 text-sm text-onyx/70">
            {isEdition
              ? "Presented in a Luma rigid magnetic box."
              : "Packed in a Luma zipper bag."}
          </p>
          <Link
            href="/size-guide"
            className="mt-2 inline-block rounded-sm text-sm font-medium text-celtic-blue underline underline-offset-4 hover:text-onyx"
          >
            Size guide
          </Link>

          <div className="mt-8 max-w-xl divide-y divide-onyx/15 border-y border-onyx/15">
            {isEdition && product.contents && (
              <Disclosure summary="Inside the box">
                <p className="text-sm">
                  This edition contains three predetermined designs. Designs
                  cannot be swapped.
                </p>
                <ul className="mt-3 grid grid-cols-3 gap-3">
                  {product.contents.map((component) => (
                    <li key={component.name} className="text-center">
                      <div className="overflow-hidden rounded-xl bg-white">
                        <Image
                          src={component.image.src}
                          alt={component.image.alt}
                          width={component.image.width}
                          height={component.image.height}
                          sizes="(min-width: 1024px) 15vw, 30vw"
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-onyx">
                        {component.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </Disclosure>
            )}
            <Disclosure summary="Delivery and payment">
              <p className="text-sm">
                Delivery is 35 MAD. Payment is cash on delivery, so you pay
                when your order arrives.
              </p>
            </Disclosure>
          </div>
        </div>

        <div className="hidden lg:order-1 lg:block">
          <div className="lg:sticky lg:top-24">
            <ProductGallery images={product.gallery} field={field} />
          </div>
        </div>
      </div>
    </div>
  );
}
