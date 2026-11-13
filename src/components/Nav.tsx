"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { nav, personal } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  // A sentinel at the top of the page means this only fires when the state
  // actually changes, rather than running on every scroll frame.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-6 w-px"
      />
      <header className="sticky top-0 z-50 w-full">
        <div
          className={`border-b transition-colors duration-300 ${
            scrolled || open
              ? "border-border bg-bg/[0.82] backdrop-blur-md"
              : "border-transparent"
          }`}
        >
          <nav
            data-hero="fade"
            className="mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-10"
          >
            <Link
              href="/#top"
              onClick={() => setOpen(false)}
              className="pressable inline-block font-heading text-sm font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Syed Faizan
            </Link>

            <ul className="hidden items-center gap-10 md:flex">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link pressable inline-block text-sm font-medium text-ink-muted hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={personal.resumeHref}
              download
              className="btn btn-secondary hidden items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink md:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="pressable relative flex h-10 w-16 items-center justify-center md:hidden"
            >
              <span
                aria-hidden="true"
                className={`absolute h-[1.5px] w-9 origin-center bg-ink transition-transform duration-300 ease-[var(--motion-ease)] ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-[1.5px] w- 9 origin-center bg-ink transition-transform duration-300 ease-[var(--motion-ease)] ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      <div
        id="mobile-menu"
        data-open={open}
        inert={!open}
        className="mobile-menu fixed inset-0 z-40 md:hidden"
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="mobile-menu-backdrop absolute inset-0 bg-bg/40"
        />

        <div className="mobile-menu-panel absolute inset-y-0 right-0 flex w-full flex-col bg-bg">
          <div className="flex flex-1 flex-col justify-center px-8 pb-10 pt-24 sm:px-12">
            <ul className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  className="mobile-menu-item"
                  style={{ "--i": i } as CSSProperties}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3"
                  >
                    <span className="font-heading text-4xl font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-accent sm:text-5xl">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
              <li
                className="mobile-menu-item mt-6"
                style={{ "--i": nav.length } as CSSProperties}
              >
                <a
                  href={personal.resumeHref}
                  download
                  onClick={() => setOpen(false)}
                  className="btn btn-secondary inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-ink"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div
            className="mobile-menu-item border-t border-border px-8 py-6 sm:px-12"
            style={{ "--i": nav.length + 1 } as CSSProperties}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              {personal.location}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="mt-2 block text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {personal.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
