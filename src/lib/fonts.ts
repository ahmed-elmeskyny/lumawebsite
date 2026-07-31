import localFont from "next/font/local";

/**
 * Official Luma brand typography (user-approved for web use, 28 July 2026).
 *
 * Display — BaileywickGothicJF: a single Medium (550) hand-lettered face.
 * Because there is only one weight, display type must NOT request bold
 * weights; the browser would synthesize a distorted faux-bold. Use
 * font-normal on display headings and let the face's natural weight carry.
 *
 * Body — Adelphi PE: the supplied file is a single static instance at
 * weight 100 (see docs/ASSET_MANIFEST.md §2.6). It reads light at small
 * sizes, so body copy uses full-strength Onyx and slightly larger sizes
 * to hold legibility.
 */
export const displayFont = localFont({
  src: "../../public/assets/fonts/BaileywickGothicJF.woff",
  weight: "550",
  style: "normal",
  display: "swap",
  variable: "--font-display-brand",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const bodyFont = localFont({
  src: "../../public/assets/fonts/Adelphi PE VF All.woff",
  style: "normal",
  display: "swap",
  variable: "--font-body-brand",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
