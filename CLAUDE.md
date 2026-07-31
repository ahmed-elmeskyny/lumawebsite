# Luma Website — Claude Code Instructions

Read this file before inspecting, planning, or changing the project.

## Project Goal

Build an original, high-quality e-commerce website for Luma Socks: a
Moroccan direct-to-consumer sock brand centered on creativity, color, and
self-expression.

The central brand message is:

> Wear who you are.

The website may draw strategic inspiration from Aardvark Book Club's
expressive, editorial, and collectible experience, but it must remain an
original Luma design. Never copy Aardvark's code, text, assets, illustrations,
fonts, exact layout, distinctive shapes, or animation choreography.

## Source of Truth

Use information in this order:

1. The user's latest explicit instruction
2. The approved files in `/docs`
3. Live Shopify product, variant, inventory, price, cart, and checkout data
4. Existing implementation

If two sources conflict, stop and report the conflict. Do not silently choose.
Do not invent missing business information.

Read the relevant files before working:

- `/docs/BRAND.md`
- `/docs/PRODUCTS.md`
- `/docs/CONTENT.md`
- `/docs/SITE_BRIEF.md`
- `/docs/REFERENCE_AARDVARK.md`
- `/docs/SHOPIFY.md`
- `/docs/ASSET_MANIFEST.md`
- `/docs/ACCEPTANCE_CRITERIA.md`

## Confirmed Business Rules

- Launch market: Morocco
- Launch language: English
- Currency: Moroccan dirham (MAD)
- Commerce backend: Shopify
- Payment at launch: cash on delivery
- Single-pair price: 80 MAD
- Fixed three-pair edition price: 235 MAD
- Delivery charge: 35 MAD
- Available size ranges: 36–40 and 41–46
- Editions contain three predetermined designs
- Customers cannot build or customize a box
- Shopify is the source of truth for products, variants, inventory, prices,
  carts, checkout, and orders

Never add a card-payment form, Stripe, PayPal, Google Sheets order storage, or
a custom payment flow unless the user explicitly changes these rules.

## Brand and Shopping Principles

- The experience should feel bold, playful, editorial, collectible, and
  recognizably Luma.
- Keep the shopping journey faster and clearer than the reference website.
- Design mobile-first for Moroccan shoppers.
- Show product name, image, price, size selection, COD reassurance, and the
  primary cart action prominently on product pages.
- Treat the rigid box and Luma mascot as important brand assets, not generic
  decoration.
- Use the mascot intentionally. It should guide or reinforce a moment, not
  distract from shopping.
- Use only approved fonts, colors, logos, mascot artwork, sock images, box
  renders, patterns, and copy.
- Never create fake reviews, press mentions, certifications, scarcity,
  discounts, delivery promises, sustainability claims, or product-quality
  claims.

## Motion and Accessibility

- Use motion to support hierarchy, storytelling, and feedback.
- The optional box-opening intro must last no more than 1.2 seconds.
- Show the intro only on a visitor's first relevant visit.
- Respect `prefers-reduced-motion`.
- Do not use scroll-jacking.
- Avoid continuous decorative motion on mobile.
- Navigation, forms, product selection, cart, and checkout must work without
  animation.
- Use semantic HTML, visible keyboard focus, descriptive alt text, sufficient
  contrast, and appropriately sized touch targets.

## Technical Direction

- Current stable Next.js with the App Router
- TypeScript with strict checking
- Tailwind CSS
- `next/image` for website imagery
- `next/font/local` for licensed local fonts
- Motion for React for standard interface motion
- GSAP only if the approved box-opening sequence genuinely requires it
- Shopify Storefront API for storefront commerce
- Shopify-hosted checkout with cash on delivery configured in Shopify
- Zod at untrusted data boundaries
- Vercel for deployment

Never expose Shopify private credentials or Admin API tokens in browser code.
Keep secrets in environment variables and provide only placeholder names in
`.env.example`.

Prefer the smallest reliable dependency set. Do not add libraries that duplicate
existing capabilities.

## Asset Rules

- Audit an asset before using it.
- Prefer transparent production assets and optimized WebP/AVIF delivery copies.
- Preserve the real sock artwork, packaging artwork, colors, proportions, and
  edition contents.
- Do not reconstruct an available product image with CSS or AI.
- Do not stretch, distort, or arbitrarily recolor brand assets.
- Record missing, unsuitable, or unverified files in `/docs/ASSET_MANIFEST.md`.
- Never substitute placeholders without marking them clearly and receiving
  approval.

## Working Method

Work in explicit approval checkpoints:

1. Analyze the reference, assets, content, requirements, and proposed direction.
2. Present wireframes and visual direction without implementing the site.
3. Build the design system, header, hero, and featured editions.
4. Complete and verify the homepage.
5. Build shop, collection, and product pages.
6. Integrate Shopify cart and checkout.
7. Build informational and policy pages.
8. Complete accessibility, responsive, performance, and production QA.

Stop after each checkpoint and wait for the user's approval before continuing.
Do not interpret silence as approval.

Before declaring a checkpoint complete:

- Run formatting, linting, type checking, tests, and a production build.
- Test the affected flow in a real browser.
- Check at 390×844, 1024×768, and 1440×900.
- Check loading, empty, error, and unavailable-product states where relevant.
- Report what changed, what was verified, and any unresolved issue.

## Change Discipline

- Inspect existing files before editing them.
- Preserve unrelated user changes.
- Make small, reviewable changes.
- Do not rewrite working areas without a concrete reason.
- Do not weaken tests, validation, accessibility, or security to make a build
  pass.
- Do not claim that a page, interaction, API, or checkout works unless it was
  actually tested.
- When blocked by missing content, assets, Shopify configuration, credentials,
  or a business decision, stop and ask a precise question.

