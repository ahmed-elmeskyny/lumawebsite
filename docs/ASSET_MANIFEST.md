# Luma Website Asset Manifest

**Status:** Review draft — awaiting user approval
**Audit date:** 28 July 2026
**Supersedes:** the asset-availability sections of `LUMA_ASSET_AUDIT.md`
(that document predates the logo, mascot, sticker, animation, font, and
standalone-sock files now present in `public/assets/`; its packaging geometry,
optimization rules, and checkpoint rules remain valid)
**Related sources:** `CLAUDE.md`, `BRAND.md`, `PRODUCTS.md`, `CONTENT.md`,
`SITE_BRIEF.md`, `REFERENCE_AARDVARK.md`, `LUMA_VISUAL_DIRECTION.md`,
`CLAUDE_CODE_SETUP.md`

Audit method: every file in `public/assets/` was inspected programmatically
(dimensions, color mode, alpha channel, frame count, font tables) and
visually (rendered contact sheets, GIF frame extraction, font specimens).
No file was renamed, moved, converted, modified, or deleted.

---

## 1. Executive Readiness Conclusion

The asset package is now **substantially complete for Checkpoint 1 and most
of the homepage**. The two gaps that previously blocked a brand-accurate
checkpoint — logos and fonts — are now partially closed:

- **Logos: ready.** A complete five-variant SVG logo system (wordmark,
  stacked, badge, icon, eyes) exists in multiple approved colorways. All
  files are clean vector SVGs with outlined text and no security concerns.
- **Display font: ready with caveats.** `BaileywickGothicJF.woff` loads and
  renders correctly as a single Medium-weight display face.
- **Body font: BLOCKED.** `Adelphi PE VF All.woff` is **not actually a
  variable font** despite its name. It contains no `fvar` table and renders
  as a single Thin/Hairline (~weight 100) instance. It is unusable for body,
  navigation, price, and form text at 16–20 px. A correct Adelphi PE
  Variable file (or static Regular/Medium/Bold instances) is required.
- **Product imagery: ready.** All ten sock packshots (six edition components
  plus the four standalone products) now exist as consistent 1080×1080
  white-background mockups, and the full eleven-file transparent edition
  render set is verified.
- **Mascot and stickers: ready.** Nine mascot poses and 24 sticker SVGs are
  clean, consistent, and production-usable.
- **Animations: reference only.** The four GIFs are brand-direction
  references. Two are far too heavy to ship (30.7 MB and 13.2 MB), all four
  have baked-in backgrounds and no transparency, and one contains an
  unapproved tagline. None should be embedded on the website as-is.

**Go/no-go:** Checkpoint 1 (announcement bar, header, hero, featured
editions) can proceed on approved assets, using the documented `next/font`
fallback for Adelphi only. Web-embedding licence confirmation for both fonts
and a proper Adelphi weight set are the only asset-level blockers to a fully
brand-accurate storefront.

---

## 2. Folder-by-Folder Inventory

Actual layout note: `CLAUDE_CODE_SETUP.md`'s required tree (`brand/`,
`editions/`, `products/`, `mascot/`, `fonts/`) matches what exists. There are
no `brand/animations`, `brand/stickers`, or `brand/logos` subfolders; logos,
stickers, animations, and two print-collateral JPGs all sit flat inside
`public/assets/brand/`. A tidier structure is proposed in Section 11 but no
file has been moved.

### 2.1 `public/assets/brand/` — logos (14 files, all SVG)

All logo SVGs are pure vector paths (text fully outlined), single flat
colorways per file, no scripts, no embedded rasters, no external references.
SVG has no intrinsic pixel size; viewBox ratios are given instead.

