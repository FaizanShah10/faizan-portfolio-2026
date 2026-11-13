import { footer, personal } from "@/lib/content";
import { LocalTime } from "./LocalTime";

function ExtMark() {
  return (
    <span aria-hidden="true" className="nudge-ne ml-1">
      ↗
    </span>
  );
}

const linkClass =
  "link pressable group inline-block text-sm text-ink-muted hover:text-ink";

export function Footer() {
  return (
    <footer className="footer-scene overflow-clip border-t border-border px-6 pb-6 pt-16 sm:px-10 sm:pt-20">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div data-reveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
              Index
            </p>
            <ul className="flex flex-col gap-2.5">
              {footer.index.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer", download: item.label === "Resume" }
                      : {})}
                    className={linkClass}
                  >
                    {item.label}
                    {item.external ? <ExtMark /> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              {footer.connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className={linkClass}
                  >
                    {item.label}
                    <ExtMark />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
              Based in
            </p>
            <p className="mb-2 text-sm text-ink">{personal.locationShort}</p>
            <LocalTime />
          </div>

          <div data-reveal>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
              © {footer.year}
            </p>
            <p className="text-sm text-ink">{personal.name}</p>
            <p className="mt-1 text-sm text-ink-faint">All rights reserved</p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 select-none overflow-clip sm:mt-20"
        >
          <p className="footer-wordmark whitespace-nowrap text-center font-heading text-[14vw] font-bold leading-none tracking-[-0.04em] text-ink/[0.07] sm:text-[12vw] lg:text-[10.5vw]">
            SYED FAIZAN
          </p>
        </div>
      </div>
    </footer>
  );
}
