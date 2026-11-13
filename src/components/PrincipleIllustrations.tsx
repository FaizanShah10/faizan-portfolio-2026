import type { ReactNode } from "react";

/**
 * One hand-drawn diagram per engineering principle, all on the same 240x160
 * grid and stroke. Conventions (animations live in globals.css):
 *   ill-draw   line that draws itself in on reveal (needs pathLength={1})
 *   ill-fade   detail that fades in on reveal
 *   ill-trace  accent overlay that draws along a line on hover (pathLength={1})
 */

export const LINE = "ill-draw stroke-ink-muted/55";
export const ACCENT = "ill-draw stroke-accent";

export function Label({
  x,
  y,
  anchor = "middle",
  children,
}: {
  x: number;
  y: number;
  anchor?: "start" | "middle" | "end";
  children: ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className="ill-fade fill-ink-muted stroke-none font-heading text-[8.5px] max-sm:hidden"
    >
      {children}
    </text>
  );
}

export function Node({ x, y, accent = false }: { x: number; y: number; accent?: boolean }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={accent ? 4.5 : 3.5}
      className={`ill-fade ${accent ? "fill-accent stroke-accent" : "fill-bg stroke-ink-muted"}`}
    />
  );
}

// The loop has no finish line: requirements through to improvement, and round again.
function Ownership() {
  const loop = "M68 40H172A40 40 0 0 1 172 120H68A40 40 0 0 1 68 40Z";
  return (
    <>
      <path pathLength={1} d={loop} className={LINE} />
      <path pathLength={1} d={loop} className="ill-trace" />
      <Node x={68} y={40} accent />
      <Node x={172} y={40} />
      <Node x={212} y={80} />
      <Node x={172} y={120} />
      <Node x={68} y={120} />
      <Node x={28} y={80} />
      <Label x={68} y={28}>Requirements</Label>
      <Label x={172} y={28}>Architecture</Label>
      <Label x={203} y={83} anchor="end">Build</Label>
      <Label x={172} y={138}>Test</Label>
      <Label x={68} y={138}>Deploy</Label>
      <Label x={37} y={83} anchor="start">Improve</Label>
    </>
  );
}

// Load climbs and spikes; latency stays flat under the limit.
function Production() {
  const load = "M28 126 50 118 68 122 90 96 108 106 130 72 146 90 168 56 184 78 212 38";
  return (
    <>
      <path pathLength={1} d="M28 22V134H216" className={LINE} />
      <path d="M28 30H216" strokeDasharray="3 4" className="ill-fade stroke-ink-muted/55" />
      <path pathLength={1} d={load} className={LINE} strokeLinejoin="round" />
      <path pathLength={1} d={load} className="ill-trace" strokeLinejoin="round" />
      <path pathLength={1} d="M28 112H212" className={ACCENT} />
      <Node x={212} y={112} accent />
      <Label x={216} y={24} anchor="end">Limit</Label>
      <Label x={122} y={70} anchor="end">Load</Label>
      <Label x={212} y={128} anchor="end">Latency</Label>
    </>
  );
}

// A written brief passes through an arrow and comes out as connected parts.
function Requirements() {
  const wires = "M144 52V84M164 41H202V57M164 95H202V87";
  return (
    <>
      <path pathLength={1} d="M22 36H60L74 50V108H22Z" className={LINE} strokeLinejoin="round" />
      <path pathLength={1} d="M60 36V50H74" className={LINE} strokeLinejoin="round" />
      <path d="M31 62H65M31 72H65M31 92H52" className="ill-fade stroke-ink-muted/55" />
      <path d="M31 82H58" className="ill-fade stroke-accent" />

      <path pathLength={1} d="M84 72H112" className={ACCENT} />
      <path d="M106 66 113 72 106 78" className="ill-fade stroke-accent" strokeLinejoin="round" />

      <path pathLength={1} d={wires} className={LINE} />
      <path pathLength={1} d={wires} className="ill-trace" />
      <rect pathLength={1} x="124" y="30" width="40" height="22" rx="4" className={LINE} />
      <rect pathLength={1} x="124" y="84" width="40" height="22" rx="4" className="ill-draw fill-accent-soft stroke-accent" />
      <path
        pathLength={1}
        d="M184 63C184 54 220 54 220 63V81C220 90 184 90 184 81ZM184 63C184 72 220 72 220 63"
        className={LINE}
      />

      <Label x={144} y={44}>UI</Label>
      <Label x={144} y={98}>API</Label>
      <Label x={202} y={81}>DB</Label>
      <Label x={48} y={128}>Brief</Label>
      <Label x={172} y={128}>Working system</Label>
    </>
  );
}

// Two branches leave main and both land back on it: a clean merge.
function Team() {
  const mine = "M76 118C96 118 92 76 112 76H128C148 76 144 118 164 118";
  const theirs = "M36 118C60 118 52 40 76 40H164C188 40 180 118 204 118";
  return (
    <>
      <path pathLength={1} d="M14 118H226" className={LINE} />
      <path pathLength={1} d={theirs} className={LINE} />
      <path pathLength={1} d={theirs} className="ill-trace" />
      <path pathLength={1} d={mine} className={ACCENT} />
      <Node x={36} y={118} />
      <Node x={76} y={118} />
      <Node x={120} y={118} />
      <Node x={164} y={118} accent />
      <Node x={204} y={118} accent />
      <Node x={100} y={40} />
      <Node x={140} y={40} />
      <Node x={120} y={76} />
      <Label x={120} y={30}>Teammate</Label>
      <Label x={120} y={66}>Mine</Label>
      <Label x={14} y={136} anchor="start">Main</Label>
      <Label x={204} y={136}>Merged</Label>
    </>
  );
}

const illustrations = {
  ownership: Ownership,
  production: Production,
  requirements: Requirements,
  team: Team,
};

export function PrincipleIllustration({
  name,
  className,
}: {
  name: keyof typeof illustrations;
  className?: string;
}) {
  const Illustration = illustrations[name];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 160"
      fill="none"
      strokeLinecap="round"
      className={`stroke-[1.4] max-sm:stroke-[2.2] ${className ?? ""}`}
    >
      <Illustration />
    </svg>
  );
}
