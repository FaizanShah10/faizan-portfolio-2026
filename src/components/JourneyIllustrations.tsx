import { ACCENT, LINE, Label, Node } from "./PrincipleIllustrations";

/** One diagram per role, in the same grid and stroke as the About illustrations. */

// One feature cut straight through every layer: owned from schema to deployment.
function Slice() {
  const layers = [
    { y: 14, name: "Deploy" },
    { y: 48, name: "UI" },
    { y: 82, name: "API" },
    { y: 116, name: "Schema" },
  ];
  return (
    <>
      {layers.map(({ y, name }) => (
        <g key={name}>
          <rect pathLength={1} x="34" y={y} width="172" height="26" rx="5" className={LINE} />
          <Label x={46} y={y + 16} anchor="start">{name}</Label>
        </g>
      ))}
      <path pathLength={1} d="M160 129V27" className={ACCENT} />
      <Node x={160} y={129} />
      <Node x={160} y={95} />
      <Node x={160} y={61} />
      <Node x={160} y={27} accent />
    </>
  );
}

// Different kinds of client, one path each project ran through.
function Lifecycle() {
  return (
    <>
      <path
        pathLength={1}
        d="M72 32C100 32 90 84 118 84M72 84H118M72 136C100 136 90 84 118 84"
        className={LINE}
      />
      <path pathLength={1} d="M118 84H218" className={ACCENT} />
      <Node x={72} y={32} />
      <Node x={72} y={84} />
      <Node x={72} y={136} />
      <Node x={118} y={84} />
      <Node x={168} y={84} />
      <Node x={218} y={84} accent />
      <Label x={62} y={35} anchor="end">SaaS</Label>
      <Label x={62} y={87} anchor="end">E-commerce</Label>
      <Label x={62} y={139} anchor="end">Marketplace</Label>
      <Label x={114} y={72} anchor="start">Requirements</Label>
      <Label x={168} y={104}>Build</Label>
      <Label x={222} y={70} anchor="end">Deploy</Label>
    </>
  );
}

const illustrations = { slice: Slice, lifecycle: Lifecycle };

export function JourneyIllustration({
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
