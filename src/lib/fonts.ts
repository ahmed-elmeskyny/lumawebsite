import localFont from "next/font/local";

/**
 * Official Luma brand typography (user-approved for web use, 28 July 2026).
 *
 * Display — BaileywickGothicJF: a single Medium (550) hand-lettered face.
 * Because there is only one weight, display type must NOT request bold
 * weights; the browser would synthesize a distorted faux-bold. Use
 * font-normal on display headings and let the face's natural weight carry.
 *
 * Body — Adelphi PE: despite "VF" in the filename, this file has NO `fvar`
 * table (verified by inspecting the WOFF table directory). It is a single
 * static instance, not a variable font, so there is no weight axis to
 * request. Combined with `font-synthesis-weight: none` in globals.css,
 * this means Tailwind weight utilities (font-bold, font-semibold, …) are
 * no-ops on body copy: they render identically to normal.
 *
 * Emphasis in body copy must therefore come from size, colour, uppercase
 * + letter-spacing, or the display face — never from font-weight.
 *
 * To get genuinely bolder body text, Luma needs to license and supply an
 * additional Adelphi weight; that is an asset decision, not a code one.
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
