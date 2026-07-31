# Luma Website Brief

This document defines what the Luma website must achieve, who it serves, what
belongs in the launch experience, and how the main customer journeys should
work.

Use it together with `CLAUDE.md`, `BRAND.md`, `PRODUCTS.md`, and `CONTENT.md`.
Detailed Shopify data rules belong in `SHOPIFY.md`; reference-site analysis
belongs in `REFERENCE_AARDVARK.md`; final testable requirements belong in
`ACCEPTANCE_CRITERIA.md`.

## Status

This document is a review draft until the user approves it.

After approval:

- Treat the launch scope, page hierarchy, and customer journeys as binding.
- Do not add a page, feature, commerce flow, or marketing claim merely because
  it is common on other e-commerce websites.
- If an implementation choice conflicts with this brief or another approved
  source-of-truth document, stop and report the conflict.
- Keep blocked pages and features out of public navigation until their content,
  data, and business rules are approved.

## Project Summary

Create an original, mobile-first storefront for Luma Socks, a Moroccan
direct-to-consumer sock brand built around color, creativity, character, and
self-expression.

The website should turn Luma from a small product catalogue into a recognizable
brand world without making shopping difficult. It should feel bold, playful,
editorial, and collectible while keeping products, sizes, prices, cash on
delivery, and checkout immediately understandable.

The central message is:

> Wear who you are.

The storefront will be custom-built with Next.js and connected to Shopify.
Shopify owns live product, variant, inventory, price, cart, checkout, and order
data. Checkout remains Shopify-hosted and uses cash on delivery at launch.

## Launch Context

| Decision | Approved launch rule |
| --- | --- |
| Market | Morocco |
| Language | English |
| Currency | Moroccan dirham (MAD) |
| Commerce backend | Shopify |
| Payment | Cash on delivery |
| Single-pair price | 80 MAD |
| Fixed three-pair edition price | 235 MAD |
| Delivery charge | 35 MAD |
| Sizes | EU 36–40 and EU 41–46 |
| Edition configuration | Fixed contents; no build-your-own box |
| Edition sizing | One selected size for all three pairs |

The launch catalogue contains six sellable Shopify products:

- Color Your Steps — fixed three-pair edition
- Healthy Shifts — fixed three-pair edition
- Hypno Wave — standalone pair
- Daydream — standalone pair
- Shroom Pop — standalone pair
- Vibe Attack — standalone pair

The six designs inside the two editions are not standalone Shopify products at
launch.

## Business Goals

The launch website should:

1. Establish Luma as a distinctive, credible, original sock brand.
2. Make the two fixed editions feel collectible and giftable without using
   unsupported luxury or quality claims.
3. Help shoppers quickly understand the difference between a standalone pair
   and a three-pair edition.
4. Convert mobile visitors into completed Shopify cash-on-delivery orders.
5. Reduce hesitation around price, size selection, edition contents, delivery
   cost, and payment method.
6. Give Luma a visual and technical foundation that can later support new
   products, collections, languages, campaigns, and regional expansion.

The website should not optimize for visual novelty at the expense of product
understanding or checkout completion.

## Customer Goals

A visitor should be able to:

- Understand what Luma is within the first screen.
- See products and prices without watching an animation.
- Distinguish fixed editions from standalone pairs.
- See exactly which three designs are included in each edition.
- Choose the correct size range with confidence.
- Understand that delivery costs 35 MAD.
- Understand that payment is cash on delivery.
- Add an available Shopify variant to the cart.
- Review and update the cart without losing their selection.
- Continue to Shopify checkout and complete an order.
- Find approved answers about packaging, fixed contents, sizing, and payment.

## Audience

The primary audience is Morocco-based shoppers who use fashion as a form of
self-expression, especially:

- Students and young professionals
- Creatives and visually engaged shoppers
- People who enjoy bold, playful, or unusual accessories
- Gift buyers looking for a presentable three-pair box
- Mobile-first social-media users arriving from Instagram or campaign links

The site should remain welcoming to anyone who likes the products. Do not use
copy or design that implies a visitor is too old, too conventional, or not
fashionable enough for Luma.

### Likely visitor conditions

Design for people who may:

