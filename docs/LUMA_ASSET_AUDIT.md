# Luma Website Asset Audit

**Status:** Review draft  
**Audit date:** 28 July 2026  
**Applies to:** First Claude Code website checkpoint and later storefront build  
**Related sources:** `CLAUDE.md`, `BRAND.md`, `PRODUCTS.md`, `CONTENT.md`, `SITE_BRIEF.md`, `REFERENCE_AARDVARK.md`, `LUMA_VISUAL_DIRECTION.md`

---

## 1. Purpose

This document is the source of truth for which Luma assets are currently available, which are approved for website use, which require optimization, and which are still missing.

Claude must:

- use only assets listed as available;
- never invent a missing logo, mascot, product design, packaging panel, font, review, badge, or product photograph;
- preserve the real artwork and proportions of supplied products;
- use local placeholders only when this document explicitly permits them;
- keep missing-asset states easy to replace without redesigning components;
- ask for approval before substituting or regenerating a brand-critical asset.

The first coding checkpoint is limited to:

1. Header
2. Hero
3. Featured editions

This checkpoint can begin after the required brand assets in Section 8 are supplied and organized.

---

## 2. Verified Packaging Geometry

Both fixed editions use the same rigid magnetic flip-top box construction.

| Property | Verified value |
|---|---|
| Manufacturer format | 200 × 200 × 50 mm |
| Construction | Wrapped rigid board, magnetic flip-top |
| Board thickness | Approximately 2 mm |
| Approximate external assembled size | 206.3 × 205.3 × 55.45 mm |
| Approximate internal size | 196 × 196 × 47.85 mm |
| Editions | Color Your Steps; Healthy Shifts |

The generated renders intentionally show real rigid-board thickness. Claude must not restyle the packaging as a thin folding carton.

---

## 3. Approved Website Packaging Masters

All files below are verified PNG files with RGBA channels and genuine alpha transparency.

### Color Your Steps

| File | Dimensions | Approx. size | Approved use |
|---|---:|---:|---|
| `luma-color-your-steps-open-empty-v1.png` | 1254 × 1254 | 0.94 MB | Packaging story; inside-lid reveal |
| `luma-color-your-steps-open-filled-v1.png` | 1254 × 1254 | 1.90 MB | Product detail; edition hero |
| `luma-color-your-steps-closed-v1.png` | 1254 × 1254 | 1.03 MB | Featured-edition card; product gallery |
| `luma-color-your-steps-box-with-socks-v1.png` | 1254 × 1254 | 1.13 MB | Edition contents; product gallery |
| `luma-color-your-steps-top-down-v1.png` | 1254 × 1254 | 1.49 MB | Alternate gallery angle; mobile detail |

The filled edition contains:

- Kickflip Luma
- Watch Your Step
- Luma Doodle

### Healthy Shifts

| File | Dimensions | Approx. size | Approved use |
|---|---:|---:|---|
| `luma-healthy-shifts-open-empty-v1.png` | 1254 × 1254 | 0.96 MB | Packaging story; inside-lid reveal |
| `luma-healthy-shifts-open-filled-v1.png` | 1254 × 1254 | 1.30 MB | Product detail; edition hero |
| `luma-healthy-shifts-closed-v1.png` | 1254 × 1254 | 1.46 MB | Featured-edition card; product gallery |
| `luma-healthy-shifts-box-with-socks-v1.png` | 1254 × 1254 | 1.00 MB | Edition contents; product gallery |
| `luma-healthy-shifts-top-down-v1.png` | 1254 × 1254 | 1.42 MB | Alternate gallery angle; mobile detail |

The filled edition contains:

- Luma Med Team
- Plus Pulse
- Vital Signs

### Combined homepage hero

| File | Dimensions | Approx. size | Approved use |
|---|---:|---:|---|
| `luma-combined-editions-homepage-hero-v1.png` | 1536 × 1024 | 1.61 MB | Homepage hero; both editions |

This is the preferred first-checkpoint hero asset. It is a wide transparent product cluster designed to leave room for the headline **“Wear who you are.”**

---

## 4. Source Product References

Six original sock packshots are currently available:

