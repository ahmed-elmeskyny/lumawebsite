import { cn } from "@/lib/cn";

/**
 * Oversized ghosted lettering used as editorial background texture,
 * echoing the tonal wordmark printed on the Luma packaging. Purely
 * decorative: hidden from assistive technology and never the only place
 * a message appears.
 */
export function GhostType({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("ghost-type absolute select-none", className)}
    >
      {children}
    </span>
  );
}