- Arrive directly on a product page from a social post
- Have limited familiarity with Luma
- Browse on a phone and a mobile connection
- Need quick reassurance about cash on delivery
- Compare a 235 MAD edition with an 80 MAD standalone pair
- Be buying for themselves or as a gift
- Need to understand that one size applies to all three pairs in an edition

## Experience Principles

### 1. Identity first, clarity always

Use Luma’s palette, mascot, typography, packaging, patterns, and expressive
copy to create a memorable world. Keep navigation, prices, size choices, cart
actions, and checkout behavior conventional and easy to understand.

### 2. Products remain the heroes

Sock artwork and edition packaging should lead the composition. The mascot and
decorative graphics should guide attention, add character, or support a story
moment—not compete with purchase actions.

### 3. Mobile is the primary design condition

The experience must be designed at mobile width first, not compressed from a
desktop composition. Essential product information and the primary action must
remain visible, legible, and easy to use on small screens.

### 4. Editorial rhythm, not visual chaos

Create energy through controlled color fields, scale changes, type, image
composition, and section rhythm. Avoid using every color, sticker, pattern, and
mascot pose at once.

### 5. Motion supports meaning

Use motion for short reveals, feedback, and storytelling. The optional
box-opening moment must not delay shopping, repeat unnecessarily, or prevent
use by visitors who prefer reduced motion.

### 6. Trust comes from accuracy

Show the real product, live Shopify availability, clear pricing, factual COD
copy, and honest states. Do not use fake reviews, fake scarcity, unsupported
claims, or invented delivery promises to force conversion.

## Reference Direction

Aardvark Book Club may be studied for high-level principles such as:

- Expressive editorial hierarchy
- Strong product storytelling
- Collectible presentation
- Controlled color rhythm
- Characterful transitions
- A distinctive experience around opening or revealing a product

Luma must not copy Aardvark’s code, copywriting, illustrations, fonts, assets,
exact layouts, distinctive shapes, section compositions, or animation
choreography.

Every adapted principle must be translated through Luma’s own socks, rigid
boxes, mascot, colors, typography, patterns, and message. The Luma shopping
journey should be faster and clearer than the reference.

The detailed review and allowed adaptations will be documented separately in
`REFERENCE_AARDVARK.md`.

## Launch Information Architecture

| Route | Purpose | Launch status |
| --- | --- | --- |
| `/` | Introduce Luma, feature editions and products, explain the offer, and lead into shopping | Required |
| `/shop` | Show all six sellable products with clear product-type grouping | Required |
| `/collections/editions` | Show the two fixed three-pair editions | Required |
| `/collections/standalone-socks` | Show the four standalone pairs | Required |
| `/products/[handle]` | Present one live Shopify product and its purchase controls | Required |
| `/our-story` | Explain the approved Luma brand story and mascot-led world | Required |
| `/size-guide` | Explain EU 36–40, EU 41–46, and edition sizing | Required |
| `/faq` | Answer only approved launch questions | Required |
| `/search` | Search live sellable products when a real search control is present | Conditional |
| `/cart` | Review Shopify cart lines, variants, quantities, delivery, and total | Required |
| Shopify checkout URL | Complete the order through Shopify-hosted checkout | Required |
| Not-found page | Recover from an invalid or unavailable route | Required |

Do not create a custom `/checkout` page or a custom order-success route.
Checkout, payment selection, order creation, and confirmation belong to
Shopify.

### Pages blocked pending approved information

These routes may be prepared as unpublished work, but must not appear in public
navigation or be treated as launch-ready until their content is approved:

- Shipping and returns
- Privacy policy
- Terms
- Contact or customer support

Privacy, terms, and the applicable customer policies must be finalized before
the production store accepts real orders.

### Features not required at launch

- Build-your-own boxes
- Mixed-size edition boxes
- Individual listings for edition components
- Customer reviews or ratings
- Customer accounts unless Shopify customer accounts are explicitly enabled
- Wishlist
- Loyalty or referral program
- Subscription purchasing
- Blog or editorial publishing system
- Wholesale portal
- Product comparison
- Card payments or a custom payment form
- Google Sheets order storage
- Advanced mood filtering before Shopify tags or metafields are approved

## Global Navigation

### Announcement bar

Use the approved delivery and COD message from `CONTENT.md`. Keep it concise and
do not add a countdown, sale, free-shipping threshold, or delivery estimate.

### Primary navigation

