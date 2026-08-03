# Luma Website — Codex Instructions

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

## Working Mode (updated 28 July 2026)

The brand owner has confirmed they hold the rights, licences, and business
authority for this store. The earlier draft documents in `/docs` were Luma's
own internal drafts, not external restrictions. They no longer gate the work.

**Default to building.** Add the pages, features, and content a real
e-commerce store needs without asking for approval first. Prioritise, in
order: a website that is genuinely usable, that feels like Luma, and that
sells the products well.

The previous checkpoint-by-checkpoint approval workflow is retired. Work in
whole features, verify them, and report what changed.

### The one rule that stays

Do not state a **specific real-world fact** that nobody has actually
confirmed — a delivery time, a return window, a certification, a legal
entity name, a support phone number, a stock level, a customer review.

This is not a brand-guidelines restriction; it protects Luma from publishing
commitments to customers that may not be true.

When such a value is needed:

- Put it in `src/config/store.ts` with a `TODO` comment
- Use it from there so it can be corrected in one place
- Tell the user which values need confirming

Everything else — layout, copy tone, colour, features, page structure,
marketing language, promotions the owner asks for — is fair game.

## Source of Truth

Use information in this order:

1. The user's latest explicit instruction
2. `src/config/store.ts` for business facts
3. Live Shopify data once connected
4. Existing implementation
5. The `/docs` files as background context

`/docs` records history and intent. It is no longer binding: when it
conflicts with what the user now wants, follow the user and update the doc.

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
- Use the real Luma fonts, colors, logos, mascot artwork, sock images, box
  renders, and patterns. Write new marketing copy freely in Luma's voice.
- Do not fabricate customer reviews, ratings, testimonials, press mentions, or
  certifications — those are other people's words and can't be invented.
- Promotions, discounts, and campaign claims are fine when the owner asks for
  them. Delivery times, return terms, and similar commitments come from
  `src/config/store.ts`.

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

Build complete features and keep moving. Do not stop for approval between
sections, and do not ask permission to add a page, component, or piece of
copy that a normal e-commerce store would have.

Before reporting a piece of work done:

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
- Missing Shopify credentials or a genuinely unknowable business fact are the
  only reasons to stop and ask. Everything else: decide and build.

