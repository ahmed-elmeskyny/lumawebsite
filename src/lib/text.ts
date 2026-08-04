/** Spelt-out numbers for the small counts that appear in body copy. */
const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
] as const;

/**
 * Spells a small count, falling back to digits beyond the range copy
 * actually uses. Lets sentences like "Eight sold as single pairs" stay
 * derived from the catalogue instead of being typed by hand.
 */
export function spellCount(count: number): string {
  return NUMBER_WORDS[count] ?? String(count);
}

/** Uppercases the first letter, for derived words that open a sentence. */
export function capitalise(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** Joins names into an English list: "a, b, and c". */
export function formatList(items: readonly string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0]!;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
