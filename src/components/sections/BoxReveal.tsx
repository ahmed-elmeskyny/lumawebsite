"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const PLAYED_KEY = "luma-box-reveal-played";

/**
 * One-time box-opening moment (docs/LUMA_VISUAL_DIRECTION.md §4).
 *
 * Fail-open by design: the markup renders the OPEN box, with the closed
 * lid stacked above it at opacity 0. Only after mount — and only when
 * motion is allowed and the reveal has not already played this visit —
 * does the effect show the closed lid, then crossfade it away when the
 * section enters view. If JavaScript, the observer, or an image fails,
 * the static open box remains. Crossfade: 0.9 s (< 1.2 s budget).
 */
export function BoxReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let played = false;
    try {
      played = sessionStorage.getItem(PLAYED_KEY) === "1";
    } catch {
      played = true;
    }
    if (reducedMotion || played || !("IntersectionObserver" in window)) {
      return;
    }

    // The lid's visibility is driven by this data attribute (see the
    // group-data variant on the lid image), not by mutating the
    // next/image element's own style, which next/image rewrites on load.
    container.dataset.reveal = "armed";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.intersectionRatio >= 0.5)) {
          observer.disconnect();
          delete container.dataset.reveal;
          try {
            sessionStorage.setItem(PLAYED_KEY, "1");
          } catch {
            // non-fatal
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <Image
        src="/assets/editions/luma-color-your-steps-open-filled-v1.png"
        alt="Color Your Steps open rigid magnetic box with Kickflip Luma, Luma Doodle, and Watch Your Step socks"
        width={1254}
        height={1254}
        sizes="(min-width: 1024px) 44vw, 92vw"
        className="h-auto w-full object-contain"
      />
      <Image
        src="/assets/editions/luma-color-your-steps-closed-v1.png"
        alt=""
        aria-hidden="true"
        width={1254}
        height={1254}
        sizes="(min-width: 1024px) 44vw, 92vw"
        className="box-reveal-lid absolute inset-0 h-auto w-full object-contain"
      />
    </div>
  );
}
