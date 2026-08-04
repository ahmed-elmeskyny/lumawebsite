"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart/CartProvider";

/**
 * Primary navigation per docs/CONTENT.md. Destinations are future routes
 * planned in docs/SITE_BRIEF.md; they are not implemented in Checkpoint 1.
 */
interface NavLink {
  href: string;
  label: string;
  /** Submenu revealed on hover and keyboard focus */
  children?: readonly { href: string; label: string }[];
}

const NAV_LINKS: readonly NavLink[] = [
  { href: "/socks", label: "Socks" },
  {
    href: "/editions",
    label: "Editions",
    children: [
      { href: "/editions", label: "All editions" },
      { href: "/editions/color-your-steps", label: "Color Your Steps" },
      { href: "/editions/healthy-shifts", label: "Healthy Shifts" },
    ],
  },
  { href: "/our-story", label: "Our story" },
  { href: "/blog", label: "Blog" },
  { href: "/size-guide", label: "Size guide" },
  { href: "/faq", label: "FAQ" },
] as const;

/**
 * A calm, mostly-neutral header. The colour lives in the interaction, not
 * the base state: hovering or focusing a control reveals a Celtic Blue
 * pill with the same ring-pattern texture used on dark sections elsewhere
 * on the site, and every control shares that one interaction language.
 *
 * Nav text is set in the display face (Baileywick), not the body face
 * (Adelphi). Adelphi ships only a Thin (100) static weight, and
 * `font-synthesis-weight: none` in globals.css deliberately stops the
 * browser from faking a bold version of it — that rule exists to avoid
 * ugly faux-bold elsewhere, so a plain `font-bold` on Adelphi can never
 * look heavier here. Baileywick is the site's genuinely bold voice.
 */
