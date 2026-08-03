import Image from "next/image";
import Link from "next/link";
import { GhostType } from "@/components/ui/GhostType";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { storeConfig } from "@/config/store";

/**
 * Footer: a yellow closing brand band above a dark link footer.
 *
 * Structure follows the supplied design direction. Several elements of
 * that mockup are intentionally NOT built because approved sources
 * prohibit them — see the checkpoint report. In particular there is no
 * newsletter form (no provider, consent copy, or privacy link yet, and
 * the mockup's "10% off" is an unapproved discount), no sustainability
 * or packaging claims, no order tracking or returns links, and no social
 * links until the destinations are verified.
 *
 * Every link below resolves to a real, built route.
 */
const LINK_GROUPS = [
  {
    heading: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/collections/editions", label: "Editions" },
      { href: "/collections/standalone-socks", label: "Standalone socks" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/size-guide", label: "Size guide" },
      { href: "/shipping-returns", label: "Shipping & returns" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact us" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/our-story", label: "Our story" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
] as const;

/** Approved operational facts only — no delivery times or promises. */
const GOOD_TO_KNOW = [
  { label: "Sizes", value: "EU 36–40 · EU 41–46" },
  { label: "Delivery", value: "35 MAD" },
  { label: "Payment", value: "Pay on delivery available" },
] as const;

export function Footer() {
  return (
    <footer>
      {/* Closing brand band */}
      <section
        aria-labelledby="footer-band-heading"
        className="relative overflow-hidden bg-cyber-yellow"
      >
        <GhostType className="-bottom-4 left-0 text-[20vw] text-onyx/8">
          LUMA SOCKS
        </GhostType>

        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start gap-8 px-4 py-14 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-16">
          <div className="max-w-xl">
            <h2
              id="footer-band-heading"
              className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-tight text-onyx"
            >
              Socks for every side of you.
            </h2>
            <div className="mt-7">
              <NewsletterForm />
            </div>
          </div>

          <Image
            src="/assets/brand/logo-eyes-dark.svg"
            alt=""
            width={216}
            height={232}
            unoptimized
            className="h-24 w-auto self-end lg:h-40"
          />
        </div>
      </section>

      {/* Dark link footer */}
      <div className="on-dark bg-onyx text-luma-white">
        <div
          aria-hidden="true"
          className="pattern-ribbing h-3 w-full text-cyber-yellow"
        />

        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-12 lg:py-16">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="rounded-sm" aria-label="Luma Socks — home">
              <Image
                src="/assets/brand/logo-stacked-white.svg"
                alt="Luma Socks"
                width={103}
                height={140}
                unoptimized
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-luma-white/80">
              Original sock designs and collectible three-pair editions, made
              for colour, character, and self-expression.
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {[
                { href: storeConfig.social.instagram, label: "Instagram" },
                { href: storeConfig.social.tiktok, label: "TikTok" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-9 items-center rounded-full border border-luma-white/30 px-4 text-sm font-semibold text-luma-white transition-colors hover:border-cyber-yellow hover:text-cyber-yellow"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-cyber-yellow">
                {group.heading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
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

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-cyber-yellow">
              Good to know
            </h2>
            <dl className="mt-5 flex flex-col gap-3">
              {GOOD_TO_KNOW.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-luma-white/55">
                    {item.label}
                  </dt>
                  <dd className="text-luma-white/90">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="border-t border-luma-white/15">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-luma-white/60 sm:px-7 lg:px-12">
            <p>© 2026 Luma Socks</p>
            <p>Wear who you are.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
