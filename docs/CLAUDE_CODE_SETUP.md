# Luma Website — Claude Code Setup and Checkpoint 1

This document is the exact setup procedure and first implementation prompt for
the Luma storefront.

## Status

This document was approved by the user on 2026-07-28.

After approval:

- Follow the setup in order.
- Give Claude Code only the prompt in **Checkpoint 1 Prompt**.
- Do not ask Claude to build the complete website in one pass.
- Stop after Checkpoint 1 for visual and technical review.

## What Checkpoint 1 Includes

Claude Code may implement:

1. The project scaffold
2. Global design tokens and font fallbacks
3. The announcement bar
4. The responsive header and mobile navigation
5. The homepage hero
6. The two featured-edition cards
7. The minimum typed local catalogue needed by those sections
8. Responsive, accessibility, reduced-motion, lint, type, and build checks

Claude Code must not yet implement:

- The full homepage
- The complete shop grid
- Collection or product-detail pages
- A functional cart
- Checkout
- Shopify API calls or Shopify credentials
- Customer accounts
- Search
- Reviews
- Newsletter submission
- Analytics
- Policy pages
- Deployment

## Required Project Package

The project root must contain:

```text
luma-website/
├── CLAUDE.md
├── docs/
│   ├── BRAND.md
│   ├── PRODUCTS.md
│   ├── CONTENT.md
│   ├── SITE_BRIEF.md
│   ├── REFERENCE_AARDVARK.md
│   ├── LUMA_VISUAL_DIRECTION.md
│   ├── LUMA_ASSET_AUDIT.md
│   └── CLAUDE_CODE_SETUP.md
├── public/
│   └── assets/
│       ├── brand/
│       ├── editions/
│       ├── products/
│       ├── mascot/
│       └── fonts/
└── src/
```

The `src/` directory may be absent before Claude scaffolds the application.

## Asset Placement for Checkpoint 1

Place the approved files at these stable paths before implementation:

```text
public/assets/editions/luma-combined-editions-homepage-hero-v1.png
public/assets/editions/luma-color-your-steps-open-filled-v1.png
public/assets/editions/luma-healthy-shifts-open-filled-v1.png
public/assets/editions/luma-color-your-steps-closed-v1.png
public/assets/editions/luma-healthy-shifts-closed-v1.png
```

Additional approved edition renders may also be copied into
`public/assets/editions/`, but Checkpoint 1 should use only the images that
serve the approved hero and featured-edition layouts.

### Missing brand assets

The official logo files and licensed webfont files are not yet present in the
audited package.

For Checkpoint 1:

- Prefer an official logo if the user adds it before implementation.
- Otherwise render the text wordmark `LUMA` and label it in code as a temporary
  fallback.
- Prefer BaileywickJF Gothic and Adelphi PE Variable only when their licensed
  local files are provided.
- Otherwise use explicit temporary fallbacks through `next/font`, not an
  imitation font downloaded from an unapproved source.
- Keep font and logo replacements isolated so the official assets can be
  installed without redesigning components.
- Report the fallbacks clearly in the checkpoint handoff.

Do not invent, trace, redraw, or generate a replacement logo or mascot.

## Local Catalogue Contract

Shopify is intentionally deferred. Create a small typed local catalogue for
presentation only.

The two records needed in Checkpoint 1 are:

| Handle | Name | Type | Price | Contents |
| --- | --- | --- | ---: | --- |
| `color-your-steps` | Color Your Steps | `edition` | 235 MAD | Kickflip Luma, Luma Doodle, Watch Your Step |
| `healthy-shifts` | Healthy Shifts | `edition` | 235 MAD | Plus Pulse, Vital Signs, Luma Med Team |

Each edition supports the two size ranges:

- `36–40`
- `41–46`

Rules:

- The local data is a temporary display adapter, not a commerce backend.
- Do not invent Shopify IDs, variant IDs, inventory, availability, compare-at
  prices, discounts, or stock badges.
- Store prices as numeric MAD values and format them for display.
- Keep the catalogue interface independent from React components so a future
  Shopify adapter can replace it.
- Featured cards may link to future product paths such as
  `/products/color-your-steps`, but those routes must not be presented as
  completed in this checkpoint.
- Do not create a fake checkout.

## Technical Baseline

Use:

- Current stable Next.js with App Router
- TypeScript in strict mode
- Tailwind CSS
- `next/image`
- `next/font` or `next/font/local`
- Motion for React only when motion improves the approved experience
- ESLint and the package manager already selected by the scaffold

Keep dependencies minimal. Do not add:

- A component library
- A carousel library
- GSAP for this checkpoint
- A state-management library
- A CMS
- Shopify packages
- Analytics packages

Suggested internal structure:

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   └── products.ts
├── lib/
│   ├── cn.ts
│   └── money.ts
└── types/
    └── product.ts
