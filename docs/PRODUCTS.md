# Luma Products

This document is the source of truth for Luma's launch catalogue, product
relationships, sizes, pricing, packaging, and product-data rules.

Use it together with `CLAUDE.md` and `BRAND.md`. Shopify implementation details
belong in `SHOPIFY.md`; customer-facing product stories and final copy belong in
`CONTENT.md`; filenames and asset readiness belong in `ASSET_MANIFEST.md`.

If this document conflicts with live Shopify after Shopify has been approved
and populated, stop and report the conflict. Do not silently change a product,
edition, price, size, or edition component.

## Launch Commerce Rules

| Rule | Confirmed value |
| --- | --- |
| Launch market | Morocco |
| Store language | English |
| Currency | Moroccan dirham (MAD) |
| Payment at launch | Cash on delivery |
| Single-pair price | 80 MAD |
| Fixed three-pair edition price | 235 MAD |
| Delivery charge | 35 MAD |
| Size range 1 | EU 36–40 |
| Size range 2 | EU 41–46 |
| Build-your-own box | Not available |

Prices in website copy should be displayed as `80 MAD`, `235 MAD`, and
`35 MAD`. Shopify remains the transactional source of truth once the products
are configured.

Do not add an unapproved compare-at price, percentage discount, sale badge,
free-shipping threshold, delivery estimate, or scarcity message.

## Launch Catalogue

**Revised 28 July 2026.** The launch catalogue contains **ten** Shopify
products:

- Two fixed three-pair edition boxes
- Eight standalone single-pair socks

Four designs that appear inside the editions are **also sold as single
pairs**: Kickflip Luma, Luma Doodle, Plus Pulse, and Vital Signs.

Only two designs remain **edition-exclusive** and must never be offered as
individual pairs:

- **Watch Your Step** — Color Your Steps only
- **Luma Med Team** — Healthy Shifts only

This supersedes the earlier baseline, in which all six edition designs were
edition-exclusive and the catalogue held six products.

### Fixed editions

| Product | Proposed handle | Contents | Price | Product type |
| --- | --- | --- | ---: | --- |
| Color Your Steps | `color-your-steps` | Kickflip Luma; Luma Doodle; Watch Your Step | 235 MAD | Fixed three-pair box |
| Healthy Shifts | `healthy-shifts` | Plus Pulse; Vital Signs; Luma Med Team | 235 MAD | Fixed three-pair box |

The edition name is **Color Your Steps**, with the final `s`. Do not publish
`Color Your Step` as the product name.

Each edition contains exactly the three designs listed above. Customers cannot
replace, remove, or exchange a design while configuring the product.

### Standalone socks

| Product | Proposed handle | Price | Product type |
| --- | --- | ---: | --- |
| Hypno Wave | `hypno-wave` | 80 MAD | Single pair |
| Daydream | `daydream` | 80 MAD | Single pair |
| Shroom Pop | `shroom-pop` | 80 MAD | Single pair |
| Vibe Attack | `vibe-attack` | 80 MAD | Single pair |
| Kickflip Luma | `kickflip-luma` | 80 MAD | Single pair (also in Color Your Steps) |
| Luma Doodle | `luma-doodle` | 80 MAD | Single pair (also in Color Your Steps) |
| Plus Pulse | `plus-pulse` | 80 MAD | Single pair (also in Healthy Shifts) |
| Vital Signs | `vital-signs` | 80 MAD | Single pair (also in Healthy Shifts) |

The first four are not assigned to either fixed edition. The last four are
sold both individually and as part of their edition; buying the edition does
not change their individual availability.

Approved customer-facing copy (description and mood labels) does not yet
exist for Kickflip Luma, Luma Doodle, Plus Pulse, or Vital Signs. Their
product pages must show only name, type, price, size, and imagery until
`CONTENT.md` is extended.

### Edition components

| Design | Edition | Sale status |
| --- | --- | --- |
| Kickflip Luma | Color Your Steps | Also sold as a single pair |
| Luma Doodle | Color Your Steps | Also sold as a single pair |
| Watch Your Step | Color Your Steps | **Edition-exclusive** — never sold alone |
| Plus Pulse | Healthy Shifts | Also sold as a single pair |
| Vital Signs | Healthy Shifts | Also sold as a single pair |
| Luma Med Team | Healthy Shifts | **Edition-exclusive** — never sold alone |

Edition component names may appear on the edition product page, in image alt
text, in the cart line-item description, and in edition storytelling. They must
not link to nonexistent individual product pages.

## Product Variants and Size Selection

Every sellable product has two customer-facing size variants:

- `EU 36–40`
- `EU 41–46`

Do not show the older labels `S / M / L / XL`.

For a standalone sock, the selected variant determines the size of the pair.

For a fixed edition, the current baseline is one size selection for the entire
box: all three pairs use the selected size range. Do not build a mixed-size box
selector unless the user explicitly approves mixed sizing.

Do not infer availability from a product image. A size is purchasable only when
the corresponding Shopify variant is available under the approved inventory
policy.

## Product Relationships

Treat an edition as its own sellable product, not as a category page pretending
to be a product.

An edition product must:

- Have its own Shopify product record
- Have its own price, variants, inventory state, images, description, URL, cart
  line, and checkout line