| File | viewBox (ratio) | Colorway | What it is |
| --- | --- | --- | --- |
| `logo-wordmark-blue.svg` | 710.55 × 159.03 (≈4.5:1) | Celtic Blue | One-line "LUMA SOCKS" hand-lettered wordmark, **includes an ® symbol** |
| `logo-wordmark-white.svg` | same | White | Same artwork |
| `logo-wordmark-yellow.svg` | same | Cyber Yellow | Same artwork |
| `logo-icon-blue.svg` | 482.56 × 484.71 (≈1:1) | Celtic Blue | Two-line stacked "LUMA / SOCKS" lettering block |
| `logo-icon-white.svg` | same | White | Same artwork |
| `logo-icon-yellow.svg` | same | Cyber Yellow | Same artwork |
| `logo-stacked-blue.svg` | 462.86 × 630.79 (≈3:4) | Blue outline + white fill | Walking mascot above "LUMA SOCKS" lettering |
| `logo-stacked-white.svg` | same | White line art | Same artwork, monochrome |
| `logo-stacked-yellow.svg` | same | Yellow line art | Same artwork, monochrome |
| `logo-badge-blue.svg` | 771.18 × 773.7 (≈1:1) | Blue outline + white fill | Circular stamp: walking mascot, "LUMA SOCKS" arc above, "WEAR YOUR MOOD" arc below, asterisk stars |
| `logo-badge-green.svg` | same | Luma Green line art | Same artwork, monochrome |
| `logo-badge-white.svg` | same | White line art | Same artwork, monochrome |
| `logo-badge-yellow.svg` | same | Yellow line art | Same artwork, monochrome |
| `logo-eyes-blue.svg` | 431.64 × 464.72 (≈1:1) | Celtic Blue | Abstract mascot face mark: two eyes, one brow, smile |
| `logo-eyes-dark.svg` | same | Onyx-dark | Same artwork |
| `logo-eyes-white.svg` | same | White | Same artwork |
| `logo-eyes-yellow.svg` | same | Cyber Yellow | Same artwork |

Notes:

- **Confirmed decision (user, 28 July 2026):** LUMA is a registered
  trademark. The supplied official wordmark containing the ® symbol is
  approved for public website use, and the header must use the official
  wordmark rather than any temporary icon-only substitute.
- The badge contains the phrase **"WEAR YOUR MOOD"** as artwork. This is not
  the approved master message ("Wear who you are.") and not an approved
  copy line in `CONTENT.md`. Using the badge as supplied artwork is fine
  once approved; never retype "Wear your mood" as website copy.
- The `-blue` badge and stacked files are larger than their siblings because
  they are two-color (blue outline + white fill); the other colorways are
  single-color line art intended for colored backgrounds.

### 2.2 `public/assets/brand/` — stickers (24 files, all SVG)

Filenames follow `Luma Socks - Stickers  (NN).svg` (note the double space).
Numbering runs 11–34; files 1–10 were never supplied (naming artifact of a
bulk export, not missing content). All are die-cut-style stickers with a
white outline border, transparent background, pure vector, no text elements.

| # | Depicts | Color |
| --- | --- | --- |
| 11 | "LUMA SOCKS" wordmark sticker (die-cut) | Blue on white |
| 12 | Stacked "LUMA / SOCKS" lettering on rounded sticker | Blue on Cyber Yellow |
| 13 | Arch badge: walking mascot + "LUMA SOCKS" | Yellow/blue |
| 14 | Rounded-square edition sticker: mascot in splash, circular text **"LUMA SOCKS · COLOR YOUR STEPS"** | Blue/Crystal |
| 15 | Heart outline | Yellow |
| 16 | Circular refresh/repeat arrow | Pink |
| 17 | Sock outline | Yellow |
| 18 | Smiley face | Green |
| 19 | Double exclamation "!!" | Green |
| 20 | Checkmark | Green |
| 21 | Paper plane | Green |
| 22 | Sun | Yellow |
| 23 | Star outline | Yellow |
| 24 | Question mark | Pink |
| 25 | X mark | Orange |
| 26 | Spiral squiggle | Orange |
| 27 | Asterisk | Orange |
| 28 | Sparkle burst | Yellow |
| 29 | Exclamation mark | Purple |
| 30 | Checkmark | Pink |
| 31 | Speech bubble | Purple |
| 32 | Lightning bolt | Purple |
| 33 | Eyeglasses | Purple |
| 34 | Envelope | Purple |

Technical notes:

- Sticker (14) has stray root `width`/`height` attributes (142.52 × 137.46
  and similar) inconsistent with its viewBox; harmless when CSS controls
  sizing, worth normalizing during the later optimization pass.
