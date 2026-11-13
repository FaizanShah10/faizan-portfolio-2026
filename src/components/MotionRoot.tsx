"use client";

import { useEffect } from "react";

// Matches the delay of the CSS failsafe (`motion-failsafe` in globals.css).
const FAILSAFE_MS = 3000;
// Caps the stagger so a large batch never makes content wait noticeably.
const MAX_STAGGER_STEPS = 6;
// Page timing only says the failsafe has fired on the first page of a visit.
let hasMounted = false;

/**
 * Drives every `data-reveal` element on the page from one IntersectionObserver.
 * It only flips attributes, so reveals cause no React re-renders. Timing and
 * appearance live in the motion tokens in globals.css.
 *
 * Elements are observed individually and staggered by their position in each
 * observer batch, rather than by a fixed index. A row that enters together
 * cascades; a stack on mobile that enters one by one gets no piled-up delay,
 * and nothing animates before it is actually on screen.
 */
export function MotionRoot() {
  useEffect(() => {
    const isFirstPage = !hasMounted;
    hasMounted = true;

    // Too late (the failsafe has already shown the content) or not wanted.
    if (
      (isFirstPage && performance.now() >= FAILSAFE_MS) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let step = 0;
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.setProperty(
              "--reveal-order",
              String(Math.min(step++, MAX_STAGGER_STEPS)),
            );
            el.dataset.revealed = "animate";
            observer.unobserve(el);
          } else if (entry.boundingClientRect.bottom <= 0) {
            // Already scrolled past (e.g. restored scroll position on refresh).
            // Show it as-is so scrolling back up never waits on a fade.
            el.dataset.revealed = "instant";
            observer.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document
      .querySelectorAll("[data-reveal]:not([data-revealed])")
      .forEach((el) => observer.observe(el));

    const root = document.documentElement;
    root.dataset.motion = "ready";

    // iOS Safari only applies :active once a touch listener exists.
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("touchstart", noop);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
