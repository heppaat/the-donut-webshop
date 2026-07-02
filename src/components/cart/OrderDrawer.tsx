"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import DonutSquare from "/public/donut_square.png";
import { DONUTS } from "@/components/landing/_components/shop/donuts";
import useCart from "@/hooks/useCart";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { PageDimOverlay } from "@/components/navbar/PageDimOverlay";
import { cn } from "@/lib/utils";

// Must cover the panel's retract animation (.order-drawer.is-closing, 0.35s in
// animations.css) before we unmount it — same deferred-unmount idiom the mobile
// menu uses. The context only flips a boolean; this component owns the exit.
const CLOSE_ANIMATION_MS = 400;

// Delivery is free once the box clears this subtotal (or while it's empty).
const FREE_DELIVERY_THRESHOLD = 20;
const DELIVERY_FEE = 3.5;

const FOCUSABLE =
  'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])';

/**
 * The "Your box" order drawer — a right-side modal panel opened by the navbar
 * CartButton. Rendered at layout level (a sibling of the headers) so its scrim
 * and panel can sit above them: CLAUDE.md reserves `z-[60]+` for exactly this.
 * The frosted scrim (PageDimOverlay) is the one soft/glass accent; the panel
 * itself is a flat brutalist surface (hard border, no blur).
 */
export const OrderDrawer = () => {
  const { items, addItem, removeItem, isDrawerOpen, closeDrawer } = useCart();

  // `visible` = mounted in the DOM (true through the exit animation); `isClosing`
  // swaps in the retract keyframes. Deriving both from the context boolean keeps
  // the animation mechanics here and the context a plain toggle.
  const [visible, setVisible] = useState(isDrawerOpen);
  const [isClosing, setIsClosing] = useState(false);

  const asideRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Deferred unmount: mount instantly on open; on close, play the retract, then
  // drop from the DOM after CLOSE_ANIMATION_MS.
  useEffect(() => {
    if (isDrawerOpen) {
      setVisible(true);
      setIsClosing(false);
      return;
    }
    if (!visible) return;
    setIsClosing(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
    return () => clearTimeout(timer);
  }, [isDrawerOpen, visible]);

  useBodyScrollLock(visible);

  // Move focus into the dialog on open; restore it to the opener (the cart
  // button) once the panel leaves the DOM.
  useEffect(() => {
    if (!visible) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, [visible]);

  // Escape closes (kept on window so it fires regardless of focus position).
  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isDrawerOpen, closeDrawer]);

  if (!visible) return null;

  // Keep Tab focus inside the dialog.
  const trapFocus = (e: ReactKeyboardEvent<HTMLElement>) => {
    if (e.key !== "Tab") return;
    const focusables =
      asideRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const lineItems = DONUTS.filter((d) => (items[d.id] ?? 0) > 0).map((d) => ({
    ...d,
    qty: items[d.id],
  }));
  const subtotal = lineItems.reduce((sum, it) => sum + it.qty * it.price, 0);
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const delivery = subtotal === 0 || isFreeDelivery ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;
  const isEmpty = lineItems.length === 0;

  return (
    <>
      {/* Scrim lifted above the z-50 headers (and darkened) for the modal. */}
      <PageDimOverlay
        isClosing={isClosing}
        onClick={closeDrawer}
        className="z-[60] bg-black/40"
      />
      <aside
        ref={asideRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-drawer-title"
        onKeyDown={trapFocus}
        className={cn(
          "order-drawer fixed inset-y-0 right-0 z-[70] flex w-[min(27.5rem,92vw)] flex-col border-l-2 border-foreground bg-background",
          isClosing && "is-closing"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-foreground p-5">
          <h2 id="order-drawer-title" className="font-display text-2xl">
            Your box
          </h2>
          <button
            ref={closeButtonRef}
            onClick={closeDrawer}
            aria-label="Close your box"
            className="grid size-9 place-items-center rounded-full border-2 border-foreground bg-white transition-transform duration-150 active:scale-90"
          >
            <X className="size-4" strokeWidth={3} />
          </button>
        </div>

        {/* Line items / empty state */}
        <div className="flex-1 overflow-y-auto p-5">
          {isEmpty ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="text-5xl opacity-50" aria-hidden>
                🍩
              </span>
              <p className="font-mono text-xs leading-relaxed text-foreground/60">
                your box is empty.
                <br />
                add a donut from the menu.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {lineItems.map((it) => (
                <li
                  key={it.id}
                  className="flex items-center gap-3.5 rounded-2xl border-2 border-foreground bg-white p-3"
                >
                  <div
                    className="grid size-15 shrink-0 place-items-center overflow-hidden rounded-xl"
                    style={{ backgroundColor: `hsl(${it.hue} 70% 88%)` }}
                  >
                    <Image
                      src={DonutSquare}
                      alt=""
                      width={60}
                      height={60}
                      style={{ filter: `hue-rotate(${it.hue - 320}deg)` }}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-sm">{it.name}</p>
                    <p className="font-mono text-2xs text-foreground/60">
                      ${it.price.toFixed(2)} ea
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => removeItem(it.id)}
                      aria-label={`Remove one ${it.name}`}
                      className="grid size-7 place-items-center rounded-full border-2 border-foreground bg-white transition-transform duration-150 active:scale-90"
                    >
                      <Minus className="size-3.5" strokeWidth={3} />
                    </button>
                    <span className="min-w-5 text-center font-display text-sm tabular-nums">
                      {it.qty}
                    </span>
                    <button
                      onClick={() => addItem(it.id)}
                      aria-label={`Add one ${it.name}`}
                      className="grid size-7 place-items-center rounded-full border-2 border-foreground bg-foreground text-background transition-transform duration-150 active:scale-90"
                    >
                      <Plus className="size-3.5" strokeWidth={3} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summary + checkout */}
        <div className="border-t-2 border-foreground bg-white p-5">
          <dl className="mb-3 space-y-1.5 font-mono text-xs text-foreground/70">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>
                Delivery{" "}
                {isFreeDelivery && (
                  <em className="text-primary not-italic">(free)</em>
                )}
              </dt>
              <dd className="tabular-nums">${delivery.toFixed(2)}</dd>
            </div>
          </dl>
          <div className="mb-4 flex items-baseline justify-between font-display text-2xl">
            <span>Total</span>
            <span className="tabular-nums">${total.toFixed(2)}</span>
          </div>
          {/* Inert like the Shop / footer CTAs — no checkout backend yet. */}
          <button
            type="button"
            disabled={isEmpty}
            className="w-full rounded-full border-2 border-foreground bg-primary py-4 font-display text-base text-primary-foreground shadow-brutal-sm transition active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:border-foreground/30 disabled:bg-muted disabled:text-foreground/40 disabled:shadow-none"
          >
            Checkout →
          </button>
        </div>
      </aside>
    </>
  );
};