- The spaces and parentheses in the filenames are URL-hostile. A rename
  mapping is proposed in Section 11; no file has been renamed.

### 2.3 `public/assets/brand/` — animations (4 GIF files)

All four are 1920 × 1080, palette-mode GIFs with **opaque baked-in
backgrounds (no transparency)**, infinite loop.

| File | Size | Frames / duration | Content |
| --- | --- | --- | --- |
| `luma socks animation (2).gif` | 519 KB | 3 frames / 1.5 s | Sticker collage stop-motion: mascot stickers and logo stickers rearranging on Orange Red background with tonal "LUMA SOCKS" pattern |
| `luma socks animation (5).gif` | 231 KB | 3 frames / 2.4 s | Brand-color slideshow: wordmark and mascot alternating across Cyber Yellow, Celtic Blue, Orange Red, Luma Green, Tangerine panels with sock photo at bottom |
| `luma socks animation (7).gif` | **30.67 MB** | 177 frames / 3.54 s | Mascot skates in, headline **"We are Delivering Happiness"** draws on, "LUMA SOCKS" tape label pops in; light gray background |
| `luma socks animation (9).gif` | **13.16 MB** | 401 frames / 8.02 s | Sock icon → walking mascot → "LUMA SOCKS" lockup reveal sequence on Celtic Blue with tonal pattern background |

Content flag: **"We are Delivering Happiness"** in (7) is not an approved
tagline (`BRAND.md`: no master tagline other than "Wear who you are.").
This animation must not appear on the website with that copy.

### 2.4 `public/assets/brand/` — print collateral (2 JPG files)

| File | Dimensions | Size | Content |
| --- | --- | --- | --- |
| `Socks Band-01.jpg` | 3071 × 827 | 643 KB | Printed sock-band (wrap label) layout: wordmark panel, quality-seal icons, "COLOR WALKS / Color Your Steps" panel with care icons, **"FITS SIZES 38–42"**, "@LumaSocks", "lumasocks.ma" |
| `Thank you Card-01.jpg` | 756 × 756 | 287 KB | Post-purchase thank-you card: "You officially have great taste!", Color Your Steps sticker, QR code ("scan me for surprises"), "#luma_socks", "@luma_socks", "lumasocks.ma" |

These are **manufacturing/print references, not website assets**. They
contain several conflicts with the approved documents (Section 12) and
should be relocated out of `public/` during the approved reorganization.

### 2.5 `public/assets/mascot/` (9 files, all SVG)

All are the same canonical walking-sock character in different poses and
brand colorways, die-cut sticker style with white outline, transparent
background, clean vector. Roughly 1:1.2 portrait ratios (~94–126 units wide).

| File | Pose / expression | Color |
| --- | --- | --- |
| `luma-flex-blue.svg` | Striding forward, determined fist-up flex | Blue outline, white fill |
| `luma-flower-green.svg` | Standing, holding a flower, shy giggle | Green |
| `luma-paint-pink.svg` | Holding paintbrush and palette | Pink |
| `luma-peace-red.svg` | Winking, peace sign | Red/coral |
| `luma-pizza-peach.svg` | Happily eating a pizza slice | Peach/Tangerine |
| `luma-sit-wave-white.svg` | Sitting on the ground, waving | Light blue/white |
| `luma-skate-yellow.svg` | Riding a skateboard | Yellow |
| `luma-sleep-purple.svg` | Curled up asleep, "Zzz" | Purple |
| `luma-wave-blue.svg` | Seated lean-back, big friendly wave | Blue |

Notes: `luma-pizza-peach.svg` has the same stray root width/height quirk as
sticker (14). No pose is medical-styled, so the `BRAND.md` "no doctor
mascot by default" rule is automatically satisfied; Healthy Shifts-specific
mascot styling exists only inside that edition's box artwork.

### 2.6 `public/assets/fonts/` (2 files, both WOFF v1)

| File | Family (name table) | Style | Weight class | Glyphs | Verdict |
| --- | --- | --- | --- | --- | --- |
| `BaileywickGothicJF.woff` | BaileywickGothicJF | Medium (only style) | 550 | 211 | Usable single-weight display face; renders correctly |
| `Adelphi PE VF All.woff` | "Adelphi PE VF All" / typographic family "Adelphi PE Variable" | "All" | **100** | 2137 | **Defective for purpose** — see below |

