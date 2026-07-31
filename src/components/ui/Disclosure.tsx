/**
 * Shared accessible disclosure row built on native <details>/<summary> —
 * works without JavaScript and keeps accordion styling consistent.
 */
export function Disclosure({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group py-1">
      <summary className="flex min-h-13 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-3 font-display text-xl text-onyx [&::-webkit-details-marker]:hidden">
        {summary}
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyber-yellow text-xl leading-none text-onyx transition-transform group-open:rotate-45 motion-reduce:transition-none"
        >
          +
        </span>
      </summary>
      <div className="pb-4 pr-8 text-onyx/80">{children}</div>
    </details>
  );
}