export function Header() {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState<string | null>(
    null,
  );
  const drawerRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    openButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }
      const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) {
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-onyx/10 bg-luma-white/95">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-7 lg:px-12">
        <Link
          href="/"
          className="shrink-0 rounded-sm"
          aria-label="Luma Socks — home"
        >
          <Image
            src="/assets/brand/logo-wordmark-blue.svg"
            alt="Luma Socks"
            width={134}
            height={30}
            priority
            unoptimized
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              // A section counts as current when you are on it or on any
              // page beneath it, so "Editions" stays lit inside a story.
              const isExact = pathname === link.href;
              const isCurrent =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <li
                  key={link.href}
                  className="group/item relative"
                  onMouseEnter={() => {
                    if (link.children) setDesktopSubmenuOpen(link.href);
                  }}
                  onMouseLeave={() => {
                    if (link.children) setDesktopSubmenuOpen(null);
                  }}
                  onFocusCapture={() => {
                    if (link.children) setDesktopSubmenuOpen(link.href);
                  }}
                  onBlurCapture={(event) => {
                    if (
                      link.children &&
                      !event.currentTarget.contains(event.relatedTarget)
                    ) {
                      setDesktopSubmenuOpen(null);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setDesktopSubmenuOpen(null)}
                    aria-current={isExact ? "page" : undefined}
                    className="group relative inline-flex items-center rounded-full px-4 py-2"
                  >
                    <span
                      aria-hidden="true"
                      className={`pattern-rings pointer-events-none absolute inset-0 rounded-full bg-celtic-blue transition-transform duration-300 motion-reduce:transition-none group-hover:scale-100 group-focus-visible:scale-100 ${
                        isCurrent ? "scale-100" : "scale-0"
                      }`}
                    />
                    <span
                      className={`relative z-10 font-display text-base leading-none transition-colors duration-200 motion-reduce:transition-none group-hover:text-luma-white group-focus-visible:text-luma-white ${
                        isCurrent ? "text-luma-white" : "text-onyx"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>

                  {/* Submenu opens on hover and on keyboard focus, with no
                      JavaScript.

                      It is hidden with opacity + clip rather than
                      `visibility: hidden`, because a visibility-hidden
                      container makes its links unfocusable — which would
                      stop focus ever entering and mean `focus-within`
                      could never fire for keyboard users. */}
                  {link.children && (
                    <div
                      className={`absolute left-0 top-full z-50 w-56 pt-2 transition-opacity duration-150 motion-reduce:transition-none ${
                        desktopSubmenuOpen === link.href
                          ? "pointer-events-auto opacity-100"
                          : "pointer-events-none opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-2xl border border-onyx/10 bg-luma-white p-2 shadow-[0_12px_32px_rgba(0,0,0,0.16)]">
                        {link.children.map((child) => {
                          const childCurrent = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setDesktopSubmenuOpen(null)}
                                aria-current={
                                  childCurrent ? "page" : undefined
                                }
                                className={`block rounded-xl px-3 py-2.5 font-display text-lg leading-tight transition-colors ${
                                  childCurrent
                                    ? "bg-celtic-blue text-luma-white"
                                    : "text-onyx hover:bg-eggshell"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href="/cart"
            aria-label={`Cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full"
          >
            <span
              aria-hidden="true"
              className="pattern-rings pointer-events-none absolute inset-0 scale-0 rounded-full bg-celtic-blue transition-transform duration-300 motion-reduce:transition-none group-hover:scale-100 group-focus-visible:scale-100"
            />
            <span className="relative z-10 text-onyx transition-colors duration-200 group-hover:text-luma-white group-focus-visible:text-luma-white">
              <CartIcon />
            </span>
            {itemCount > 0 && (
              <span
                aria-hidden="true"
                className="absolute -right-0.5 -top-0.5 z-20 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-luma-white bg-celtic-blue px-1 text-[0.65rem] font-display leading-none text-luma-white"
              >
                {itemCount}
              </span>
            )}
          </Link>

          <button
            ref={openButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          >
            <span
              aria-hidden="true"
              className="pattern-rings pointer-events-none absolute inset-0 scale-0 rounded-full bg-celtic-blue transition-transform duration-300 motion-reduce:transition-none group-hover:scale-100 group-focus-visible:scale-100"
            />
            <span className="sr-only">Menu</span>
            <span className="relative z-10 text-onyx transition-colors duration-200 group-hover:text-luma-white group-focus-visible:text-luma-white">
              <MenuIcon />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full bg-onyx/40"
          />
          <div
            ref={drawerRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-y-0 right-0 flex max-h-dvh w-full max-w-xs flex-col overflow-y-auto overscroll-contain bg-luma-white shadow-xl"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Image
                src="/assets/brand/logo-wordmark-blue.svg"
                alt="Luma Socks"
                width={112}
                height={25}
                unoptimized
              />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-onyx transition-colors hover:bg-eggshell"
              >
                <CloseIcon />
              </button>
            </div>
            <nav aria-label="Primary" className="px-2 pb-6">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => {
                  const isCurrent = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`block rounded-2xl px-3 py-3 font-display text-2xl transition-colors ${
                          isCurrent
                            ? "bg-celtic-blue text-luma-white"
                            : "text-onyx hover:bg-eggshell"
                        }`}
                      >
                        {link.label}
                      </Link>

                      {/* Editions expand inline — no hover on touch. */}
                      {link.children && (
                        <ul className="mb-1 ml-3 flex flex-col border-l-2 border-onyx/10 pl-3">
                          {link.children
                            .filter((child) => child.href !== link.href)
                            .map((child) => {
                              const childCurrent = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMenu}
                                    aria-current={
                                      childCurrent ? "page" : undefined
                                    }
                                    className={`block rounded-xl px-3 py-2.5 font-display text-lg transition-colors ${
                                      childCurrent
                                        ? "bg-celtic-blue text-luma-white"
                                        : "text-onyx/85 hover:bg-eggshell"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6h16M3 11h16M3 16h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l12 12M17 5L5 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h12l-1 9.5a1.5 1.5 0 0 1-1.5 1.3h-7A1.5 1.5 0 0 1 5 15.5L4 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7 8V5a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
