"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals its children as they scroll into view.
 *
 * Deliberately fail-open: the markup renders visible, and JavaScript only
 * arms the hidden state for elements that are BELOW the fold at mount.
 * That means:
 *
 * - No JavaScript, or a crawler, still sees the whole page.
 * - Reduced-motion visitors are never hidden (CSS opts them out too).
 * - Above-fold content never flashes from visible to hidden and back.
 *
 * State lives in a data attribute rather than React state so nothing is
 * set synchronously inside the effect.
 */
export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    // Only arm content that starts below the fold — anything already on
    // screen stays visible instead of blinking.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      return;
    }

    node.dataset.reveal = "armed";
    if (delayMs > 0) {
      node.style.transitionDelay = `${delayMs}ms`;
    }

    // Any intersection at all reveals it. A stricter threshold or a
    // negative rootMargin can leave tall sections stuck hidden when the
    // viewport lands mid-element (e.g. after an anchor jump), and
    // permanently invisible content is far worse than no animation.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.dataset.reveal = "shown";
            observer.disconnect();
          }
        });
      },
      { threshold: 0 },
    );

    observer.observe(node);

    // Safety net: if anything goes wrong with the observer, reveal
    // everything rather than risk leaving content hidden.
    const failSafe = window.setTimeout(() => {
      if (node.dataset.reveal === "armed") {
        node.dataset.reveal = "shown";
      }
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failSafe);
    };
  }, [delayMs]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
