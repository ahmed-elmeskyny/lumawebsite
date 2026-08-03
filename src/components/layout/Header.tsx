"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";

/**
 * Primary navigation per docs/CONTENT.md. Destinations are future routes
 * planned in docs/SITE_BRIEF.md; they are not implemented in Checkpoint 1.
 */
const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/collections/editions", label: "Editions" },
  { href: "/our-story", label: "Our story" },
  { href: "/size-guide", label: "Size guide" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
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
        'a[href], button:not([disabled])',
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
    <header className="sticky top-0 z-40 border-b-2 border-onyx/10 bg-luma-white/95 backdrop-blur">
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
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-[0.95rem] font-semibold text-onyx transition-colors hover:text-celtic-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Local cart prototype: the count is real for items added in
              this session, but there is no checkout until Shopify. */}
          <p
            aria-label={`Cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
            title="Cart preview — checkout is not available yet"
            className="flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-xl px-2 text-[0.95rem] font-semibold text-onyx"
          >
            <CartIcon />
            <span
              aria-hidden="true"
              className={
                itemCount > 0
                  ? "flex h-5 min-w-5 items-center justify-center rounded-full bg-celtic-blue px-1 text-xs text-luma-white"
                  : "text-onyx/45"
              }
            >
              {itemCount}
            </span>
          </p>

          <button
            ref={openButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-onyx md:hidden"
          >
            <span className="sr-only">Menu</span>
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-hidden="true"
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
            className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-luma-white shadow-xl"
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
                className="flex h-11 w-11 items-center justify-center rounded-xl text-onyx"
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
            </div>
            <nav aria-label="Primary" className="px-2 pb-6">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-2xl px-3 py-3 font-display text-2xl text-onyx hover:bg-eggshell"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
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
      width="22"
      height="22"
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
      width="22"
      height="22"
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
      width="20"
      height="20"
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
