"use client";

import { useEffect } from "react";

/**
 * Feeds the cursor's position to the hero as `--hero-pointer-x` and
 * `--hero-pointer-y` (-1 at the left and top edges of the window, 1 at the right
 * and bottom). `.hero-parallax` in globals.css turns them into movement, so
 * this causes no React re-renders.
 *
 * Listens on the window rather than the hero so that passing over the fixed
 * nav doesn't interrupt the effect.
 */
export function HeroParallax() {
  useEffect(() => {
    const hero = document.getElementById("top");
    if (
      !hero ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    ) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      hero.style.setProperty("--hero-pointer-x", x.toFixed(3));
      hero.style.setProperty("--hero-pointer-y", y.toFixed(3));
    };
    const onLeave = () => {
      hero.style.setProperty("--hero-pointer-x", "0");
      hero.style.setProperty("--hero-pointer-y", "0");
    };

    const root = document.documentElement;
    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      hero.style.removeProperty("--hero-pointer-x");
      hero.style.removeProperty("--hero-pointer-y");
    };
  }, []);

  return null;
}
