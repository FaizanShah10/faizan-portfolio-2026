import { skills } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="section-band relative px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-content flex-col gap-16">
        <SectionHeading
          kicker={skills.heading}
          heading="The stack behind all of it."
        />

        {/* The panel rises as one surface; its contents cascade inside it. */}
        <div
          data-reveal="soft"
          className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.groups.map((group) => (
            <div key={group.label} className="bg-bg-elevated p-6">
              <div data-reveal className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {group.label}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