- Shop
- Editions
- Our story
- Size guide
- FAQ

### Utilities

- Search, only if search is implemented
- Cart, always available and showing an accurate item count
- Account, only if Shopify customer accounts are enabled and tested
- Mobile menu

The logo must return to the homepage. Navigation should remain understandable
without animated labels or hover-only information.

## Homepage Structure

The homepage should follow this content order unless the approved visual
direction provides a documented usability reason to adjust adjacent sections:

1. Announcement bar
2. Responsive navigation
3. “Wear who you are.” hero
4. Featured fixed editions
5. Box-opening and packaging story
6. “Your mood, in three steps” explanation
7. Mood-led discovery
8. Featured standalone pairs
9. Brand-led product-expression section
10. Luma story and mascot moment
11. Customer-content invitation, after the Instagram destination is verified
12. Approved FAQ preview
13. Newsletter, only after provider, consent, and privacy requirements are ready
14. Footer with only active, approved destinations

### Homepage hero

The hero must:

- Lead with “Wear who you are.”
- Explain Luma in one short supporting statement.
- Provide a direct route to shop.
- Offer editions as a clear secondary path.
- Use approved product or packaging imagery.
- Remain usable if motion is disabled or still loading.
- Avoid pushing both primary calls to action below the first useful mobile
  viewport.

The approved combined-editions render is a strong candidate for the visual, but
its exact use should be confirmed during visual-direction review.

### Featured editions

Show Color Your Steps and Healthy Shifts as two distinct, equal choices. Each
card must communicate:

- Edition name
- Fixed three-pair format
- Exact included designs
- Live Shopify price
- Product image
- Link to the correct product page

Do not imply that customers can customize the contents.

### Mood discovery

At launch, mood labels may act as editorial links or visual grouping. Do not
present them as functional filters until approved Shopify tags or metafields
exist and every result has been checked.

### Customer and newsletter sections

Do not show invented customer content. The approved invitation state may be
used only when its Instagram destination is verified.

Do not publish a newsletter form until the provider, data flow, consent copy,
privacy link, success state, and failure state are implemented and approved.

## Shop and Collection Requirements

The main shop must:

- Show all six sellable Shopify products.
- Make editions and standalone pairs visually distinguishable.
- Use live Shopify title, price, availability, handle, and imagery.
- Allow collection grouping without duplicating products.
- Handle loading, empty, error, and sold-out states.
- Avoid unsupported badges such as `Bestseller`, `Limited`, `New`, or `Sale`.

Collection pages must explain the relevant product type before the grid:

- Editions: fixed three-pair boxes with one size for all three pairs
- Standalone socks: one pair in a Luma zipper bag

Sorting may use only the approved options in `CONTENT.md`. Mood filters remain
conditional on approved product data.

## Product Page Requirements

Every product page must make the following easy to find:

- Accurate product gallery
- Product name
- Product type
- Live Shopify price
- Approved mood labels and description
- Two size options: EU 36–40 and EU 41–46
- Quantity control
- Live variant availability
- Delivery charge
- Cash-on-delivery reassurance
- Primary `Add to cart` action
- Relevant size-guide link
- Approved packaging information

Do not preselect a size. A customer must actively choose one before adding the
product to the cart.

### Edition product pages

An edition page must additionally show:

- All three included design names
- A factual image showing the correct three socks
- The correct box artwork
- The fixed-selection rule
- The one-size-for-all-three rule
- Rigid magnetic box packaging

The page adds one edition product variant to the Shopify cart, not three
separate product lines.

### Standalone product pages

A standalone page must make clear that the purchase is one pair and uses the
Luma zipper bag. It must not imply that a rigid edition box is included.

### Mobile purchase area

On mobile, prioritize:

1. Main product image
2. Product name and type
3. Price
4. Size selection
5. Quantity
6. COD and delivery message
7. Add-to-cart action

The action must remain reachable and functional without relying on sticky
behavior. A sticky purchase action may be proposed later only if it does not
hide content, duplicate state confusingly, or interfere with accessibility.

## Cart and Shopify Checkout

The cart must:

- Use Shopify cart data.
- Show the exact product, selected size, quantity, and live line price.
- Let the customer change quantity or remove a line.
- Revalidate availability and totals.
- Preserve the cart across ordinary navigation and recoverable errors.
- Show subtotal, 35 MAD delivery, and total clearly.
- State that payment is cash on delivery.
- Prevent checkout when an item or variant is no longer available.
- Continue to the Shopify-hosted checkout URL.

