import { catalogueProducts } from "@/data/products";
import type { CatalogueProduct } from "@/types/product";

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
