# Luma Visual Direction

This document is the implementation-ready visual system for the Luma website.
Use it together with `CLAUDE.md`, `BRAND.md`, `PRODUCTS.md`, `CONTENT.md`,
`SITE_BRIEF.md`, and `REFERENCE_AARDVARK.md`.

## Status

This document is a review draft until the user approves it.

After approval:

- Treat this direction as the visual contract for the first coded checkpoint.
- Preserve product accuracy, shopping clarity, accessibility, and mobile
  usability when making visual decisions.
- Do not introduce an unrelated design system, generic Shopify theme styling,
  or an imitation of Aardvark.
- If a required asset is missing, use an honest labelled placeholder and record
  the missing item. Do not generate a substitute without approval.

## Creative Direction

### Name

**Editorial Sock Playground**

### Summary

Luma should feel like a colorful independent fashion magazine brought to life
as a clear, trustworthy shop. The experience combines oversized editorial
headlines, real sock and packaging imagery, controlled color chapters,
handwritten annotations, and occasional appearances from the Luma mascot.

The products remain the visual heroes. Decorative elements should feel derived
from socks and packaging: ribbing, cuffs, stitches, folded fabric, labels,
edition-box panels, and printed patterns.

The site must not feel like:

- A generic minimal fashion template
- A children's website
- A medical-products store
- A chaotic sticker collage
- A copied book-club website
- A luxury site that hides prices and actions

## First-Viewport Principle

Within the first mobile and desktop viewport, a new visitor should understand:

1. The brand is Luma.
2. Luma sells expressive socks.
3. The main message is **“Wear who you are.”**
4. There is an immediate path to shop.
5. The products are colorful, physical, and real.

The hero should create desire without delaying access to the catalogue.

## Visual Hierarchy

Use this order of emphasis:

1. Real product or packaging image
2. Short display headline
3. Primary shopping action
4. Product name, type, price, and size information
5. Supporting copy
6. Mascot and decorative details

Never allow a mascot pose, annotation, pattern, or animation to compete with a
price, size selector, Add to Cart action, or checkout action.

## Design Tokens

### Color roles

Use the approved palette from `BRAND.md`. These roles organize the palette
without creating new brand colors.

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Primary text | Onyx | `#383639` | Body, headings on light fields, controls |
| Primary neutral | Luma White | `#F1F1F1` | General page background |
| Warm neutral | Eggshell | `#F1E7DB` | Editorial and story sections |
| Cool neutral | Crystal | `#AADDE1` | Calm informational sections |
| Primary action | Celtic Blue | `#1A5EDB` | Main CTA when contrast passes |
| Energy accent | Cyber Yellow | `#FDD400` | Highlights and selected details |
| Warm accent | Orange Red | `#FE564B` | Small emphasis and active details |
| Brand green | Luma Green | `#1D987C` | Positive cues and green chapters |
| Expressive accent | Rose Pink | `#FD72CC` | Product-led or playful moments |
| Supporting warm | Tangerine | `#FA9359` | Warm product fields |
| Supporting green | Light Green | `#A2E07B` | Soft fields and cards |
| Supporting pink | Classic Rose | `#FAD1E1` | Soft fields and cards |

### Color rhythm

- Use one dominant field, one supporting field, and one accent per viewport.
- Alternate expressive sections with quiet neutral sections.
- Let each product's real artwork influence its card background.
- Use color to distinguish editions from standalone pairs.
- Do not recreate a fixed rainbow sequence across the page.
- Do not use color alone to indicate size, availability, selection, or errors.
- Validate all final text and control combinations for WCAG contrast.

### Typography

| Role | Typeface | Direction |
| --- | --- | --- |
| Display | BaileywickJF Gothic | Short, oversized, high-impact headlines |
| Body and interface | Adelphi PE Variable | Navigation, descriptions, price, forms, controls |

Typography behavior:

- Desktop hero headline: approximately `clamp(4.5rem, 9vw, 9rem)`.
- Mobile hero headline: approximately `clamp(3rem, 16vw, 5.25rem)`.
- Major section headline: approximately `clamp(2.5rem, 6vw, 6rem)`.
- Body copy should normally remain between 16 and 20 px.
- Prices and buying information use the interface typeface, not display type.
- Keep line lengths around 45–70 characters for reading content.
- Use tight display leading and comfortable body leading.
- Do not outline, warp, stretch, or animate individual letters continuously.

### Handwritten annotations

