import { catalogueProducts } from "@/data/products";
import type { CardItem, CatalogueProduct } from "@/types/product";

/**
 * Catalogue access boundary.
 *
 * Components must read products only through these functions. When Shopify
 * integration is approved, a Storefront API implementation replaces the
 * local data source behind the same normalized product shape.
 */

export function getFeaturedEditions(): readonly CatalogueProduct[] {
  return catalogueProducts.filter((product) => product.type === "edition");
}

export function getStandaloneProducts(): readonly CatalogueProduct[] {
  return catalogueProducts.filter((product) => product.type === "standalone");
}

export function getAllProducts(): readonly CatalogueProduct[] {
  return catalogueProducts;
}

export function getProductByHandle(
  handle: string,
): CatalogueProduct | undefined {
  return catalogueProducts.find((product) => product.handle === handle);
}

/** Normalizes a sellable product into the shared card shape. */
export function toCardItem(product: CatalogueProduct): CardItem {
  const isEdition = product.type === "edition";
  return {
    key: product.handle,
    name: product.name,
    image: product.cardImage ?? product.image,
    // Editions reveal their open box on hover; the first gallery entry is
    // the open-filled render.
    hoverImage: isEdition ? product.gallery[0] : undefined,
    // Editions lead to their story page, which is also where they sell.
    href: isEdition
      ? `/editions/${product.handle}`
      : `/products/${product.handle}`,
    fieldKey: product.handle,
    typeLabel: product.type === "edition" ? "3-pair edition" : "Single pair",
    moodTags: product.moodTags,
    purchasable: true,
    handle: product.handle,
    priceMad: product.priceMad,
    inStock: product.inStock,
    sizeRanges: product.sizeRanges,
  };
}

/**
 * Every sock design in the catalogue.
 *
 * Most designs are sold as single pairs. A design is edition-exclusive
 * when it appears inside an edition but has no standalone product of its
 * own — currently Watch Your Step and Luma Med Team. Exclusivity is
 * derived from the catalogue rather than hardcoded, so adding a
 * standalone product automatically makes that design purchasable.
 */
export function getAllSockDesigns(): readonly CardItem[] {
  const standalone = getStandaloneProducts();
  const sellableNames = new Set(standalone.map((product) => product.name));

  const editionOnly = getFeaturedEditions().flatMap((edition) =>
    (edition.contents ?? [])
      .filter((component) => !sellableNames.has(component.name))
      .map<CardItem>((component) => ({
        key: `${edition.handle}-${component.name}`,
        name: component.name,
        image: component.image,
        href: `/editions/${edition.handle}`,
        fieldKey: edition.handle,
        typeLabel: "Edition only",
        purchasable: false,
        editionName: edition.name,
      })),
  );

  return [...standalone.map(toCardItem), ...editionOnly];
}
