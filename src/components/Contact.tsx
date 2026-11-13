import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { contact, personal } from "@/lib/content";
import { CopyEmail } from "./CopyEmail";
import { IceTorusKnot } from "./IceTorusKnot";

const toneClass = {
  dim: "text-ink/[0.28]",
  mid: "text-ink/[0.55]",
  bright: "text-ink",
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-scene relative overflow-visible px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="relative mx-auto grid max-w-content gap-16 lg:grid-cols-2 lg:items-center lg:gap-10">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <p
            data-reveal
            className="font-mono text-xs tracking-[0.2em] text-ink-faint"
          >
            {contact.index}
          </p>

          <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:text-[3.35rem]">
            {contact.lines.map((line) => (
              <span
                key={line.text}
                data-reveal
                className={`block ${toneClass[line.tone]}`}
              >
                {line.text}
              </span>
            ))}
          </h2>

          <p
            data-reveal
            className="max-w-md font-serif text-lg leading-relaxed text-ink/90 sm:text-xl"
          >
            {contact.body}{" "}
            <em className="italic text-ink">{contact.bodyItalic}</em>
          </p>
        </div>

        {/* Right column */}
        <div className="relative flex flex-col items-start gap-8 lg:items-center">
          <div className="pointer-events-none relative z-20 hidden w-full overflow-visible md:block">
            <IceTorusKnot className="mx-auto w-full max-w-[18rem] lg:max-w-[20rem]" />
          </div>

          <div className="relative z-10 flex w-full max-w-sm flex-col items-start gap-5 lg:items-center">
            {/* <div
              data-reveal
              className="flex flex-col items-start gap-5 lg:items-center"
            >
              <a
                href={contact.ctaPrimary.href}
                className="btn btn-primary group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bg"
              >
                <CalendarCheck className="h-4 w-4" />
                {contact.ctaPrimary.label}
                <ArrowRight className="nudge-x h-4 w-4" />
              </a>

              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
                {contact.callNote}
              </p>
            </div> */}

            <div
              data-reveal
              className="flex w-full flex-col gap-3 border-t border-border pt-6 lg:items-center lg:text-center"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
                Email
              </p>
              <CopyEmail email={personal.email} />
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="link pressable inline-flex items-center gap-2 self-start text-sm text-ink-muted hover:text-ink lg:self-center"
              >
                <Phone className="h-3.5 w-3.5" />
                {personal.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