```

Claude may adjust this structure when it has a concrete reason, but it must
keep data, presentation, and reusable utilities separate.

## Environment Rules

Checkpoint 1 requires no secrets.

Claude must not:

- Ask for a Shopify token
- Create a real `.env` file containing credentials
- Commit secrets
- Add Admin API access
- Simulate a Storefront API response

An `.env.example` is unnecessary until Shopify integration unless the existing
scaffold already requires one.

## Checkpoint 1 Prompt

Copy the prompt below into Claude Code from the project root:

```text
We are beginning Checkpoint 1 of the Luma Socks storefront.

Read CLAUDE.md and every approved Markdown file in /docs before planning or
editing. Treat them as authoritative. In particular, read:

- docs/BRAND.md
- docs/PRODUCTS.md
- docs/CONTENT.md
- docs/SITE_BRIEF.md
- docs/REFERENCE_AARDVARK.md
- docs/LUMA_VISUAL_DIRECTION.md
- docs/LUMA_ASSET_AUDIT.md
- docs/CLAUDE_CODE_SETUP.md

CLAUDE.md also names future SHOPIFY.md, ASSET_MANIFEST.md, and
ACCEPTANCE_CRITERIA.md files. They have not been approved or created yet.
Their absence is intentional and is not a blocker for Checkpoint 1. Use
LUMA_ASSET_AUDIT.md as the current asset authority and
CLAUDE_CODE_SETUP.md as the current acceptance gate.

First inspect the current repository, available assets, package files, and git
state. Do not assume the application has already been scaffolded.

Your task is to implement only Checkpoint 1:

1. Scaffold or repair the minimum current-stable Next.js App Router project
   using TypeScript strict mode and Tailwind CSS.
2. Create the foundational Luma design tokens and global styles.
3. Create the factual announcement bar.
4. Create an accessible responsive header and mobile navigation.
5. Create the homepage hero using the approved combined-editions render and
   the approved copy headed “Wear who you are.”
6. Create the two featured-edition cards for Color Your Steps and Healthy
   Shifts using approved imagery, contents, price, and copy.
7. Create only the minimum typed local catalogue required for these sections,
   behind a future Shopify adapter boundary.
8. Implement restrained entrance and interaction motion, with full
   prefers-reduced-motion support.

Use only approved assets and copy. Preserve the exact product artwork and
edition contents. Do not generate or redraw any brand asset.

The official logo and licensed brand font files may be missing. If so, use the
temporary fallbacks explicitly allowed by docs/CLAUDE_CODE_SETUP.md, isolate
them for easy replacement, and report them. Do not download substitute fonts
or invent a logo.

Do not implement the rest of the homepage, shop pages, product pages, a working
cart, checkout, Shopify calls, search, accounts, newsletter submission,
analytics, policy pages, or deployment. Do not invent inventory, discounts,
delivery times, reviews, product claims, or Shopify identifiers.

Before editing, give me:

- A concise audit of what already exists
- The exact files you plan to create or change
- Any blocker that prevents an honest Checkpoint 1

If there is no blocking issue, continue with the implementation without asking
for routine confirmation.

Before handing off:

- Run formatting
- Run lint
- Run TypeScript checking
- Run relevant tests, if present
- Run a production build
- Test the result in a real browser at 390×844, 1024×768, and 1440×900
- Verify keyboard navigation, mobile-menu focus behavior, image loading,
  visible focus, reduced motion, and no horizontal overflow

Then stop. Report:

- What you implemented
- Files created or changed
- Commands and checks run, with their results
- Browser sizes and interactions tested
- Temporary fallbacks used
- Remaining issues
- How I can run the site locally

Do not begin Checkpoint 2 until I explicitly approve Checkpoint 1.
```

## Expected Visual Result

The first checkpoint should show:

- A factual COD announcement bar
- A compact, clear Luma header
- A confident editorial hero with `Wear who you are.`
- The approved combined-editions render as the main product focus
- A visible `Shop Luma` primary action
- An `Explore the editions` secondary action
- Two distinct featured-edition cards
- Real prices and correct edition contents
- Strong mobile composition without hiding the shopping path

It should not look like a finished full store yet.

## Acceptance Gate

Approve Checkpoint 1 only if all of the following are true:

- The first viewport communicates the brand, product, message, and shop path.
- Both editions use the correct products and price.
- No unapproved claims or commerce behavior appear.
- The combined hero and edition images remain undistorted.
- Mobile navigation is keyboard- and touch-accessible.
- The layout has no horizontal overflow at the three required viewport sizes.
- Reduced-motion behavior works.
- Lint, type checking, and production build pass.
- Logo and font fallbacks, if used, are openly documented.
- Claude stops without building later sections.

## After Approval

Only after the user approves the coded result should the project move to
Checkpoint 2: completing and verifying the rest of the homepage.
