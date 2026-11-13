import { projects } from "@/lib/content";
import { ProjectShowcase } from "./ProjectShowcase";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="section-band relative overflow-clip px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-content flex-col gap-16 sm:gap-24">
        <SectionHeading
          kicker="Selected work"
          heading={
            <>
              A few systems I&apos;ve taken from problem to{" "}
              <em className="font-serif text-[1.08em] font-normal italic">production.</em>
            </>
          }
        />

        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {projects.map((project) => (
            <ProjectShowcase key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
