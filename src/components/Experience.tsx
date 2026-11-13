import { education, experience, journeyIntro } from "@/lib/content";
import { JourneyIllustration } from "./JourneyIllustrations";
import { SectionHeading } from "./SectionHeading";

const ROW = "relative grid gap-6 pl-7 sm:pl-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12";
const NUMERAL = "block font-serif text-4xl leading-none italic tabular-nums";

// A milestone on the rail; only the current role is filled.
function Marker({ current = false }: { current?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-3 left-0 h-2 w-2 -translate-x-1/2 rounded-full border ${current ? "border-accent bg-accent" : "border-ink-faint bg-bg"}`}
    />
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="journey-scene section-band relative isolate px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto flex max-w-content flex-col gap-14 sm:gap-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <SectionHeading
            kicker="The journey"
            heading={
              <>
                Where I&apos;ve put this into{" "}
                <em className="font-serif text-[1.08em] font-normal italic">practice.</em>
              </>
            }
          />
          <p data-reveal className="max-w-xl text-base leading-relaxed text-ink-muted">
            {journeyIntro}
          </p>
        </div>

        <ol className="journey-rail relative flex flex-col gap-16 lg:gap-24">
          {experience.map((role, i) => {
            const current = i === 0;
            return (
              <li key={role.org} className={ROW}>
                <Marker current={current} />
                <div data-reveal className="flex flex-col gap-3">
                  <span className={`${NUMERAL} ${current ? "text-accent" : "text-ink-faint"}`}>
                    {role.index}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                    {role.range}
                  </p>
                </div>

                <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-16">
                  <article data-reveal className="flex max-w-3xl flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-heading text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                        {role.role}
                      </h3>
                      <p className="text-base font-medium text-ink-muted">{role.org}</p>
                    </div>

                    <p className="text-lg leading-relaxed text-ink">{role.overview}</p>

                    <dl className="flex flex-col gap-4">
                      {role.contributions.map(({ label, text }) => (
                        <div
                          key={label}
                          className="flex flex-col gap-1 sm:grid sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4"
                        >
                          <dt className="pt-0.5 font-heading text-[13px] font-medium text-ink">
                            {label}
                          </dt>
                          <dd className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                            {text}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <p className="text-[13px] leading-relaxed text-ink-muted">
                      <span className="sr-only">Technologies: </span>
                      {role.stack.join("  /  ")}
                    </p>
                  </article>

                  <JourneyIllustration
                    name={role.illustration}
                    className="hidden w-full xl:block"
                  />
                </div>
              </li>
            );
          })}

          {education.items.map((item) => (
            <li key={item.org} className={ROW}>
              <Marker />
              <div data-reveal className="flex flex-col gap-3">
                <span className={`${NUMERAL} text-ink-faint`}>{item.index}</span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                  {item.range}
                </p>
              </div>
              <div data-reveal className="flex max-w-3xl flex-col gap-1.5">
                <h3 className="font-heading text-xl font-semibold leading-snug text-ink">
                  {item.org}
                </h3>
                <p className="text-base text-ink-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