Adelphi findings (verified via font tables and rendered specimen):

- **No `fvar` table** — the file is a static single instance, not the
  variable font its name claims.
- It renders as a **Thin/Hairline** weight, matching its usWeightClass of
  100. At body sizes (16–20 px) it is too light for readable, accessible
  interface text.
- An `FFTM` table shows the file passed through FontForge — it appears to be
  a converted/flattened export, not the original licensed webfont.
- Rich glyph set (2137 glyphs, full Basic Latin plus extended coverage), so
  the correct family would serve Luma well once supplied.

Licensing flags (both fonts):

- Adelphi `fsType = 4` (preview-and-print embedding only) and Baileywick
  `fsType = 260` (bitmap + preview-and-print only). Neither file's embedding
  bits permit web use as flagged. `BRAND.md` requires licence confirmation;
  it is still outstanding for both families.
- Baileywick's basic Latin coverage is complete (verified incl. digits,
  punctuation, `–` and `·` used in approved copy).

Both files are WOFF1; WOFF2 derivatives should be produced (or requested
from the foundries) before production for meaningful size savings.

### 2.7 `public/assets/products/socks/` (10 files, all JPEG)

All ten are 1080 × 1080 JPEGs, RGB, no transparency, showing a folded pair
on a black retail display hanger against a white studio background —
a consistent set. Artwork inspected and matches each product name.

| File | Size | Product | Catalogue role (`PRODUCTS.md`) |
| --- | --- | --- | --- |
| `sock-daydream.jpg` | 188 KB | Sky-blue clouds design | Standalone (80 MAD) |
| `sock-hypno-wave.jpg` | 220 KB | Black/mint hypnotic swirl | Standalone (80 MAD) |
| `sock-shroom-pop.jpg` | 174 KB | White/red mushroom stripes | Standalone (80 MAD) |
| `sock-vibe-attack.jpg` | 279 KB | Black neon-graffiti lettering | Standalone (80 MAD) |
| `sock-kickflip-luma.jpg` | 273 KB | White/green skating-mascot pattern | Color Your Steps component |
| `sock-luma-doodle.jpg` | 226 KB | Blue doodle icons, mascot face on toe | Color Your Steps component |
| `sock-watch-your-step.jpg` | 253 KB | Yellow with mascot and footpath | Color Your Steps component |
| `sock-plus-pulse.jpg` | 229 KB | Teal plus/x medical-inspired pattern | Healthy Shifts component |
| `sock-vital-signs.jpg` | 236 KB | Purple medical-icons pattern | Healthy Shifts component |
| `sock-luma-med-team.jpg` | 223 KB | Teal med-team characters | Healthy Shifts component |

This resolves the "standalone imagery missing" blocker in
`LUMA_ASSET_AUDIT.md` §8: all four standalone products now have imagery.
These are white-background mockups, not transparent cutouts — use inside
controlled white/near-white frames, per the existing audit rule. Do not
present them as transparent packshots without a reviewed cutout pass.

### 2.8 `public/assets/editions/` (11 files, all PNG)

All verified RGBA with genuine active alpha. Matches `LUMA_ASSET_AUDIT.md`
§3 exactly (dimensions and sizes reconfirmed).

| File | Dimensions | Size |
| --- | --- | --- |
| `luma-color-your-steps-open-empty-v1.png` | 1254 × 1254 | 915 KB |
| `luma-color-your-steps-open-filled-v1.png` | 1254 × 1254 | 1.81 MB |
| `luma-color-your-steps-closed-v1.png` | 1254 × 1254 | 1.01 MB |
| `luma-color-your-steps-box-with-socks-v1.png` | 1254 × 1254 | 1.08 MB |
| `luma-color-your-steps-top-down-v1.png` | 1254 × 1254 | 1.42 MB |
| `luma-healthy-shifts-open-empty-v1.png` | 1254 × 1254 | 937 KB |
| `luma-healthy-shifts-open-filled-v1.png` | 1254 × 1254 | 1.24 MB |
| `luma-healthy-shifts-closed-v1.png` | 1254 × 1254 | 1.40 MB |
| `luma-healthy-shifts-box-with-socks-v1.png` | 1254 × 1254 | 979 KB |
| `luma-healthy-shifts-top-down-v1.png` | 1254 × 1254 | 1.36 MB |
| `luma-combined-editions-homepage-hero-v1.png` | 1536 × 1024 | 1.53 MB |

