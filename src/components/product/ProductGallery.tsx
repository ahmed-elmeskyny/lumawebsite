"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ProductImage } from "@/types/product";

/**
 * Product gallery with accessible thumbnail switching. Falls back to a
 * lone image when a product has only one view.
 *
 * `priority` is opt-in: product pages mount this twice (one mobile, one
 * desktop, each hidden at the other breakpoint), and preloading both
 * would put two competing LCP candidates on every page load.
 */
export function ProductGallery({
  images,
  field,
  priority = false,
}: {
  images: readonly ProductImage[];
  field: string;
  priority?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  if (!active) {
    return null;
  }

  return (
    <div>
      <div className={cn("overflow-hidden rounded-3xl", field)}>
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          width={active.width}
          height={active.height}
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}: ${image.alt}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={cn(
                  "block w-full overflow-hidden rounded-xl border-2 transition-colors",
                  field,
                  index === activeIndex
                    ? "border-celtic-blue"
                    : "border-transparent hover:border-onyx/30",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes="120px"
                  className="h-auto w-full object-contain"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
