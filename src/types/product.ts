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

/**
 * Normalized shape for anything shown in a card grid.
 *
 * `purchasable: false` covers the six designs that exist only inside a
 * fixed edition. They carry no price and no add-to-cart, and link to
 * their edition — never to a product page that does not exist.
 */
export interface CardItem {
  key: string;
  name: string;
  image: ProductImage;
  /** Optional second view revealed on hover (e.g. an open edition box) */
  hoverImage?: ProductImage;
  href: string;
  /** Colour-field key used for the card background */
  fieldKey: string;
  typeLabel: string;
  moodTags?: readonly string[];
  purchasable: boolean;
  /** Purchasable items only */
  handle?: string;
  priceMad?: number;
  inStock?: boolean;
  sizeRanges?: readonly SizeRange[];
  /** Edition-only designs: which edition contains this design */
  editionName?: string;
}

export interface CatalogueProduct {
  /** Stable URL handle, e.g. "color-your-steps" */
  handle: string;
  name: string;
  type: ProductType;
  /** Numeric MAD value; format with lib/money for display */
  priceMad: number;
  shortDescription: string;
  /**
   * Approved full description from docs/CONTENT.md. Optional: designs
   * promoted to standalone sale on 28 July 2026 do not have approved
   * product copy yet, and nothing is invented in its place.
   */
  description?: string;
  /** Approved mood labels from docs/CONTENT.md — editorial metadata only,
   *  never functional filters until Shopify tags exist. */
  moodTags?: readonly string[];
  /** The three predetermined designs — editions only */
  contents?: readonly EditionComponent[];
  sizeRanges: readonly SizeRange[];
  /**
   * PLACEHOLDER availability. Shopify owns live inventory
   * (docs/PRODUCTS.md) — this local flag exists only so the storefront's
   * stock states can be built and reviewed before the Storefront API is
   * connected. It must be replaced by live variant availability and must
   * never be presented as verified stock data.
   */
  inStock: boolean;
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