Do not create orders directly from the storefront, collect payment-card
details, or imitate Shopify checkout.

Shopify checkout must be configured and tested for:

- Morocco as the launch market
- MAD
- Cash on delivery
- Approved delivery charge
- Required customer and delivery fields
- Mobile usability
- Order confirmation

The exact checkout fields, delivery coverage, and operational order workflow
will be defined in `SHOPIFY.md`.

## Core Customer Journeys

### Journey A: buy a fixed edition

1. Arrive on the homepage, an edition collection, or an edition product page.
2. Understand that the product contains three predetermined designs.
3. Inspect the included designs and box.
4. Choose EU 36–40 or EU 41–46 for all three pairs.
5. Add one available edition variant to the cart.
6. Review the product, size, quantity, delivery charge, and total.
7. Continue to Shopify checkout.
8. Complete the cash-on-delivery order through Shopify.

### Journey B: buy a standalone pair

1. Arrive on the homepage, shop, standalone collection, search, or product page.
2. Understand that the item is one pair at 80 MAD.
3. Choose an available size.
4. Add the pair to the cart.
5. Review the order and 35 MAD delivery charge.
6. Continue to Shopify checkout and complete the COD order.

### Journey C: compare product types

1. Arrive without knowing whether to choose a pair or a box.
2. See standalone pairs and fixed editions clearly labeled.
3. Compare 80 MAD for one pair with 235 MAD for a three-pair boxed edition.
4. Open the relevant product page for exact contents and packaging.
5. Continue through the appropriate purchase journey.

### Journey D: resolve size or policy uncertainty

1. Open the size guide, FAQ, or relevant product detail.
2. See the two size ranges and the edition-size rule.
3. Find only approved information about COD, delivery charge, packaging, and
   fixed contents.
4. Use a verified support channel for unresolved questions once that channel is
   approved and published.

## Shopify and Storefront Responsibilities

| Concern | Source of truth |
| --- | --- |
| Brand identity and approved visual rules | `BRAND.md` |
| Approved customer-facing copy | `CONTENT.md` |
| Product relationships and launch catalogue | `PRODUCTS.md` |
| Live product titles and handles | Shopify |
| Live variant availability and inventory | Shopify |
| Live prices and cart totals | Shopify |
| Cart creation and updates | Shopify |
| Checkout, payment selection, order creation, and confirmation | Shopify |
| Storefront presentation and navigation | Next.js storefront |
| Product and packaging assets | Approved asset files and `ASSET_MANIFEST.md` |

When static documentation and live Shopify data conflict on a transactional
value, do not hide the conflict. Use the approved source hierarchy in
`CLAUDE.md` and report the issue.

## Responsive, Accessibility, and Motion Requirements

The launch experience must:

- Work at 390×844, 1024×768, and 1440×900.
- Avoid horizontal overflow and cropped purchase controls.
- Use semantic headings, landmarks, links, buttons, and forms.
- Preserve visible keyboard focus.
- Provide descriptive product alt text and empty alt text for decorative art.
- Use sufficient color contrast and not depend on color alone.
- Use appropriately sized touch targets.
- Announce meaningful cart and validation changes accessibly.
- Respect `prefers-reduced-motion`.
- Keep navigation, product selection, cart, and checkout usable without motion.
- Avoid scroll-jacking and continuous decorative animation on mobile.

The optional box-opening intro may last no more than 1.2 seconds, should be
skipped for repeat visitors, and must have an immediate reduced-motion or
static equivalent.

## Performance and Reliability Direction

- Prioritize the mobile shopping path over decorative effects.
- Optimize and responsively size product and packaging imagery.
- Use local licensed fonts efficiently and avoid loading unused weights.
- Prevent avoidable layout shifts.
- Lazy-load below-fold media.
- Keep critical product and cart controls usable while nonessential media loads.
- Use the smallest reliable dependency set.
- Provide clear loading, empty, unavailable, and error states.
- Preserve the customer’s cart through recoverable storefront errors.
- Do not claim a flow works until it has been exercised in a real browser.

Exact measurable thresholds and the final QA matrix belong in
`ACCEPTANCE_CRITERIA.md`.

