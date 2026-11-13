import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectFigureCaption, ProjectFrame } from "./ProjectVisual";

const META_LABEL = "text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted";

/** One project on the landing page: the context on the left, the product on the right. */
export function ProjectShowcase({ project }: { project: Project }) {
  const href = `/work/${project.slug}`;
  return (
    <article className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24">
      <div data-reveal className="flex flex-col gap-6">
        <p className="flex items-center gap-3 text-sm font-medium text-accent">
          <span className="font-serif text-2xl leading-none italic tabular-nums">{project.index}</span>
          {project.category}
        </p>

        <h3 className="balance font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink xl:text-5xl">
          {project.name}
        </h3>

        <p className="max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
          {project.summary}
        </p>

        <dl className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-5">
          <div className="flex flex-col gap-1.5">
            <dt className={META_LABEL}>My role</dt>
            <dd className="text-sm font-medium text-ink">{project.roleShort}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className={META_LABEL}>Built with</dt>
            <dd className="text-sm font-medium text-ink">{project.keyStack.join(" / ")}</dd>
          </div>
        </dl>

        <Link
          href={href}
          className="btn btn-primary group mt-1 inline-flex w-fit items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent"
        >
          View Case Study
          <span className="sr-only">: {project.name}</span>
          <ArrowRight aria-hidden="true" className="nudge-x h-4 w-4" />
        </Link>
      </div>

      <figure data-reveal="soft" className="work-visual relative isolate">
        {/* The CTA is the keyboard and screen reader route; this is a larger target for a pointer. */}
        <Link href={href} tabIndex={-1} aria-hidden="true" className="group block">
          <ProjectFrame image={project.cover} sizes="(min-width: 1024px) 58vw, 100vw" />
        </Link>
        <ProjectFigureCaption index={project.index} label={project.visualLabel} />
      </figure>
    </article>
  );
}
