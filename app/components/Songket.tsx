const H = 20; // half-diagonal of one diamond cell
const SIZE = 480;
const C = SIZE / 2;

type Cell = { x: number; y: number; ring: number };

function cells(maxRing: number): Cell[] {
  const out: Cell[] = [];
  const add = (x: number, y: number) => {
    const ring = (Math.abs(x - C) + Math.abs(y - C)) / (2 * H);
    if (ring <= maxRing) out.push({ x, y, ring });
  };
  const n = SIZE / (2 * H);
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i < n && j < n) add(H + 2 * H * i, H + 2 * H * j);
      add(2 * H * i, 2 * H * j);
    }
  }
  return out.sort((a, b) => a.ring - b.ring);
}

function diamond(x: number, y: number, h: number) {
  return `${x},${y - h} ${x + h},${y} ${x},${y + h} ${x - h},${y}`;
}

// Rings that carry the woven motif. Ring 0 is the centre flower.
const SOLID = new Set([0, 3, 6]);
const STAR = new Set([1, 4]);

export default function Songket({ className = "" }: { className?: string }) {
  const grid = cells(6);
  return (
    <svg
      className={`songket ${className}`}
      viewBox={`${-H} ${-H} ${SIZE + 2 * H} ${SIZE + 2 * H}`}
      role="img"
      aria-label="A songket diamond pattern woven in gold thread"
    >
      {grid.map((c, i) => {
        const kind = SOLID.has(c.ring) ? "solid" : STAR.has(c.ring) ? "star" : "plain";
        return (
          <g key={i} className={`cell ${kind}`} style={{ ["--d" as string]: `${c.ring * 150}ms` }}>
            <polygon className="thread" points={diamond(c.x, c.y, H - 1.5)} pathLength={100} />
            {kind === "star" && <polygon className="bud" points={diamond(c.x, c.y, H * 0.38)} />}
          </g>
        );
      })}
    </svg>
  );
}