Use approved handwritten artwork if available. If a typeface is not approved,
do not add an imitation handwriting font.

Annotations may:

- Point to a product detail
- Label an edition mood
- Emphasize a short phrase
- Connect a mascot reaction to a product

Keep annotations short and decorative. They must not contain essential product,
price, size, payment, or delivery information.

### Shape language

Use:

- Soft rectangles inspired by the rigid edition boxes
- Rounded tags derived from sock labels
- Vertical ribs and repeated stitch marks
- Cuff-like bands at section edges
- Cropped pattern fragments taken from real Luma artwork
- Occasional imperfect editorial underlines or arrows from approved assets

Avoid:

- Excessive pill-shaped controls
- Random blobs unrelated to Luma
- Fake fabric texture over text
- Overlapping shapes that reduce readability
- Aardvark's distinctive frames, outlines, or compositions

### Borders, corners, and shadows

- Product cards may use 16–28 px corner radii depending on size.
- Buttons should use a consistent 10–14 px radius rather than fully rounded
  pills by default.
- Use Onyx borders at low emphasis for separation.
- Prefer subtle product contact shadows over large generic UI shadows.
- Rigid-box images may retain realistic product shadows.

### Spacing and grid

- Mobile horizontal page padding: 16–20 px.
- Tablet horizontal page padding: 28–40 px.
- Desktop maximum content width: approximately 1440 px.
- Desktop horizontal padding: 48–80 px.
- Section spacing should be generous but not force excessive scrolling:
  approximately 72–112 px desktop and 48–72 px mobile.
- Use a 12-column desktop grid and a 4-column mobile grid.
- Maintain a consistent 8 px base spacing rhythm.

## Navigation

### Desktop

- Compact announcement bar above the main header.
- Logo aligned left.
- Primary links centred or placed with clear spacing.
- Search, cart, and menu utilities aligned right.
- Header may begin transparent only when contrast is guaranteed; otherwise use
  a solid neutral field.
- Use a clear cart count when real cart state exists.

### Mobile

- Keep the logo, menu control, and cart visible.
- Use a standard accessible drawer for navigation.
- Do not hide the shop path inside experimental interaction.
- Minimum interactive target: 44 × 44 px.
- Opening the menu must lock background scrolling and return focus correctly.

### Announcement bar

Use only approved factual copy. At the current stage, the safest launch message
is **“Cash on delivery across Morocco.”** Do not include a delivery-time or
free-shipping promise.

## Hero Direction

### Desktop layout

- Use an asymmetrical two-part composition.
- Place **“Wear who you are.”** across roughly 42–50% of the viewport.
- Place the approved combined-editions transparent render across roughly
  50–58%.
- Let selected product imagery slightly break the grid without touching
  navigation or CTAs.
- Include `Shop Luma` as the primary action.
- Include `Explore the editions` as the secondary action.
- Allow one small mascot or annotation moment only if it improves the
  composition.

### Mobile layout

- Show the headline first.
- Keep the support line to two or three short lines.
- Place the primary CTA before or immediately beside the hero image.
- Use a mobile crop that keeps both editions recognizable.
- Do not require scrolling past a full-screen decorative image to reach the
  first action.

### Hero background

Start with Eggshell, Luma White, or another approved light field. Use one bright
accent behind or around the product cluster. Do not place busy patterns behind
small text.

### Hero motion

- Product cluster: short opacity, scale, and vertical entrance.
- Headline: simple grouped reveal, not letter-by-letter animation.
- Total entrance duration: no more than 1.2 seconds.
- Do not delay navigation or button interaction.
- Disable nonessential movement for reduced-motion users.

## Product and Collection Cards

Every card must visibly include:

- Product image
- Product name
- Product type: `3-pair edition` or `Single pair`
- Price
- Approved mood tags when space permits
- Clear action or clickable destination

Card direction:

- Use a product-led color field.
- Keep the full product recognizable without relying on hover.
- Allow a small handwritten annotation or mascot cameo on selected featured
  cards, not every card.
- Desktop hover may add a small lift, image scale, or alternate approved image.
- Mobile cards must be complete without hover.
- Keep price and type visually quieter than the name but immediately readable.
- Do not show unverified sale prices, star ratings, scarcity, or stock messages.

Edition cards should use box imagery and explicitly say `3-pair edition`.
Standalone cards should use the individual sock packshot and say `Single pair`.

## Homepage Section Direction

### 1. Announcement and navigation

