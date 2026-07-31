# Luma Brand

This document is the source of truth for Luma's brand identity on the website.
Use it together with `CLAUDE.md`. Product facts, prices, edition contents, and
commerce rules belong in `PRODUCTS.md` and `SHOPIFY.md`.

## Brand Core

**Brand name:** Luma Socks  
**Display name:** LUMA may be used when the approved logo or art direction calls
for uppercase styling. In normal prose, write Luma.  
**Primary message:** **Wear who you are.**

### Mission

Transform everyday socks into a canvas for creativity and self-expression.
Luma helps people wear their mood, character, and individuality through
comfortable, artistically designed socks.

### Vision

Build a recognizable world of color and self-expression, beginning in Morocco
and growing into a leading creative sock brand across the Middle East.

### Positioning

Luma is a direct-to-consumer sock brand for people who treat socks as part of
their identity, not as an afterthought. It combines expressive designs,
collectible editions, thoughtful packaging, and mascot-led storytelling.

Luma should feel more distinctive than a basic apparel store and easier to shop
than an experimental art website.

## The Central Brand Idea

- Color is a way to express a mood, feeling, or side of your personality.
- Socks are a daily canvas: visible enough to make a statement, easy enough to
  change with your mood.
- Every design should feel like a character or story rather than a generic
  pattern.
- Luma is a growing brand universe, not only a list of collections.
- Future standalone designs and collaborations must fit naturally without being
  forced into an edition.

Do not explain the name Luma as an acronym. Do not use a literal
light, brightness, or illumination origin story unless the user approves a new
brand story.

## Market and Provenance

- The launch market is Morocco.
- The website launches in English and uses MAD.
- Luma's Moroccan origin is authentic provenance, but it is not the sole brand
  idea or a repetitive marketing headline.
- The approved phrase **“Made with color in Morocco”** may be used in a small
  footer, packaging, or brand-story context.
- Do not use national symbols, clichés, or a “Moroccan souvenir” aesthetic
  unless specifically requested.

## Audience

The primary audience is people in Morocco who use fashion to express
themselves, especially students, young professionals, creatives, gift buyers,
and digitally active shoppers who enjoy bold and collectible products.

This direction is not an exclusion rule. Avoid copy that makes customers feel
too old, too conventional, or “not cool enough” for Luma.

## Brand Personality

Luma is:

- Bold, but not aggressive
- Playful, but not childish
- Colorful, but not visually chaotic
- Artistic, but not difficult to understand
- Confident, but not arrogant
- Premium in presentation, but not formal or distant
- Youthful in energy, but not dependent on short-lived slang
- Expressive and a little unexpected, while still trustworthy

When personality conflicts with shopping clarity, preserve clarity and express
the personality through color, imagery, motion, and concise copy.

## Voice and Writing

### Voice principles

- Write in clear, natural English.
- Prefer short, punchy sentences and active verbs.
- Speak directly to the customer using “you” and “your.”
- Sound optimistic, expressive, and self-assured.
- Use humor, emotion, or poetic language in small doses.
- Keep product, sizing, delivery, and checkout copy literal and unambiguous.
- Let the mascot add character without turning every sentence into a joke.

### Good examples

- Wear who you are.
- Pick your mood.
- Three designs. One colorful edition.
- Choose your size and make them yours.
- Your everyday outfit just found its loudest detail.
- Pay when your order arrives.

### Avoid

- Generic luxury language such as “timeless sophistication.”
- Empty superlatives such as “the best socks ever.”
- Corporate phrases such as “innovative lifestyle solutions.”
- Forced youth slang or excessive exclamation marks.
- Infantilizing language.
- Unverified words such as “sustainable,” “medical-grade,” “organic,”
  “handmade,” or “luxury quality.”
- Pressure tactics, fake scarcity, or invented social proof.

### Message hierarchy

1. **Wear who you are.** — master brand message
2. Product or edition names — for example, **Color Your Steps** and
   **Healthy Shifts**
3. Section-level campaign lines — flexible, but must follow this voice
4. **Made with color in Morocco** — supporting provenance line

Edition names and campaign lines must not replace the master brand message
across the whole website.

## The Luma Mascot

The mascot is named **Luma** and is a central brand asset. Luma acts as a
sidekick, guide, and storyteller inside the wider Luma universe.

### Character

Luma is playful, curious, cheeky, expressive, colorful, and occasionally wise.
The character may react to products, point toward an action, reveal a detail,
or support a story moment.

### Usage rules

- Use only approved mascot artwork and poses.
- Preserve the canonical face, eyes, proportions, colors, and line style.
- Match each pose to a clear purpose.
- Keep the mascot secondary to products and buying actions.
- Use the mascot more freely in brand-story, packaging, empty-state, and
  transition moments than in checkout.
- Provide meaningful alt text when the pose communicates information; use empty
  alt text when it is purely decorative.
- Do not redraw, recolor, mirror, crop awkwardly, or generate a new mascot pose
  without approval.
- Do not make Luma a doctor by default. Medical styling belongs to the Healthy
  Shifts edition or another specifically approved context.
- Do not invent a canonical mascot origin story. The final origin story has not
  yet been approved.

## Color System

Use only the approved palette below. Individual pages or sections should use a
controlled subset; do not use every color simultaneously.

