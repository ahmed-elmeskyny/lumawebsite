import Image from "next/image";
import Link from "next/link";
import { GhostType } from "@/components/ui/GhostType";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { storeConfig } from "@/config/store";
import { formatMad } from "@/lib/money";
import { SIZE_RANGES } from "@/types/product";

/**
 * Footer: a yellow closing brand band above a dark link footer.
 *
 * Carries the newsletter signup (posts to /api/newsletter) and the two
 * social destinations from config/store.ts. Deliberately absent:
 * sustainability, packaging, or material claims, and any delivery-time or
 * returns promise — those are real-world commitments that belong in
 * config/store.ts once confirmed, not in decoration.
 *
 * Every link below resolves to a real, built route. It covers every route on
 * the site, so the footer is a complete map rather
 * than a selection. Editions are listed individually because each one is
 * its own landing page.
 */
const LINK_GROUPS = [
  {
    heading: "Shop",
    links: [
      { href: "/", label: "Home" },
      { href: "/socks", label: "Luma's socks" },
      { href: "/editions", label: "Editions" },
      { href: "/editions/color-your-steps", label: "Color Your Steps" },
      { href: "/editions/healthy-shifts", label: "Healthy Shifts" },
      { href: "/cart", label: "Your cart" },
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
      { href: "/blog", label: "Blog — The Luma Journal" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  {
    href: storeConfig.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  { href: storeConfig.social.tiktok, label: "TikTok", Icon: TikTokIcon },
] as const;

/** Operational facts only — values come from config/store.ts. */
const GOOD_TO_KNOW = [
  { label: "Sizes", value: SIZE_RANGES.join(" · ") },
  { label: "Delivery", value: formatMad(storeConfig.delivery.feeMad) },
  { label: "Payment", value: "Pay on delivery" },
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
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-luma-white/30 pl-3 pr-4 text-sm text-luma-white transition-colors hover:border-cyber-yellow hover:text-cyber-yellow"
                  >
                    <Icon />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="subtitle text-sm uppercase tracking-[0.16em] text-cyber-yellow">
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
            <h2 className="subtitle text-sm uppercase tracking-[0.16em] text-cyber-yellow">
              Good to know
            </h2>
            <dl className="mt-5 flex flex-col gap-3">
              {GOOD_TO_KNOW.map((item) => (
                <div key={item.label}>
                  <dt className="subtitle text-xs uppercase tracking-[0.12em] text-luma-white">
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

/* Recognisable social-platform glyphs. `currentColor` lets them inherit the
   link's hover state alongside the label. */
function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M20 8.6a6.2 6.2 0 0 1-4.3-1.72V15a5.6 5.6 0 1 1-5.6-5.6c.3 0 .58.02.86.07v2.9a2.75 2.75 0 1 0 1.94 2.63V2.5h2.8A4.5 4.5 0 0 0 20 6.6v2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