Calm, compact, and immediately usable. This section builds trust and orients
the visitor rather than competing with the hero.

### 2. Hero

Use the approved combined-editions composition and central brand message.

### 3. Featured editions

Give Color Your Steps and Healthy Shifts one large editorial card each. Show:

- Closed or filled box render
- Edition name
- Three included design names
- `3-pair edition`
- `235 MAD`
- Link to the edition page

On desktop, the cards may form an offset two-column composition. On mobile,
stack them with complete information.

### 4. Box-opening moment

Use the approved closed and open box assets to show a brief lid reveal. It may
be triggered when the section enters view, but it must:

- Complete within 1.2 seconds
- Run only once per visit
- Have a static open-box fallback
- Use no scroll-jacking
- Stop completely under reduced motion
- Keep the edition link available throughout

### 5. How Luma works

Use three concise steps:

1. Pick your mood.
2. Choose your size.
3. Pay when it arrives.

Use approved mascot poses, sock details, or packaging graphics. Keep the COD
explanation literal.

### 6. Mood-based discovery

Use approved mood tags as navigation into real products. At launch, this can
filter or link to local catalogue entries. It must not imply a personality quiz
or recommendation engine that does not exist.

### 7. Standalone designs

Show the four approved standalone products in a responsive grid or horizontal
mobile rail with visible navigation controls. Do not autoplay the rail.

### 8. Product and fit

Use real close-up assets when available. Until material and construction facts
are confirmed, focus on approved sizing and design presentation rather than
quality claims.

### 9. Brand story

Use the Luma mascot as a guide beside the approved story from `CONTENT.md`.
Allow a quieter Eggshell or Crystal field so the section feels editorial rather
than commercial.

### 10. Customer-content placeholder

Do not fabricate customer posts or reviews. If no approved user content exists,
show an honest invitation such as `Your Luma look could live here.` or omit the
section from production.

### 11. FAQ

Use an accessible accordion with only approved answers. Keep it visually calm.

### 12. Newsletter and footer

Show a newsletter form only when a real collection destination and consent
copy exist. The footer may contain navigation, social links, support details,
legal links, the logo, and `Made with color in Morocco` once each item is real.

## Product Page Direction

### Desktop

Use a two-column layout:

- Left: image gallery with real product and packaging views
- Right: sticky purchase-information column within reasonable bounds

### Mobile above the fold

Keep this sequence:

1. Product type and mood tags
2. Product name
3. Main image
4. Price
5. Size selector
6. Edition contents when relevant
7. Quantity
8. Cash-on-delivery message
9. Add to Cart

The Add to Cart action should be visible quickly, but do not use a sticky
mobile action until its keyboard, safe-area, and content-overlap behavior has
been verified.

### Size selector

- Use two clearly labelled options: `EU 36–40` and `EU 41–46`.
- Show selected, unselected, disabled, focus, and error states.
- Explain that one selected size applies to all three pairs in an edition.
- Do not preselect a size unless the decision is deliberately approved.

### Edition pages

Show the three included designs with their correct names and imagery. Make
`Fixed 3-pair edition` and `One size for all three pairs` explicit.

### Trust information

Near the purchase action, show:

- `Cash on delivery`
- `Delivery: 35 MAD`
- Approved size guidance

Do not add delivery dates, return promises, certifications, quality badges, or
payment logos that are not confirmed.

## Cart Direction

The cart should feel calmer than the editorial homepage.

- Use a Luma White or Eggshell background.
- Show product image, name, type, size, quantity, line price, delivery, and
  total.
- Preserve clear update and remove actions.
- Make `Continue to secure checkout` the primary action only when it correctly
  opens Shopify-hosted checkout.
- Reinforce cash on delivery once, close to checkout.
- Do not reproduce a card-payment form.

## Mascot Usage

Approved high-value uses:

- Hero annotation or reaction
- How-it-works guide
- Brand-story section
- Empty cart or not-found state
- Small edition-specific moment

Limits:

- Avoid repeating the mascot in every section.
- Do not place it behind important text.
- Do not generate new poses without approval.
- Keep medical styling within Healthy Shifts contexts.
- Use decorative empty alt text when the pose carries no information.

## Product Imagery

Use real or approved assets only. Preserve:

- Sock artwork
- Colors
- Logo placement
- Packaging copy
- Box proportions
- Correct contents per edition

Required website asset roles include:

- Combined-editions hero
- Open filled box per edition
- Open empty box per edition
- Closed box per edition
- Box with socks per edition
- Top-down box per edition
- Individual sock packshots
- Logo and mascot variants

Do not crop away the distinguishing design area of a sock. Use `next/image`,
correct intrinsic dimensions, responsive `sizes`, and no layout-shifting image
containers.

## Motion System

Use Motion for React for standard interactions. GSAP is allowed only if the
approved box reveal cannot be implemented cleanly without it.

Allowed:

- Short section entrance
- Product-card lift or image change on hover
- Cart and menu state transitions
- Accordion expansion
- One box-opening reveal
- Small mascot entrance tied to a story moment

Avoid:

- Scroll-jacking
- Long page-intro sequences
- Continuous floating objects on mobile
- Cursor followers
- Marquees containing essential information
- Excessive parallax
- Motion required to discover price or actions
- Repeated autoplay animations

Motion timing:

- Micro-interactions: 120–240 ms
- Section entrances: 300–600 ms
- Box reveal or hero entrance: maximum 1.2 seconds

Respect `prefers-reduced-motion` and keep the complete experience usable with
animation disabled.

## Responsive Rules

- Design and test mobile first at 390 × 844.
- Also verify 1024 × 768 and 1440 × 900.
- No horizontal page overflow.
- Avoid text smaller than 16 px for body and form fields.
- Use responsive image crops instead of shrinking desktop compositions.
- Stack editorial layouts before they become crowded.
- Keep controls thumb-friendly and separated.
- Do not place critical copy inside raster images.
- Respect mobile safe areas for drawers and any sticky controls.

## Accessibility

- Meet WCAG 2.2 AA for contrast and interaction.
- Provide visible keyboard focus.
- Use semantic landmarks and heading order.
- Keep navigation, drawers, accordions, product options, quantity controls, and
  cart actions keyboard accessible.
- Use meaningful alt text for products.
- Do not repeat visible product copy unnecessarily in alt text.
- Use live announcements for meaningful cart changes.
- Keep form labels visible.
- Preserve usability under reduced motion, zoom, and larger text.

## Performance

- Use local licensed fonts and preload only essential weights.
- Use the hero image eagerly; lazy-load below-fold imagery.
- Prefer optimized WebP or AVIF derivatives while retaining PNG masters.
- Reserve image dimensions to prevent layout shift.
- Do not ship every mascot pose or packaging render on the homepage.
- Avoid autoplay video for the box reveal.
- Keep third-party scripts out until a real requirement exists.
- Treat mobile performance as a design constraint, not a final cleanup task.

## Temporary Catalogue Before Shopify

The website may be built before Shopify products are created.

Create one typed local catalogue that mirrors the approved launch structure:

- Stable local handle
- Product name
- Product type
- Approved description and mood tags
- Price in MAD
- Two size ranges
- Edition contents when applicable
- Approved asset paths

The temporary catalogue must not contain:

- Invented Shopify product or variant IDs
- Invented inventory quantities
- Fake availability
- Fake compare-at prices
- Fake discounts
- A working checkout URL

All catalogue access should pass through a small data interface. Page components
must not import raw mock objects throughout the UI. Later, a Shopify-backed
implementation should replace the local provider while preserving the same
normalized product shape.

Until Shopify is connected:

- Add to Cart may work as a clearly labelled local prototype.
- Checkout must remain disabled or clearly identified as unavailable in the
  development checkpoint.
- Do not simulate a completed order.
- Do not publish the storefront as a functioning store.

## First Coded Checkpoint

After this document and the asset audit are approved, build only:

1. Announcement bar
2. Responsive navigation
3. Homepage hero
4. Featured-editions section

The checkpoint must use real approved Luma assets and local catalogue data.
Before review, verify:

- 390 × 844
- 1024 × 768
- 1440 × 900
- Keyboard navigation
- Reduced motion
- No overflow
- Product-image accuracy
- Clear price and product type
- Working navigation interactions
- Production build

Stop after presenting this checkpoint. Do not continue with the rest of the
homepage until the user approves it.

## Approval Checklist

Before approving this direction, confirm:

- The “Editorial Sock Playground” concept feels correct for Luma.
- The hero should use the combined-editions asset.
- The page may alternate bold product-led fields with quiet neutral sections.
- Handwritten annotations remain occasional accents.
- The mascot remains a recurring guide, not the main visual in every section.
- The box reveal remains optional and no longer than 1.2 seconds.
- Shopify integration may be deferred behind a typed local catalogue.