Visual verification: box contents match `PRODUCTS.md` (Color Your Steps
shows Kickflip Luma, Luma Doodle, Watch Your Step; Healthy Shifts shows
Plus Pulse, Vital Signs, Luma Med Team). Rigid magnetic construction with
real board thickness is visible, as required.

Baked-in artwork copy observed on the renders (part of the physical
packaging design, acceptable as imagery, **never to be retyped as website
copy**): "STEP INTO YOUR MOOD", "LIFE'S TOO SHORT FOR BORING SOCKS",
"FIRST EDITION" (Color Your Steps); "HAPPY FEET HEALTHY SHIFTS", "ALL-SHIFT
COMFORT + ALL-DAY SUPPORT", "Doctor approved. Nurse tested. Feet happy."
(Healthy Shifts). See Section 12 for the conflicts this creates.

---

## 3. Logo Usage Map

| Placement | Primary file | Notes |
| --- | --- | --- |
| Main navigation (light header) | `logo-wordmark-blue.svg` | ≈4.5:1 ratio suits a compact header; render ~120–160 px wide |
| Main navigation (narrow mobile, if the wordmark gets cramped) | `logo-icon-blue.svg` | Square stacked lettering; still clearly "LUMA SOCKS" |
| Footer on dark/colored field | `logo-stacked-white.svg` or `logo-wordmark-white.svg` | Stacked variant gives the footer a mascot moment |
| Favicon / app icon | `logo-eyes-blue.svg` (source) | Simplest mark; legible at 16–32 px where lettering fails. Derive .ico/PNG sizes in the optimization pass |
| Light backgrounds generally | `-blue` variants | Blue passes contrast on Luma White, Eggshell, Crystal |
| Dark or saturated color fields | `-white` variants | Yellow variants are the accent alternative on Celtic Blue |
| Editorial stamp moments (packaging story, Our story) | `logo-badge-*` | Decorative; contains "WEAR YOUR MOOD" artwork text — treat as artwork, not copy |
| Small brand punctuation (section corners, loading) | `logo-eyes-*` | Also the natural reduced-motion brand mark |

Contrast caution: yellow-on-white and white-on-yellow fail text contrast;
use yellow logo variants only on dark/saturated fields. Validate every
logo/background pair during implementation.

## 4. Font Loading Plan

Target (once correct files and licences are confirmed):

- `next/font/local` with two families:
  - **BaileywickGothicJF** — display. Single file, `weight: "550"` (declare
    as `600` equivalent usage), `display: swap`, preload only if used
    above the fold (it is — hero headline).
  - **Adelphi PE Variable** — body/interface. Requires the real variable
    file (or Regular/Medium/Bold statics). Declare the actual weight range;
    subset to Latin; preload the body weight.
- Convert/request WOFF2; keep WOFF only as legacy fallback if at all.
- CSS fallback stacks so layout survives font failure.

Current state and interim rule (per `CLAUDE_CODE_SETUP.md`):

- Baileywick may be used now for display **pending licence confirmation**
  (fsType flag says preview/print only — confirm web embedding rights).
- Adelphi must **not** ship in its current Thin-only state for body text.
  Until the correct file arrives, use an explicit `next/font` fallback
  (system/neutral font), isolated behind one token so the real family
  drops in without component changes. Do not download a substitute Adelphi
  from any unofficial source.
- Record in the checkpoint handoff which fallback is active.

## 5. Mascot Usage Map

Supporting-element rule applies everywhere: one mascot moment per section
maximum, never overlapping product imagery, price, or CTAs; decorative
poses get empty alt text.