- Clearly list all three included designs
- Use only imagery showing the correct box and correct designs
- Add one edition unit to the cart, not three visible standalone products

The website may use collections to organize discovery, but collections do not
change product composition or pricing.

Recommended logical collections:

- `All Products`
- `Editions`
- `Standalone Socks`
- `Color Your Steps`
- `Healthy Shifts`

Mood-based discovery may be implemented later through approved product tags or
metafields. Do not invent mood labels in product data before `CONTENT.md`
defines them.

## Packaging

### Fixed editions

- Packaging type: premium rigid hinged magnetic box
- Confirmed manufacturer size: 200 × 200 × 50 mm
- Each box contains the edition's three predetermined pairs
- Color Your Steps and Healthy Shifts use the same box construction and dieline
- The printed artwork differs by edition

The assembled rigid construction may measure slightly larger externally than
the nominal manufacturer size. Use `200 × 200 × 50 mm` as the approved product
specification unless final supplier measurements replace it.

### Standalone socks

Single-pair orders use the approved Luma zipper bag rather than the rigid
three-pair box.

Do not show a standalone product inside a rigid edition box. Do not imply that a
single-pair purchase includes the premium box.

### Shipping packaging

Outer mailing packaging, packing slips, inserts, and multi-item packing rules
are not yet defined in this document. Do not promise a particular shipping
presentation until those rules are approved.

## Product Information Requirements

Every Shopify product must eventually include:

- Approved product title
- Unique handle
- Product type
- Price
- Two size variants
- Inventory state
- Approved product description
- Accurate product images
- Descriptive alt text
- Packaging type
- Material and care information after confirmation
- Relevant edition relationship
- SEO title and description after content approval

Every fixed-edition product must additionally include:

- The three included design names
- A clear statement that the selection is fixed
- An image showing all three designs
- An image showing the correct box artwork

Do not publish placeholder facts as final product data.

## Materials, Construction, Fit, and Care

The launch-wide material and construction specification is not yet confirmed
for publication.

The Watch Your Step technical pack contains the following working manufacturing
targets:

- Combed ring-spun cotton
- Nylon reinforcement at heel and toe
- Target blend of approximately 75% cotton, 20% nylon, and 5% elastane
- Fine yarn with a 200-needle production target, subject to manufacturer
  confirmation
- Target foot length of approximately 23.0–25.5 cm for EU 36–40
- Target foot length of approximately 25.5–29.5 cm for EU 41–46
- Target leg height of approximately 18 cm for EU 36–40
- Target leg height of approximately 20 cm for EU 41–46
- Target cuff welt of approximately 4–5 cm

These are technical targets for one design, not approved catalogue-wide
customer claims. Do not apply them to every product or publish them on the
website until the manufacturer confirms the final specification for every
relevant design.

The working care guidance in that technical pack is:

- Wash cold at or below 30°C
- Turn inside out before washing
- Do not bleach
- Tumble dry low or air dry
- Do not iron directly on the design

Care copy must be reconciled with final sewn labels and supplier confirmation
before publication.

Do not use `organic`, `sustainable`, `eco-friendly`, `medical-grade`,
`antibacterial`, `compression`, `luxury quality`, or equivalent claims without
documented approval.

## Shopify Identifiers and SKUs

The handles in this document are proposed stable URL handles and may be used
when creating the Shopify catalogue after approval.

A final SKU scheme has not been approved. Do not invent or bulk-create SKUs
until these decisions are made:

- Whether edition boxes are prepacked inventory or assembled from component
  stock
- Whether edition components will also be sold individually
- Whether inventory is tracked per size at the finished-product level
- The official product/style codes for all designs
- The warehouse or fulfillment naming convention

`SHOPIFY.md` will define the approved SKU, inventory, bundle, and fulfillment
model.

## Product Imagery Rules

- Show the exact product and edition the customer will receive.
- Use approved transparent sock packshots and approved box renders.
- Preserve artwork, color, branding, proportions, and edition membership.
- Never place a design in the wrong edition.
- Never use an empty box render as the only image for a filled edition product.
- Make the included designs understandable without relying only on decorative
  campaign imagery.
- Keep campaign compositions separate from factual gallery images.
- Record missing or unsuitable product assets in `ASSET_MANIFEST.md`.

## Availability and Merchandising Rules

- Shopify controls live price, variant availability, inventory, cart, and
  checkout.
- The website must handle available, unavailable-size, sold-out, loading, and
  Shopify-error states.
- Never display invented low-stock counts or `selling fast` messages.
- Never mark a product as a bestseller, new arrival, limited edition, or
  exclusive unless that status is explicitly approved.
- Do not substitute one product when another is unavailable.
- Do not allow checkout for a size Shopify reports as unavailable.

## Not Yet Approved

The following remain unresolved and must not be invented:

- Individual sale of the six designs contained in the fixed editions
- Mixed-size selection inside a fixed edition
- Final SKU and inventory-component model
- Final fiber composition and construction specification for every design
- Final catalogue-wide care instructions
- Product-specific mood tags, design stories, and marketing descriptions
- Product-specific SEO titles and descriptions
- Shipping-package rules for orders containing multiple products
- Any launch discount, bundle saving message, promotion, or free-shipping rule

Resolve these items through explicit user approval, final supplier information,
or the relevant approved project document before implementation.
