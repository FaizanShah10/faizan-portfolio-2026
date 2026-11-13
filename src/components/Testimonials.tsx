import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="testimonials-scene section-band relative isolate px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-content flex-col gap-16">
        <SectionHeading
          kicker="What people say"
          heading="A few words from people I've built with."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-reveal="soft"
              className="card-lift flex flex-col gap-6 rounded-2xl border border-border bg-bg-elevated p-7 hover:border-border-strong"
            >
              <Quote className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-muted">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-faint">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
