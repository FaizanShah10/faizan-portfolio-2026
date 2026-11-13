import Image from "next/image";
import { about, personal } from "@/lib/content";

const { portrait } = about;

// A drafting-sheet registration mark.
function RegMark({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`absolute h-3 w-3 stroke-ink-faint ${className}`}
    >
      <path d="M6 0v12M0 6h12" fill="none" strokeWidth="1" />
    </svg>
  );
}

/**
 * The portrait as an annotated figure: the cutout stands in an arch, and the
 * role and stack are called out beside it like labels on a technical drawing.
 * Positions are percentages of the frame, so it scales as one piece.
 */
export function AboutPortrait() {
  return (
    <figure
      data-reveal="soft"
      className="group mx-auto w-full max-w-[34rem] lg:mr-0"
    >
      <div className="relative aspect-[100/112]">
        <RegMark className="top-0 left-0" />
        <RegMark className="right-0 bottom-3" />

        {/* Hand-set role label with an arrow pointing back at the figure. */}
        <div
          data-reveal
          className="absolute top-[3%] left-[66%] font-serif text-xl leading-[1.05] text-ink italic sm:text-3xl"
        >
          {portrait.role.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <svg
            aria-hidden="true"
            viewBox="0 0 48 40"
            className="mt-1.5 h-7 w-8 fill-none stroke-accent sm:mt-2 sm:h-10 sm:w-12"
          >
            <path
              pathLength={1}
              className="ill-draw"
              d="M40 3C43 20 30 33 7 30"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              className="ill-fade"
              d="M14 23 6 30l9 6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 aspect-[2/3] w-[68%] sm:w-[72%]">
          {/* Offset outline, like a construction line behind the solid shape. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 -translate-y-2.5 rounded-t-full border border-b-0 border-dashed border-border-strong transition-transform duration-500 ease-[var(--motion-ease)] motion-safe:group-hover:translate-x-3.5 motion-safe:group-hover:-translate-y-3.5"
          />
          <div className="portrait-arch absolute inset-0 overflow-hidden rounded-t-full">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(min-width: 640px) 392px, 68vw"
              className="origin-bottom object-contain object-bottom transition-transform duration-700 ease-[var(--motion-ease)] motion-safe:group-hover:scale-[1.025]"
            />
          </div>
        </div>

        {/* The full stack, called out top to bottom. */}
        <ul className="absolute top-[37%] right-0 bottom-[6%] left-[72%] flex flex-col justify-between border-l border-border-strong sm:left-[78%] lg:left-[76%] xl:left-[78%]">
          {portrait.stack.map((item) => (
            <li key={item.layer} data-reveal className="relative pl-3 sm:pl-4">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[4px] h-[7px] w-[7px] rounded-full border border-accent bg-bg transition-colors duration-[var(--motion-dur-ui)] group-hover:bg-accent"
              />
              <span className="block font-heading text-sm font-semibold text-ink">
                {item.layer}
              </span>
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="block text-[10px] leading-snug text-ink-muted sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="flex items-center justify-between gap-4 border-t border-border-strong pt-3 text-[11px] font-medium tracking-[0.16em] text-ink-muted uppercase">
        <span>{personal.name}</span>
        <span>{personal.location}</span>
      </figcaption>
    </figure>
  );
}
