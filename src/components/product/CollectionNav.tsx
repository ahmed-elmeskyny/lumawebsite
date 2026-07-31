import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Collection grouping as plain navigation links (approved labels from
 * docs/CONTENT.md) — not client-side filters.
 */
const COLLECTIONS = [
  { href: "/shop", label: "All products" },
  { href: "/collections/editions", label: "Editions" },
  { href: "/collections/standalone-socks", label: "Standalone socks" },
] as const;

export function CollectionNav({ current }: { current: string }) {
  return (
    <nav aria-label="Collections" className="mt-8">
      <ul className="flex flex-wrap gap-2">
        {COLLECTIONS.map((collection) => {
          const isCurrent = collection.href === current;
          return (
            <li key={collection.href}>
              <Link
                href={collection.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors",
                  isCurrent
                    ? "border-onyx bg-onyx text-luma-white"
                    : "border-onyx/25 text-onyx hover:border-onyx",
                )}
              >
                {collection.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
