import * as React from "react";

import logo from "@/assets/xpreswings-logo.svg";
import { cn } from "@/lib/utils";

export interface AnimatedDeliveryRouteProps {
  className?: string;
  animated?: boolean;
  label?: string;
}

function Pin({ x, className }: { x: number; className: string }) {
  return (
    <path
      transform={`translate(${x} 62)`}
      className={className}
      fillRule="evenodd"
      d="M0 0C-11 0-20 9-20 20c0 15 20 36 20 36s20-21 20-36C20 9 11 0 0 0Zm0 13a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
    />
  );
}

function Wheel({ cx }: { cx: number }) {
  return (
    <g className="delivery-route__wheel">
      <circle
        cx={cx}
        cy={104}
        r={14}
        className="fill-surface-dark stroke-white/60"
        strokeWidth={3}
      />
      <circle cx={cx} cy={104} r={5} className="fill-white/80" />
      <path
        d={`M${cx - 9} 104h18M${cx} 95v18`}
        className="stroke-white/60"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  );
}

export function AnimatedDeliveryRoute({
  className,
  animated = true,
  label = "XpresWings delivery truck travelling between two locations",
}: AnimatedDeliveryRouteProps) {
  return (
    <svg
      className={cn("delivery-route block h-auto w-full", className)}
      data-animated={animated}
      viewBox="0 0 1200 140"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
        <rect x="0" y="104" width="1200" height="24" rx="12" className="fill-white/10" />
        <line
          className="delivery-route__lane stroke-white/40"
          x1="16"
          x2="1184"
          y1="116"
          y2="116"
          strokeWidth="3"
          strokeDasharray="24 18"
          strokeLinecap="round"
        />

        <Pin x={40} className="fill-brand" />
        <Pin x={1160} className="fill-white" />

        <g transform="translate(70 0)">
          <g className="delivery-route__truck">
            <rect x="0" y="20" width="150" height="72" rx="6" className="fill-white" />
            <rect x="0" y="80" width="150" height="6" className="fill-brand" />
            <image href={logo} x="12" y="38" width="126" height="22" />
            <path d="M154 92V40h30l23 26v26Z" className="fill-brand" />
            <path d="M161 48h20l15 18h-35Z" className="fill-surface-dark" />
            <rect x="-2" y="90" width="212" height="8" rx="2" className="fill-white/70" />
            <Wheel cx={40} />
            <Wheel cx={176} />
        </g>
      </g>
    </svg>
  );
}
