"use client";

import { useEffect, useRef } from "react";

/**
 * A soft accent light that trails the cursor (`.cursor-glow` in globals.css).
 * It writes straight to the element, so moving the cursor causes no re-renders.
 * Lives in the root layout, so it carries across page navigations.
 */
export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glow.current;
    if (
      !el ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    ) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      if (!el.dataset.visible) {
        // Commit the position first, so it appears at the cursor instead of sliding to it.
        el.getBoundingClientRect();
        el.dataset.visible = "true";
      }
    };
    const onLeave = () => delete el.dataset.visible;

    const root = document.documentElement;
    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={glow} aria-hidden="true" className="cursor-glow" />;
}