| Pose | Best placements |
| --- | --- |
| `luma-wave-blue` | Hero annotation or Our-story greeting |
| `luma-flex-blue` | "How Luma works" step energy; editions confidence moment |
| `luma-skate-yellow` | Movement/energy moments; pairs naturally with Kickflip Luma and Color Your Steps |
| `luma-paint-pink` | Mood-discovery or creativity section; Color Your Steps context |
| `luma-flower-green` | Brand-story quiet moment |
| `luma-peace-red` | Standalone-socks section; playful sign-off |
| `luma-sit-wave-white` | Footer or colored fields (designed for saturated backgrounds) |
| `luma-sleep-purple` | Empty cart, empty collection, 404 |
| `luma-pizza-peach` | Optional casual moment (FAQ, 404 variety); lowest priority |

None of these poses is medical; keep it that way outside Healthy Shifts
contexts per `BRAND.md`.

## 6. Sticker Usage Recommendations

Stickers are decorative accents — never carriers of price, size, delivery,
or state information, and never stacked into collages that compete with
products.

- **UI-adjacent symbols (best web value):** check (20/30) for selected or
  success accents, X (25) never as an error icon by itself (color-only
  meaning) but as playful negation art, question mark (24) for FAQ/size
  guide headers, speech bubble (31) for FAQ/community, envelope (34) for
  newsletter, lightning (32) and sparkle (28) for energy accents, star
  (23) / heart (15) for expressive punctuation, sock (17) anywhere a small
  brand wink helps.
- **Brand stickers (11, 12, 13):** duplicate the logo system; prefer the
  proper `logo-*` files in UI. Reserve these for sticker-collage moments
  (e.g., packaging story) if used at all.
- **Edition sticker (14):** Color Your Steps-specific; usable on that
  edition's page or card as a badge-style accent. Do not place it near
  Healthy Shifts content.
- **Annotation set (16, 19, 21, 22, 26, 27, 29, 33):** section-transition
  and editorial annotations, one or two per section maximum.
- Rotate through the palette deliberately; the color families (green set,
  orange set, purple set) can color-key different homepage chapters.

## 7. Animation Usage Recommendations

None of the four GIFs should be embedded as-is:

| File | Recommendation |
| --- | --- |
| (7) 30.7 MB "Delivering Happiness" | **User-approved for the homepage hero background (28 July 2026)** — shipped only as lightweight video derivatives (`luma-delivering-happiness-1280.webm` ~174 KB, `-1280.mp4` ~138 KB, `-poster.jpg` ~70 KB), playing once behind a translucent Eggshell overlay with a reduced-motion static fallback. The 30.7 MB GIF master itself must still never be served. The embedded "We are Delivering Happiness" phrase is approved as artwork in this context; it remains unapproved as written website copy |
| (9) 13.2 MB logo reveal | **Do not ship as GIF.** If a loading/reveal moment is approved later, rebuild as an ≤1.2 s code-driven sequence (Motion for React with the SVG logo parts) or a short muted MP4/WebM — subject to the intro rules in `CLAUDE.md` |
| (2) sticker collage | Reference for a sticker-collage motion moment; recreate in code with the actual sticker SVGs (lighter, transparent, reduced-motion-friendly) rather than embedding the GIF |
| (5) color slideshow | Brand-color rhythm reference only; a 3-frame hard-cut GIF would look broken as a web element |

The website's approved motion (hero entrance, box-opening reveal, micro
interactions) should be built from the SVG assets and edition renders in
code, which also satisfies `prefers-reduced-motion` — a GIF cannot.

## 8. Product and Edition Asset Map

