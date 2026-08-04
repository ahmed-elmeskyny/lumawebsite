"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import { formatMad } from "@/lib/money";
import type { SizeRange } from "@/types/product";

interface QuickAddProps {
  handle: string;
  name: string;
  priceMad: number;
  sizeRanges: readonly SizeRange[];
  inStock: boolean;
}

/**
 * Quick add stays inside a product card on desktop. On phone-sized screens,
 * it is portalled to the document body as a bottom sheet so neither the card
 * crop nor the sticky header can obscure its controls.
 */
export function QuickAdd({
  handle,
  name,
  priceMad,
  sizeRanges,
  inStock,
}: QuickAddProps) {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<SizeRange | null>(null);
  const [added, setAdded] = useState(false);
  // Resolved fresh every time the panel opens rather than tracked in state.
  // A stored value can drift out of sync with the viewport (a missed
  // `change` event, a rotation, a restored window), and a stale `true`
  // here renders the `md:hidden` sheet at desktop width — an invisible
  // panel that still locks body scroll.
  const [isMobile, setIsMobile] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const { addLine } = useCart();

  const close = useCallback(() => {
    setOpen(false);
    setSize(null);
    setAdded(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    if (isMobile) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
        return;
      }
      // The sheet declares aria-modal, so keyboard focus must actually stay
      // inside it. Without this, everything behind the backdrop is still
      // tabbable and the "modal" is a lie to assistive technology.
      if (event.key !== "Tab" || !isMobile || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), input:not([disabled])",
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      if (isMobile) {
        document.body.style.overflow = "";
      }
    };
  }, [open, close, isMobile]);

  if (!inStock) {
    return null;
  }

  const selectSize = (range: SizeRange) => {
    setSize(range);
    setAdded(false);
  };

  const addOnDesktop = () => {
    if (!size) return;
    addLine({ handle, name, size, priceMad });
    setAdded(true);
  };

  const addOnMobile = () => {
    if (!size) return;
    addLine({ handle, name, size, priceMad });
    close();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (open) {
            close();
            return;
          }
          setIsMobile(window.matchMedia("(max-width: 767px)").matches);
          setOpen(true);
        }}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Quick add ${name}`}
        className={cn(
          "pointer-events-auto absolute right-3 bottom-3 z-10 flex h-11 w-11 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-onyx text-luma-white shadow-lg transition-colors hover:bg-celtic-blue motion-reduce:transition-none",
          open && "bg-celtic-blue",
        )}
      >
        <CartPlusIcon />
      </button>

      {open && !isMobile && (
        <div
          ref={panelRef}
          id={panelId}
          className="pointer-events-auto absolute inset-x-2 bottom-2 z-20 rounded-2xl bg-luma-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          <QuickAddForm
            handle={handle}
            name={name}
            priceMad={priceMad}
            sizeRanges={sizeRanges}
            size={size}
            added={added}
            onSizeChange={selectSize}
            onAdd={addOnDesktop}
            onClose={close}
          />
        </div>
      )}

      {open &&
        isMobile &&
        createPortal(
          <div className="fixed inset-0 z-[70] md:hidden">
            <button
              type="button"
              tabIndex={-1}
              aria-label="Dismiss quick add"
              onClick={close}
              className="absolute inset-0 h-full w-full bg-onyx/45"
            />
            <div
              ref={panelRef}
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${panelId}-title`}
              className="quick-add-sheet absolute inset-x-0 bottom-0 min-h-[35dvh] overflow-y-auto rounded-t-[2rem] bg-luma-white px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 shadow-[0_-18px_50px_rgba(0,0,0,0.24)]"
            >
              <div
                aria-hidden="true"
                className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-onyx/20"
              />
              <QuickAddForm
                handle={handle}
                name={name}
                priceMad={priceMad}
                sizeRanges={sizeRanges}
                size={size}
                added={false}
                sheet
                titleId={`${panelId}-title`}
                closeButtonRef={closeButtonRef}
                onSizeChange={selectSize}
                onAdd={addOnMobile}
                onClose={close}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

interface QuickAddFormProps {
  handle: string;
  name: string;
  priceMad: number;
  sizeRanges: readonly SizeRange[];
  size: SizeRange | null;
  added: boolean;
  sheet?: boolean;
  titleId?: string;
  closeButtonRef?: RefObject<HTMLButtonElement | null>;
  onSizeChange: (size: SizeRange) => void;
  onAdd: () => void;
  onClose: () => void;
}

function QuickAddForm({
  handle,
  name,
  priceMad,
  sizeRanges,
  size,
  added,
  sheet = false,
  titleId,
  closeButtonRef,
  onSizeChange,
  onAdd,
  onClose,
}: QuickAddFormProps) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            id={titleId}
            className={cn(
              "font-display leading-tight text-onyx",
              sheet ? "text-2xl" : "text-lg",
            )}
          >
            {name}
          </p>
          <p className="mt-1 text-sm text-celtic-blue">
            {formatMad(priceMad)}
          </p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close quick add"
          className={cn(
            "-mr-1 -mt-1 flex shrink-0 items-center justify-center rounded-full text-onyx transition-colors hover:bg-onyx hover:text-luma-white",
            sheet ? "h-11 w-11 bg-eggshell text-xl" : "h-8 w-8 text-base",
          )}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <fieldset className="mt-4">
        <legend className="subtitle text-xs uppercase tracking-[0.12em] text-onyx">
          Choose your size
        </legend>
        <div className="mt-2 flex gap-2">
          {sizeRanges.map((range) => (
            <label
              key={range}
              className={cn(
                "flex min-h-12 flex-1 cursor-pointer items-center justify-center rounded-xl border-2 px-2 py-2 text-center text-sm transition-colors focus-within:outline-2 focus-within:outline-celtic-blue focus-within:outline-offset-2",
                size === range
                  ? "border-celtic-blue bg-celtic-blue text-luma-white"
                  : "border-onyx/25 text-onyx hover:border-onyx",
              )}
            >
              <input
                type="radio"
                name={`quick-size-${handle}`}
                value={range}
                checked={size === range}
                onChange={() => onSizeChange(range)}
                className="sr-only"
              />
              {range}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="button"
        disabled={!size}
        onClick={onAdd}
        className="mt-4 min-h-12 w-full rounded-xl bg-onyx px-4 py-3 text-sm text-luma-white transition-colors hover:bg-celtic-blue disabled:cursor-not-allowed disabled:bg-onyx/25"
      >
        {size ? "Add to cart" : "Select a size"}
      </button>

      <p aria-live="polite" className="mt-2 min-h-4 text-xs text-onyx/70">
        {added ? `Added — ${name}, ${size}.` : ""}
      </p>
    </>
  );
}

function CartPlusIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 6h12l-1 9.5a1.5 1.5 0 0 1-1.5 1.3h-7A1.5 1.5 0 0 1 5 15.5L4 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 9v5M7.5 11.5h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
