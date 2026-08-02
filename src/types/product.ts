/**
 * Local catalogue types for the pre-Shopify display adapter.
 *
 * These mirror the approved launch structure in docs/PRODUCTS.md. They
 * intentionally contain no Shopify IDs, variant IDs, inventory, or
 * availability fields: Shopify becomes the source of truth for those when
 * the Storefront API adapter replaces the local data provider.
 */

export const SIZE_RANGES = ["EU 36–40", "EU 41–46"] as const;

export type SizeRange = (typeof SIZE_RANGES)[number];

export type ProductType = "edition" | "standalone";

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** One predetermined design inside a fixed edition. */
export interface EditionComponent {
  name: string;
  image: ProductImage;
}

export interface CatalogueProduct {
  /** Stable URL handle, e.g. "color-your-steps" */
  handle: string;
  name: string;
  type: ProductType;
  /** Numeric MAD value; format with lib/money for display */
  priceMad: number;
  shortDescription: string;
  /** Approved full description from docs/CONTENT.md */
  description: string;
  /** Approved mood labels from docs/CONTENT.md — editorial metadata only,
   *  never functional filters until Shopify tags exist. */
  moodTags?: readonly string[];
  /** The three predetermined designs — editions only */
  contents?: readonly EditionComponent[];
  sizeRanges: readonly SizeRange[];
  /** Primary card/grid image */
  image: ProductImage;
  /**
   * Optional transparent cutout used on colour-field cards. Derived from
   * `image` by a background-removal pass — the original photograph is
   * never modified. Falls back to `image` when absent.
   */
  cardImage?: ProductImage;
  /** Product-page gallery, primary view first */
  gallery: readonly ProductImage[];
}