| Website surface | Asset(s) |
| --- | --- |
| Homepage hero | `luma-combined-editions-homepage-hero-v1.png` (preferred; `object-fit: contain`; both editions must stay visible on mobile) |
| Featured-edition cards | `luma-color-your-steps-closed-v1.png`, `luma-healthy-shifts-closed-v1.png` (alternates: box-with-socks or open-filled) |
| Box-opening / packaging story | `*-open-empty-v1.png` → `*-open-filled-v1.png` pair per edition |
| Edition product gallery | closed, open-filled, box-with-socks, top-down (4 angles per edition) + the three component sock packshots |
| Edition "Inside the box" contents row | `sock-kickflip-luma.jpg`, `sock-luma-doodle.jpg`, `sock-watch-your-step.jpg` (CYS); `sock-plus-pulse.jpg`, `sock-vital-signs.jpg`, `sock-luma-med-team.jpg` (HS) — names only, no links to nonexistent product pages |
| Standalone product cards + galleries | `sock-daydream.jpg`, `sock-hypno-wave.jpg`, `sock-shroom-pop.jpg`, `sock-vibe-attack.jpg` in white/near-white frames |
| Shop grid | Edition closed-box renders + the four standalone packshots |
| Still missing for product pages | Zipper-bag packaging imagery for standalone pairs (approved copy references "Luma zipper bag"; no image exists); any additional detail/angle shots |

## 9. Optimization Requirements (do not execute yet)

1. Preserve all current files unchanged as masters.
2. Generate WebP (and optionally AVIF) derivatives with alpha for all 11
   edition PNGs at the responsive widths already specified in
   `LUMA_ASSET_AUDIT.md` §7. Expected ~10× delivery savings.
3. Generate WebP derivatives of the 10 sock JPEGs (cards ~480/720 px,
   gallery ~1080 px).
4. Produce WOFF2 versions of both fonts (or obtain them from the foundries
   with the licence confirmation).
5. Derive favicon set (ICO + PNG sizes + apple-touch) from
   `logo-eyes-blue.svg`.
6. Optionally run SVGO on logos/stickers/mascots (already small; low
   priority) and normalize the stray width/height attributes on sticker
   (14) and `luma-pizza-peach.svg`.
7. Exclude from web delivery entirely: all four GIFs, `Socks Band-01.jpg`,
   `Thank you Card-01.jpg`.
8. Compare every derivative against its master on light and dark fields
   (edge halos) before approval.

## 10. Duplicate and Unclear Assets

- Stickers 11/12/13 duplicate the wordmark/icon/badge logo artwork in
  sticker form — keep, but UI should use the `logo-*` files.
- Checkmarks 20 (green) and 30 (pink); exclamations 19 (green, double) and
  29 (purple, single) — intentional palette variants, not errors.
- `logo-icon-*` is stacked lettering rather than a pictorial icon; the
  naming is slightly counterintuitive but workable. The true "icon" for
  tiny sizes is `logo-eyes-*`.
- Numbering gap: sticker files start at (11); nothing indicates missing
  required content.
- `luma-sit-wave-white.svg` renders light blue rather than pure white —
  fine on saturated fields; verify it is the intended "white" variant.

## 11. Proposed (Not Executed) Housekeeping

For a later approved pass, with a documented mapping:

- Move `Socks Band-01.jpg`, `Thank you Card-01.jpg`, and the four GIFs out
  of `public/` into a non-served `references/` directory.
- Rename stickers to kebab-case (e.g.
  `Luma Socks - Stickers  (14).svg` → `sticker-edition-color-your-steps.svg`,
  `(20).svg` → `sticker-check-green.svg`, …) and group into
  `brand/logos/`, `brand/stickers/`.
- Rename fonts to versioned kebab-case once correct files arrive.

No renames or moves have been performed.

## 12. Remaining Blockers and Conflicts

**Blockers (asset-level):**

1. **Correct Adelphi PE Variable webfont** (real variable file or static
   Regular/Medium/Bold). The supplied file is a Thin-only static instance —
   body typography is blocked until replaced. Checkpoint 1 proceeds on the
   documented fallback.
2. **Web-embedding licence confirmation for both fonts.** Both files carry
   restrictive embedding flags (preview/print-only class); `BRAND.md`
   requires recorded licence status before production use.
3. **Zipper-bag packaging imagery** for standalone product pages (needed at
   Checkpoint 5, not Checkpoint 1).

**Conflicts found in supplied artwork (report, do not resolve silently):**

4. `Socks Band-01.jpg` prints **"FITS SIZES 38–42"** — conflicts with the
   approved ranges EU 36–40 / EU 41–46. Also headlines **"COLOR WALKS"**
   above "Color Your Steps" — an unapproved name variant. Confirm whether
   the physical band is outdated or the docs are.
