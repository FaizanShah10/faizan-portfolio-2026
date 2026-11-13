import { about, type RichText } from "@/lib/content";
import { AboutPortrait } from "./AboutPortrait";
import { PrincipleIllustration } from "./PrincipleIllustrations";
import { SectionHeading } from "./SectionHeading";

function Rich({ parts }: { parts: RichText }) {
  return parts.map((part, i) => {
    if (part.style === "serif") {
      return (
        <em key={i} className="font-serif text-[1.08em] font-normal italic">
          {part.text}
        </em>
      );
    }
    if (part.style === "strong") {
      return (
        <strong key={i} className="font-medium text-ink">
          {part.text}
        </strong>
      );
    }
    return <span key={i}>{part.text}</span>;
  });
}

export function About() {
  return (
    <section
      id="about"
      className="about-chapter relative isolate px-6 pt-28 pb-20 sm:px-10  sm:pb-28 lg:pt-26"
    >
      {/* The raised surface that rises over the hero (see globals.css). */}
      <div aria-hidden="true" className="about-depth">
        <div className="about-crest" />
        <div className="about-body" />
        <div className="about-ambient" />
        <div className="about-drafting" />
      </div>

      <div className="mx-auto flex max-w-content flex-col gap-24 sm:gap-32 lg:gap-40">
        {/* Part one: who I am and how I think */}
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker={about.kicker}
              heading={<Rich parts={about.heading} />}
            />
            <div className="flex max-w-xl flex-col gap-5">
              <p
                data-reveal
                className="text-lg leading-relaxed text-ink sm:text-xl"
              >
                <Rich parts={about.lead} />
              </p>
              <p
                data-reveal
                className="text-base leading-relaxed text-ink-muted"
              >
                <Rich parts={about.body} />
              </p>
            </div>
            <p
              data-reveal
              className="balance max-w-md border-t border-border pt-5 font-serif text-2xl leading-snug text-ink-muted italic"
            >
              {about.closer}
            </p>
          </div>

          <AboutPortrait />
        </div>

        {/* Part two: how I approach engineering */}
        <div className="flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-4">
            <p
              data-reveal
              className="text-sm font-medium tracking-[0.2em] text-accent uppercase"
            >
              {about.principlesKicker}
            </p>
            <h3
              data-reveal
              className="balance max-w-xl font-heading text-2xl font-semibold leading-[1.2] text-ink sm:text-3xl"
            >
              <Rich parts={about.principlesHeading} />
            </h3>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:grid-cols-4 xl:gap-x-8">
            {about.principles.map((principle) => (
              <article
                key={principle.index}
                data-reveal
                className="group relative grid grid-cols-[minmax(0,1fr)_8.5rem] items-start gap-x-4 gap-y-3 border-t border-border pt-5 sm:flex sm:flex-col sm:gap-5"
              >
                {/* The shared rule fills with the accent on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[var(--motion-ease)] group-hover:scale-x-100"
                />
                <div className="flex flex-col gap-2 sm:contents">
                  <span className="font-serif text-3xl leading-none text-ink-faint italic tabular-nums transition-colors duration-[var(--motion-dur-ui)] group-hover:text-accent">
                    {principle.index}
                  </span>
                  <h4 className="font-heading text-lg font-semibold leading-snug text-ink sm:order-last">
                    {principle.title}
                  </h4>
                </div>
                <PrincipleIllustration
                  name={principle.illustration}
                  className="w-full sm:order-none"
                />
                <p className="col-span-2 text-sm leading-relaxed text-ink-muted sm:order-last sm:-mt-2 sm:text-[15px]">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