| Token | Hex | Recommended role |
| --- | --- | --- |
| Cyber Yellow | `#FDD400` | High-energy accent, selected highlights |
| Celtic Blue | `#1A5EDB` | Strong brand field, links, blue accents |
| Orange Red | `#FE564B` | Energetic accent, illustration detail |
| Luma Green | `#1D987C` | Green brand field, positive accent |
| Rose Pink | `#FD72CC` | Expressive accent, pink brand moments |
| Tangerine | `#FA9359` | Warm supporting accent |
| Light Green | `#A2E07B` | Soft green field |
| Crystal | `#AADDE1` | Cool light background |
| Classic Rose | `#FAD1E1` | Soft pink background |
| Luma White | `#F1F1F1` | Primary light neutral |
| Eggshell | `#F1E7DB` | Warm neutral background |
| Onyx | `#383639` | Primary text and dark neutral |

### Color rules

- Use Onyx as the default text color on light backgrounds.
- Check WCAG contrast for every text/background combination.
- Do not rely on color alone to communicate state.
- Use bright colors as intentional fields or accents, not as random decoration.
- Allow a product's artwork to lead its card or section palette.
- Keep checkout and form states calmer and highly legible.
- Never recolor logos, mascot art, sock artwork, or packaging to fit a layout.
- Do not introduce a new brand color without approval.

## Typography

**Display typeface:** BaileywickJF Gothic  
**Body and interface typeface:** Adelphi PE Variable

### Typography rules

- Use BaileywickJF Gothic for high-impact headlines, short labels, and selected
  editorial moments.
- Use Adelphi PE Variable for body copy, navigation, prices, forms, product
  information, and longer text.
- Keep display headlines short enough to remain legible on mobile.
- Use a clear, restrained type scale rather than many one-off sizes.
- Do not stretch, outline, or distort either typeface.
- Load the licensed local files with `next/font/local`.
- If a required font file is missing or its internal font name differs, record
  the issue in `ASSET_MANIFEST.md`; do not silently substitute another font.

## Logo System

The approved system includes these logical variants:

- Wordmark
- Stacked logo
- Badge
- Icon
- Eyes mark

`ASSET_MANIFEST.md` will map these roles to the final filenames.

### Logo rules

- Use an approved source file, preferably SVG.
- Preserve the logo's proportions, spacing, and approved colors.
- Select the simplest variant that remains clear at the intended size.
- Use the wordmark or stacked logo for primary brand identification.
- Use the icon, eyes, or badge only where the brand is already identifiable or
  space is limited.
- Do not typeset a replacement logo with a similar font.
- Do not add shadows, outlines, gradients, animation, or effects to the logo
  unless an approved asset already contains them.
- Do not invent clear-space or minimum-size measurements. Add those rules only
  when the final logo specifications are documented.

## Graphic Language

Build Luma's visual world from its own products and character:

- Sock-derived patterns and color combinations
- Cuff ribs, stitching, woven texture, and fabric details
- Packaging panels, tabs, folds, and sticker-like labels
- Approved illustration stickers, badge stickers, and tape assets
- Handwritten-style annotations used sparingly
- Bold editorial type, rounded cards, soft shadows, and generous spacing
- Color-blocked sections with a deliberate rhythm

Do not copy Aardvark's exact waves, compositions, typography, illustrations,
transitions, or visual signatures. Any reference-derived idea must be translated
through Luma's products, mascot, packaging, and palette.

## Product and Packaging Imagery

- Product artwork must match the item the customer will receive.
- Use the approved transparent sock packshots and box renders.
- Preserve colors, scale, proportions, logos, patterns, and edition contents.
- Prefer bright, clean, directional product photography with natural-looking
  shadows and enough negative space for responsive layouts.
- Present boxes as premium rigid magnetic packaging, not thin folding cartons.
- Keep product-gallery images factual; reserve imaginative compositions for
  campaign and editorial sections.
- Do not use AI to reconstruct an existing sock, logo, mascot, or box asset.
- Never show a design inside the wrong edition.

## Collection Expression

Each edition may have its own color world and visual mood while remaining
recognizably Luma.

- **Color Your Steps** may feel expressive, broad, and art-led.
- **Healthy Shifts** may use its teal, blue, purple, and medical-inspired visual
  language.
- Edition styling must not override the master logo, core voice, accessibility,
  or shopping clarity.
- Do not make the entire brand medical because one edition uses that theme.

Edition contents and product claims are defined in `PRODUCTS.md`, not here.

## Motion

Motion should make Luma feel alive and collectible:

- Use small mascot reactions, product reveals, hover feedback, and short
  editorial transitions.
- The box-opening moment may be a signature interaction.
- Keep movement smooth, purposeful, and easy to interrupt.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, constant bouncing, excessive parallax, and decorative
  motion that competes with products or calls to action.

## Brand Integrity

Never publish:

- Invented reviews, press logos, partnerships, awards, or customer photos
- Unverified material, comfort, durability, sustainability, or manufacturing
  claims
- Unapproved discounts, scarcity, delivery times, return promises, or guarantees
- New logos, mascot lore, brand colors, or taglines presented as official
- Visuals that materially misrepresent the physical product

When a brand detail is missing, mark it as unresolved and ask for approval
instead of filling the gap.

## Not Yet Canonical

The following are intentionally unresolved and must not be invented:

- The mascot's full origin story
- A community name
- Formal logo clear-space and minimum-size measurements
- Any master tagline other than **Wear who you are.**
- Exact material, construction, comfort, or sustainability claims