5. Social handles disagree: print assets show **@LumaSocks** and
   **@luma_socks**; `CONTENT.md` approves **@lumasocksma**. The Instagram
   URL remains unverified — customer-content section stays blocked.
6. ~~The wordmark's **®**~~ **Resolved (user, 28 July 2026):** LUMA is a
   registered trademark; the ® wordmark is approved for public use.
7. **Partially resolved (user, 28 July 2026):**
   **"Doctor approved. Nurse tested."** is confirmed as intentional
   humorous wordplay tied to the Healthy Shifts medical theme. It does not
   communicate medical certification, clinical testing, health benefits,
   or healthcare-professional endorsement. The supplied packaging and
   product renders may be used as provided; do not alter or hide the
   phrase. Binding constraints:
   - Do not expand it into a factual medical claim.
   - Do not state or imply clinical testing, medical certification,
     health benefits, or professional endorsement anywhere on the site.
   - Do not add the phrase to structured data or factual product
     specifications.
   - If the phrase is ever used as text outside the supplied artwork,
     preserve its playful campaign context.
   Color Your Steps' **"FIRST EDITION"** artwork remains imagery-only; do
   not repeat it as website copy without approval.
8. GIF (7) contains the unapproved tagline **"We are Delivering
   Happiness"**.
9. Badge logo contains **"WEAR YOUR MOOD"** — artwork only, not approved
   copy.

**Non-asset blockers** (unchanged from `SITE_BRIEF.md`/`LUMA_ASSET_AUDIT.md`):
Shopify configuration, policies, support contact, legal entity details,
newsletter provider, verified Instagram URL. `SHOPIFY.md` and
`ACCEPTANCE_CRITERIA.md` do not exist yet — intentional per
`CLAUDE_CODE_SETUP.md`, not a Checkpoint 1 blocker.

## 13. Assets Proposed for Checkpoint 1 (pending user approval)

| Role | File |
| --- | --- |
| Header logo | `public/assets/brand/logo-wordmark-blue.svg` |
| Compact/mobile logo (if needed) | `public/assets/brand/logo-icon-blue.svg` |
| Favicon source | `public/assets/brand/logo-eyes-blue.svg` |
| Hero image | `public/assets/editions/luma-combined-editions-homepage-hero-v1.png` |
| Featured card — Color Your Steps | `public/assets/editions/luma-color-your-steps-closed-v1.png` |
| Featured card — Healthy Shifts | `public/assets/editions/luma-healthy-shifts-closed-v1.png` |
| Display font | **Fallback via `next/font`** — per user instruction (28 July 2026), supplied fonts stay unused until web-embedding rights are confirmed |
| Body font | **Fallback via `next/font`** until correct Adelphi files arrive and embedding rights are confirmed |
| Optional hero/section accent | One mascot pose (`luma-wave-blue.svg`) and at most 1–2 stickers, only if the composition needs them |

Everything else (remaining renders, sock packshots, other mascot poses,
stickers, animations) is deferred to later checkpoints. No GIF ships in
Checkpoint 1.

## 14. Code-Drawn Placeholders Currently Shipping

Recorded per the asset rules in `CLAUDE.md`: placeholders must be marked
and recorded, never quietly substituted.

| Placeholder | Where it appears | Status |
| --- | --- | --- |
| `src/components/edition/TemporaryAmbulance.tsx` | Healthy Shifts hero badge and the journey route marker (`/editions/healthy-shifts`) | **Placeholder.** A deliberately simple, code-drawn route marker — it does not imitate finished Luma character artwork. Replace with the commissioned campaign illustration; the page layout takes the swap without change. |

No other placeholder stands in for a real Luma asset. Every sock packshot,
cutout, box render, mascot pose, and sticker on the site is the real
supplied artwork.

### Values still needing confirmation

These live in `src/config/store.ts`, each marked `TODO`, and are used from
there so a correction lands everywhere at once:

- Support email, phone, WhatsApp number, and support hours
- Delivery estimate and delivery areas
- Return window and who pays return shipping
- Registered company name and business address
- Production domain (`siteUrl`) — drives metadata, `sitemap.xml`, `robots.txt`