## Search and SEO Direction

- Use the approved page titles and descriptions in `CONTENT.md`.
- Generate product metadata from approved copy and live Shopify products.
- Use stable product handles.
- Keep product and collection pages indexable when they are public and ready.
- Do not index unfinished policy, placeholder, preview, or error pages.
- Use descriptive internal links rather than generic `Click here` text.
- Add structured data only when it accurately represents live products,
  variants, prices, availability, and Luma’s actual business information.
- Do not invent ratings, review counts, shipping promises, or organization
  details in structured data.

Search is optional at launch because the catalogue contains only six sellable
products. If implemented, it must search real product data and provide the
approved empty and error states.

## Measurement Direction

The minimum commerce journey to measure is:

- Product viewed
- Size selected
- Product added to cart
- Cart viewed
- Checkout started
- Shopify order completed

Use Shopify’s available commerce reporting as the baseline. Do not add another
analytics, advertising, heatmap, or session-recording provider until its
purpose, consent requirements, and privacy implications are approved.

Do not invent numeric conversion targets before Luma has an approved baseline
or launch objective.

## Asset Priorities

The storefront should use:

- Approved logos and licensed fonts
- Approved Luma mascot poses
- Accurate transparent sock packshots
- Open filled box renders for both editions
- Open empty box renders for both editions
- Closed box renders for both editions
- Box-with-socks compositions for both editions
- Top-down box renders for both editions
- Combined-editions homepage hero
- Approved zipper-bag imagery for standalone packaging

`ASSET_MANIFEST.md` will record final filenames, dimensions, transparency,
roles, optimization status, and missing assets. Do not treat an asset as ready
only because a filename exists.

## Launch Blockers

The following must be resolved before the affected feature or production launch:

- Shopify store and Storefront API configuration
- Final Shopify product, variant, inventory, and SKU setup
- Cash-on-delivery configuration
- Morocco delivery coverage and checkout delivery rules
- Final return, exchange, cancellation, and refund policy
- Customer-support email, phone, WhatsApp, and operating hours
- Legal entity name, business address, and legal contact details
- Privacy policy and terms aligned with the real Shopify setup
- Final product materials, care, and fit claims if those sections will be shown
- Newsletter provider, consent language, and privacy link if newsletter is shown
- Verified Instagram URL if the social or customer-content section is shown
- Final asset audit and optimized delivery versions
- Production-domain and deployment configuration

Missing blocked information must not be replaced with placeholder promises.

## Delivery Checkpoints

Follow the approval sequence in `CLAUDE.md`:

1. Analyze the approved brief, reference, assets, and constraints.
2. Present original Luma wireframes and visual direction without coding.
3. Build the design system, header, hero, and featured editions.
4. Complete and verify the homepage.
5. Build shop, collection, and product pages.
6. Integrate and test Shopify cart and hosted checkout.
7. Build approved information and policy pages.
8. Complete responsive, accessibility, performance, and production QA.

Stop after every checkpoint. Present what changed, browser evidence, test
results, and unresolved issues. Continue only after explicit approval.

## Definition of a Successful Launch Experience

The website is ready to launch only when:

- It looks and feels recognizably Luma rather than like a generic template or an
  Aardvark copy.
- All six sellable products and their relationships are accurate.
- Edition contents, sizes, prices, packaging, and COD messaging are clear.
- Live Shopify data drives products, availability, cart, and checkout.
- A visitor can complete the critical mobile journey from product discovery to
  Shopify order confirmation.
- The site handles unavailable products and recoverable errors honestly.
- Required legal and operational information is approved and published.
- Navigation, forms, product selection, cart, and checkout work without motion.
- Responsive, accessibility, performance, and production checks pass.
- No placeholder, unsupported claim, fake social proof, or unfinished public
  route remains.

## Decisions Intentionally Deferred

Do not resolve these inside the website design:

- Final SKU and component-inventory model
- Whether edition designs will later be sold individually
- Whether mixed-size editions will ever be offered
- Customer-account launch status
- Mood-filter implementation
- Newsletter implementation
- Additional analytics or advertising providers
- Future languages
- Card or online payment methods
- Loyalty, referral, subscription, or wholesale features
- Future Gulf or international storefronts

Each deferred item requires a separate business decision and an update to the
relevant approved document.
