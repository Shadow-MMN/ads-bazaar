"use client";

import type { GrowthPoint } from "./creator-analytics-data";

function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dx = (p1.x - p0.x) * 0.4;
    d += ` C ${p0.x + dx} ${p0.y}, ${p1.x - dx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

function smoothArea(points: { x: number; y: number }[], bottomY: number): string {
  if (points.length < 2) return "";
  const line = smoothPath(points);
  const last = points[points.length - 1];
  const first = points[0];
  return `${line} L ${last.x} ${bottomY} L ${first.x} ${bottomY} Z`;
}

export function FollowerGrowthChart({ series }: { series: GrowthPoint[] }) {
  const W = 500;
  const H = 200;
  const PAD = { top: 10, right: 10, bottom: 10, left: 10 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const maxVal = Math.max(...series.map((p) => Math.max(p.growth, p.engagement)), 1);

  const toPoint = (value: number, index: number) => ({
    x: PAD.left + (index / (series.length - 1)) * innerW,
    y: PAD.top + innerH - (value / maxVal) * innerH,
  });

  const growthPoints = series.map((p, i) => toPoint(p.growth, i));
  const engagementPoints = series.map((p, i) => toPoint(p.engagement, i));
  const bottomY = PAD.top + innerH;

  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--dash-heading)]">
            Follower Growth &amp; Engagement
          </p>
          <p className="mt-0.5 text-xs text-[var(--dash-muted)]">
            Activity tracked from May 1st to May 30th
          </p>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5 text-xs text-[var(--dash-muted)]">
            <span className="size-2 rounded-full bg-[var(--dash-accent)]" />
            Growth
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[var(--dash-muted)]">
            <span className="size-2 rounded-full bg-white/50" />
            Engagement
          </span>
        </div>
      </div>

      <div className="relative mt-4 h-60">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--dash-accent)" stopOpacity="0.4" />
              <stop offset="95%" stopColor="var(--dash-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {growthPoints.map((p, i) => (
            <line
              key={series[i].label}
              x1={p.x}
              y1={PAD.top}
              x2={p.x}
              y2={bottomY}
              stroke="var(--dash-border)"
              strokeWidth={0.8}
              strokeOpacity={0.7}
            />
          ))}
          <path d={smoothArea(growthPoints, bottomY)} fill="url(#growthFill)" />
          <path
            d={smoothPath(growthPoints)}
            fill="none"
            stroke="var(--dash-accent)"
            strokeWidth={2}
          />
          <path
            d={smoothPath(engagementPoints)}
            fill="none"
            stroke="white"
            strokeWidth={1.5}
            strokeOpacity={0.5}
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="mt-3 flex justify-between">
        {series.map((p) => (
          <span key={p.label} className="text-[10px] text-[var(--dash-muted)]">
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}
