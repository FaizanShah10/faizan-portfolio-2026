import Image from "next/image";
import type { ProjectImage } from "@/lib/content";

/** The 16:10 frame every project visual shares. */
export function ProjectFrame({
  image,
  sizes,
  priority,
}: {
  image: ProjectImage;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="relative">
      {/* Offset outline, the construction line from the About portrait. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-2.5 -translate-y-2.5 rounded-xl border border-dashed border-border-strong transition-transform duration-500 ease-[var(--motion-ease)] motion-safe:group-hover:translate-x-3.5 motion-safe:group-hover:-translate-y-3.5"
      />
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-strong bg-bg-elevated transition-colors duration-500 group-hover:border-accent/50">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top brightness-[0.9] transition-[filter,transform] duration-700 ease-[var(--motion-ease)] group-hover:brightness-100 motion-safe:group-hover:scale-[1.015]"
        />
      </div>
    </div>
  );
}

/** A frame with a caption saying what it shows, styled like the About figure. */
export function ProjectFigureCaption({ index, label }: { index: string; label: string }) {
  return (
    <figcaption className="mt-4 flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.16em] text-ink-muted uppercase">
      <span>Fig. {index}</span>
      <span>{label}</span>
    </figcaption>
  );
}
