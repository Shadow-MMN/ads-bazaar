"use client";

import { TrendingUp, TrendingDown, Users, Zap, Tv, ShieldCheck } from "lucide-react";
import type { AnalyticStat } from "./creator-analytics-data";

const iconMap = {
  users: Users,
  zap: Zap,
  tv: Tv,
  "shield-check": ShieldCheck,
} as const;

function StatCard({ stat }: { stat: AnalyticStat }) {
  const Icon = iconMap[stat.iconId];
  const { positive, value: deltaValue } = stat.delta;

  return (
    <article className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <div className="flex items-start justify-between">
        <div className="flex size-9 items-center justify-center border border-[var(--dash-border)] bg-[var(--dash-bg)]">
          <Icon className="size-4 text-[var(--dash-accent-strong)]" aria-hidden="true" />
        </div>
        <span
          className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold ${
            positive
              ? "bg-[color-mix(in_srgb,var(--dash-accent-strong)_20%,transparent)] text-[var(--dash-accent-strong)]"
              : "bg-red-400/10 text-red-400"
          }`}
        >
          {positive ? (
            <TrendingUp className="size-2.5" aria-hidden="true" />
          ) : (
            <TrendingDown className="size-2.5" aria-hidden="true" />
          )}
          {deltaValue}
        </span>
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--dash-muted)]">
        {stat.label}
      </p>
      <p className="mt-0.5 font-[family-name:var(--font-sora)] text-[22px] font-semibold text-[var(--dash-heading)]">
        {stat.value}
      </p>
    </article>
  );
}

export function AnalyticsStatCards({ stats }: { stats: AnalyticStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
