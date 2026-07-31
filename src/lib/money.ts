/**
 * Formats an MAD amount per docs/CONTENT.md: amount first, then "MAD"
 * (e.g. "235 MAD", never "MAD 235").
 */
export function formatMad(amount: number): string {
  return `${amount} MAD`;
}
