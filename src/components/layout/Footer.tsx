import Image from "next/image";
import Link from "next/link";

/**
 * Footer with only active, approved destinations (docs/SITE_BRIEF.md).
 * Deliberately omitted until approved: Contact (no verified support
 * channel), Legal group (policies unapproved), Social (Instagram URL
 * unverified), newsletter (no provider/consent).
 */
const FOOTER_GROUPS = [
  {
    heading: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/collections/editions", label: "Editions" },
      { href: "/collections/standalone-socks", label: "Standalone socks" },
    ],
  },
  {
    heading: "Help",
    links: [
      { href: "/size-guide", label: "Size guide" },
      { href: "/faq", label: "FAQ" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-onyx text-luma-white">
      <div
        aria-hidden="true"
        className="pattern-ribbing h-4 w-full text-cyber-yellow"
      />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-7 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-16">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="rounded-sm" aria-label="Luma Socks — home">
            <Image
              src="/assets/brand/logo-stacked-white.svg"
              alt="Luma Socks"
              width={103}
              height={140}
              unoptimized
              className="h-28 w-auto"
            />
          </Link>
          <p className="font-display text-2xl text-luma-white">
            Socks for every side of you.
          </p>
          <p className="text-sm text-cyber-yellow">
            Made with color in Morocco.
          </p>
        </div>
        {FOOTER_GROUPS.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyber-yellow">
              {group.heading}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-luma-white/90 transition-colors hover:text-cyber-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-luma-white/15">
        <p className="mx-auto max-w-[1440px] px-4 py-5 text-sm text-luma-white/60 sm:px-7 lg:px-12">
          © 2026 Luma Socks
        </p>
      </div>
    </footer>
  );
}