| Product | Source format | Dimensions | Background | Status |
|---|---|---:|---|---|
| Kickflip Luma | JPEG | 1080 × 1080 | White | Reference-ready |
| Luma Doodle | JPEG | 1080 × 1080 | White | Reference-ready |
| Watch Your Step | JPEG | 1080 × 1080 | White | Reference-ready |
| Luma Med Team | JPEG | 1080 × 1080 | White | Reference-ready |
| Plus Pulse | JPEG | 1080 × 1080 | White | Reference-ready |
| Vital Signs | JPEG | 1080 × 1080 | White | Reference-ready |

These files are not transparent masters. They may be used:

- as artwork and color references;
- inside controlled white or near-white image frames;
- for visual comparison when checking generated compositions.

They must not be presented as transparent cutouts without a reviewed background-removal pass. Claude must not redraw or simplify their patterns.

The four approved standalone products in `PRODUCTS.md` still require their own final website imagery.

---

## 5. Packaging Source Material

The following supporting material is available:

- Manufacturer dieline and construction views for the 200 × 200 × 50 mm box
- Full Packaging Presentation PDF
- Color Your Steps artwork references
- Healthy Shifts artwork references
- Pacdora shared 3D-model link supplied by the founder

These are production and verification references. They are not automatically public website assets.

Rules:

- Do not expose dielines, technical marks, bleed guides, production notes, or manufacturer files on the public site.
- Do not embed or depend on the Pacdora viewer in the storefront.
- Use the approved transparent renders for customer-facing presentation.
- Keep the source material outside the public asset directory.

---

## 6. Asset Roles for the First Coding Checkpoint

### Header

Required:

- Primary Luma wordmark or approved horizontal logo
- Compact logo or icon for narrow mobile states

Permitted temporary treatment:

- A plain text `LUMA` wordmark using a neutral system font may be used only in an internal wireframe.

Not permitted:

- Launching or presenting the visual checkpoint as brand-accurate with a text substitute
- Reconstructing the logo from screenshots

### Hero

Preferred asset:

- `luma-combined-editions-homepage-hero-v1.png`

Fallback:

- The two approved open-filled edition renders arranged independently in CSS

Rules:

- Preserve the transparent edges.
- Use `object-fit: contain`, not `cover`.
- Never crop out a complete edition on mobile.
- Reserve the image aspect ratio before loading to prevent layout shift.
- Keep the headline, CTA, navigation, and product information functional without animation.

### Featured editions

Preferred card assets:

- `luma-color-your-steps-closed-v1.png`
- `luma-healthy-shifts-closed-v1.png`

Permitted alternate assets:

- The corresponding box-with-socks compositions
- The corresponding open-filled renders

Rules:

- Use the same visual scale and image-frame proportions for both editions.
- Do not stretch the square masters.
- Do not add unsupported “limited,” “best seller,” discount, stock, or review badges.
- Use edition names, prices, mood copy, and contents only from the approved documents.

---

## 7. Web Optimization Plan

The transparent PNG files are approved masters, not the only files that should be delivered to browsers.

Before production:

1. Preserve every original PNG unchanged in a master-assets directory.
2. Produce optimized WebP derivatives with alpha transparency.
3. Produce AVIF derivatives only if the build pipeline gives a verified quality and browser fallback.
4. Generate responsive widths appropriate to actual layout usage.
5. Keep PNG fallback only where required.
6. Compare optimized derivatives visually against the masters before approval.

Suggested derivatives:

| Usage | Suggested rendered widths |
|---|---|
| Edition card | 480, 720, 960 px |
| Product gallery | 720, 1080, 1440 px |
| Combined hero | 768, 1152, 1536 px |

Optimization rules:

- Do not enlarge a source beyond its useful native resolution.
- Use `<picture>` or the framework image component with explicit dimensions.
- Lazy-load below-fold product imagery.
- Do not lazy-load the primary above-fold hero if it is the Largest Contentful Paint candidate.
- Use descriptive alt text based on the actual visible asset.
- Keep transparent product renders on deliberate CSS backgrounds; do not flatten them prematurely.
- Inspect edge halos on both light and dark brand backgrounds.

Claude must report final derivative dimensions and sizes during the performance checkpoint.

---

## 8. Missing Assets and Readiness

### Required before the first visual checkpoint is considered brand-accurate

