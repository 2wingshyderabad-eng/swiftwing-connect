import { cn } from "@/lib/utils";

type Building = { x: number; w: number; h: number };

const VIEW_W = 1440;
const VIEW_H = 160;

// Seeded so server and client render identical markup (no hydration mismatch).
function skyline(seed: number, minH: number, maxH: number, minW: number, maxW: number) {
  let s = seed;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const out: Building[] = [];
  let x = -10;
  while (x < VIEW_W) {
    const w = Math.round(minW + rand() * (maxW - minW));
    const h = Math.round(minH + rand() * (maxH - minH));
    out.push({ x, w, h });
    x += w + Math.round(rand() * 6);
  }
  return out;
}

const BACK = skyline(7, 60, 130, 40, 90);
const FRONT = skyline(42, 28, 96, 30, 70);

function windows(b: Building, index: number) {
  const cols = Math.floor((b.w - 8) / 10);
  const rows = Math.floor((b.h - 14) / 12);
  const rects: { x: number; y: number; lit: boolean }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const k = r * 7 + c * 3 + index;
      if (k % 4 !== 0) continue;
      rects.push({ x: b.x + 6 + c * 10, y: VIEW_H - b.h + 10 + r * 12, lit: k % 3 === 0 });
    }
  }
  return rects;
}

export function FooterSkyline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMax slice"
      className={cn("-mb-px block h-24 w-full sm:h-32 lg:h-40", className)}
    >
      <g className="fill-secondary">
        {BACK.map((b) => (
          <rect key={b.x} x={b.x} y={VIEW_H - b.h} width={b.w} height={b.h} />
        ))}
      </g>

      <path
        d="M560 120C660 70 760 52 868 46"
        fill="none"
        className="stroke-brand"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />
      <g transform="translate(872 30) rotate(-10)" className="fill-brand-strong">
        <path d="M2 9h30c3 0 5 1 5 2s-2 2-5 2H2l-2-2Z" />
        <path d="M14 9 7 0h4l11 9Z" />
        <path d="m14 13-7 9h4l11-9Z" />
        <path d="M4 9 0 3h3l5 6Z" />
      </g>

      <g className="fill-surface-darker">
        {FRONT.map((b) => (
          <g key={b.x}>
            <rect x={b.x} y={VIEW_H - b.h} width={b.w} height={b.h} />
            {b.h > 80 && <rect x={b.x + b.w / 2 - 1} y={VIEW_H - b.h - 12} width={2} height={12} />}
          </g>
        ))}
        <rect x="0" y={VIEW_H - 12} width={VIEW_W} height="12" />
      </g>

      {FRONT.map((b, i) =>
        windows(b, i).map((w) => (
          <rect
            key={`${w.x}-${w.y}`}
            x={w.x}
            y={w.y}
            width={4}
            height={5}
            className={w.lit ? "fill-brand/80" : "fill-white/15"}
          />
        )),
      )}
    </svg>
  );
}
