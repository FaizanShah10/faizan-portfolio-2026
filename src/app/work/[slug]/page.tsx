import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { MotionRoot } from "@/components/MotionRoot";
import { Nav } from "@/components/Nav";
import { ProjectFigureCaption, ProjectFrame } from "@/components/ProjectVisual";
import { projects, testimonials } from "@/lib/content";

// Every case study is known at build time, so anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

// A labelled chapter of the case study, on the same grid as the Journey.
function Chapter({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      data-reveal
      className="grid gap-4 border-t border-border pt-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{title}</h2>
      <div className="flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-ink-muted sm:text-lg">
        {children}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const position = projects.findIndex((p) => p.slug === slug);
  if (position < 0) notFound();

  const project = projects[position];
  const next = projects[(position + 1) % projects.length];
  const testimonial = testimonials.find((t) => t.name === project.testimonialBy);

  return (
    <>
      <MotionRoot />
      <Nav />
      <main className="flex-1 overflow-clip px-6 pt-10 pb-20 sm:px-10 sm:pt-16 sm:pb-28">
        <div className="mx-auto flex max-w-content flex-col gap-16 sm:gap-24">
          <header className="flex flex-col gap-10 sm:gap-14">
            <Link
              href="/#work"
              className="link pressable inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              All work
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
              <div data-reveal className="flex flex-col gap-6">
                <p className="flex items-center gap-3 text-sm font-medium text-accent">
                  <span className="font-serif text-2xl leading-none italic tabular-nums">
                    {project.index}
                  </span>
                  {project.category}
                </p>
                <h1 className="balance font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl xl:text-6xl">
                  {project.name}
                </h1>
                <p className="max-w-lg font-serif text-2xl leading-snug text-ink-muted italic">
                  {project.tagline}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary group mt-1 inline-flex w-fit items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent"
                  >
                    Visit live site
                    <ArrowUpRight aria-hidden="true" className="nudge-ne h-4 w-4" />
                  </a>
                )}
              </div>

              <figure data-reveal="soft" className="work-visual relative isolate">
                <ProjectFrame
                  image={project.cover}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  priority
                />
                <ProjectFigureCaption index={project.index} label={project.visualLabel} />
              </figure>
            </div>
          </header>

          <div className="flex flex-col gap-12 sm:gap-16">
            <Chapter title={project.problem ? "The problem" : "Overview"}>
              <p className="text-ink">{project.problem ?? project.summary}</p>
            </Chapter>

            <Chapter title="My role">
              <p>{project.role}</p>
            </Chapter>

            <Chapter title={project.highlightsHeading ?? "What it does"}>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter title="Technology">
              <p>{project.stack.join(" / ")}</p>
            </Chapter>

            {project.sections?.map(({ heading, body }) => (
              <Chapter key={heading} title={heading}>
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Chapter>
            ))}

            {project.gallery && (
              <Chapter title="Screens">
                {project.gallery.map(({ src, alt }) => (
                  <div
                    key={src}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-strong bg-bg-elevated"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 768px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </Chapter>
            )}

            {testimonial && (
              <Chapter title="From the client">
                <blockquote className="font-serif text-2xl leading-snug text-ink italic">
                  “{testimonial.quote}”
                </blockquote>
                <p className="text-sm">
                  <span className="font-medium text-ink">{testimonial.name}</span>, {testimonial.title}
                </p>
              </Chapter>
            )}
          </div>

          <Link
            data-reveal
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-3 border-t border-border pt-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Next project
            </span>
            <span className="inline-flex items-center gap-4 font-heading text-3xl font-semibold text-ink transition-colors duration-[var(--motion-dur-ui)] group-hover:text-accent sm:text-5xl">
              {next.name}
              <ArrowRight aria-hidden="true" className="nudge-x h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
