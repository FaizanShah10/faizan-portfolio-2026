import { ArrowDown } from "lucide-react";
import { HeroParallax } from "@/components/HeroParallax";
import { hero } from "@/lib/content";

// The entrance is pure CSS (`data-hero` in globals.css): it starts with the
// first paint, doesn't wait for hydration and runs once per page load.
export function Hero() {
  return (
    <section
      id="top"
      className="hero-scene relative flex min-h-[88svh] flex-col overflow-hidden px-6 pb-10 pt-16 sm:min-h-[100svh] sm:px-10 sm:pb-20 sm:pt-32"
    >
      <HeroParallax />

      {/* Faint name watermark — text-only stand-in for the portrait layer */}
      <div
        aria-hidden="true"
        data-hero="fade"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="hero-drift -translate-y-[7vh] select-none font-heading text-[22vw]  font-semibold leading-none tracking-tight text-accent/[0.09] sm:text-[22vw]">
          Faizan
        </span>
      </div>

      <div className="hero-parallax hero-exit relative mx-auto flex w-full max-w-content flex-1 flex-col pb-2 sm:pb-[6vh]">
        {/* Top-left: badge + headline */}
        <div className="flex flex-1 flex-col justify-center pt-2 sm:pt-6 lg:max-w-[58%] lg:justify-end lg:pb-8 lg:pt-10">
          <p
            data-hero="1"
            className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm"
          >
            {hero.eyebrow}
          </p>
          <h1 className="font-heading text-[2.6rem] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.75rem]">
            {hero.lines.map((row, i) => (
              <span key={i} data-hero={i + 2} className="block">
                {row.parts.map((part, j) =>
                  part.style === "serif" ? (
                    <em
                      key={j}
                      className="font-serif text-[1.08em] font-normal italic"
                    >
                      {part.text}
                    </em>
                  ) : (
                    <span key={j}>{part.text}</span>
                  ),
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* Bottom-right: bio + CTAs */}
        <div className="mt-8 flex max-w-md flex-col gap-7 self-start sm:mt-12 lg:mt-0 lg:ml-auto lg:self-end">
          <p
            data-hero="4"
            className="text-[15px] leading-relaxed text-ink/90 sm:text-base"
          >
            {hero.subhead}
          </p>

          <div
            data-hero="5"
            className="flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <a
              href={hero.ctaPrimary.href}
              className=" group inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-md bg-accent text-black"
            >
              {hero.ctaPrimary.label}
              <ArrowDown className="nudge-y h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