| Missing item | Why it is required | Current action |
|---|---|---|
| Primary Luma logo file | Header and footer identity | Supply approved SVG or transparent PNG |
| Compact logo/icon file | Mobile navigation and favicon source | Supply approved SVG or transparent PNG |
| Licensed BaileywickJF Gothic files | Display typography | Supply webfont files and licence confirmation |
| Licensed Adelphi PE Variable files | Supporting/body typography | Supply webfont files and licence confirmation |

If the approved fonts are not licensed for web use, Claude must use approved fallback fonts until replacements are chosen. It must not download unofficial copies.

### Required for later homepage sections

| Missing item | Needed for |
|---|---|
| Approved mascot master with transparent background | Brand-story and guide moments |
| Approved mascot pose set | Optional section annotations and micro-interactions |
| Brand-origin or founder imagery, if desired | About/story section |
| Newsletter-provider decision | Real newsletter form behavior |
| Real customer photos or approved UGC | Customer-content section |

Until real UGC exists, use a clearly designed empty/coming-soon state. Do not create fake customers, quotes, handles, ratings, or testimonials.

### Required for shop and standalone product pages

| Missing item | Needed for |
|---|---|
| Final imagery for all four standalone products | Shop cards and product galleries |
| Additional angles or detail shots, if available | Product detail pages |
| Confirmed material composition | Product facts |
| Confirmed care instructions | Product facts and FAQ |
| Confirmed fit/measurement guidance | Size guide |

### Required before Shopify integration and launch

These are data or operational dependencies rather than visual assets:

- Shopify products and collections
- Product and variant IDs
- SKU and inventory mapping
- COD configuration
- Delivery zones and confirmed delivery timing
- Exchange and return policy
- Customer-support contact
- Privacy policy and terms
- Analytics and consent decisions

Their absence must not block the visual storefront build, but checkout must remain disabled until Shopify is genuinely connected.

---

## 9. Recommended Project Asset Structure

```text
assets/
  brand/
    logos/
    mascot/
    fonts/
  products/
    editions/
      color-your-steps/
        master/
        web/
      healthy-shifts/
        master/
        web/
    standalone/
  references/
    packaging/
    sock-packshots/
```

Public application folders should contain only delivery-ready files. Dielines, the packaging PDF, raw references, and internal review images must remain outside the public directory.

Use lowercase kebab-case filenames. Do not rename the approved master files until a documented mapping exists.

---

## 10. Asset Acceptance Checklist

Before Claude presents the first browser checkpoint, verify:

- [ ] Approved logo files are used; no reconstructed substitute is shown.
- [ ] Font files are licensed and load without console errors, or approved fallbacks are documented.
- [ ] The combined hero image is not distorted or destructively cropped.
- [ ] Both featured-edition cards use the correct product image.
- [ ] Edition contents match `PRODUCTS.md`.
- [ ] Packaging artwork remains recognizable and has not been regenerated in code.
- [ ] Transparent edges are clean on all section backgrounds.
- [ ] Images have explicit width and height or an aspect-ratio reservation.
- [ ] Above-fold assets do not cause visible layout shift.
- [ ] Mobile at 390 × 844 shows a complete, understandable hero.
- [ ] Alternative text is accurate and concise.
- [ ] No internal production file is publicly served.
- [ ] No missing asset has been silently invented.

---

## 11. Audit Decision

### Ready now

- Approved packaging render set for both fixed editions
- Approved combined-editions homepage hero
- Six edition sock reference packshots
- Packaging geometry and artwork references
- Approved strategic, brand, product, content, site, reference, and visual-direction documents

### Ready after non-creative processing

- Responsive WebP derivatives
- Optional AVIF derivatives
- Shopify and mobile image sizes
- Thumbnails and social crops

### Still required

- Official logo variants
- Licensed webfont files or approved fallbacks
- Mascot masters for later sections
- Standalone-product imagery
- Shopify catalogue and operational launch details

### Go/no-go

The project is ready for **technical scaffolding and layout primitives now**.

The first header/hero/featured-editions visual checkpoint becomes fully brand-accurate once the official logo variants and webfonts—or explicitly approved font fallbacks—are added. Shopify is intentionally deferred and does not block this checkpoint.

