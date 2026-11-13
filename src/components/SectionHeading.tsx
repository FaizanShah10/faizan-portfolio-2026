import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  heading,
  align = "left",
}: {
  kicker: string;
  heading: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <div
        data-reveal
        className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] text-accent uppercase"
      >
        <span>{kicker}</span>
      </div>
      <h2
        data-reveal
        className="balance max-w-2xl font-heading text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl"
      >
        {heading}
      </h2>
    </div>
  );
}
