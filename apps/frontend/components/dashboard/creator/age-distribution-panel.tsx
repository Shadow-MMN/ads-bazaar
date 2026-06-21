import type { AgeGroup } from "./creator-analytics-data";

export function AgeDistributionPanel({ groups }: { groups: AgeGroup[] }) {
  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <p className="mb-4 text-sm font-semibold text-[var(--dash-heading)]">Age Distribution</p>
      <div className="flex flex-col gap-4">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[var(--dash-heading)]">
                {group.label}
              </span>
              <span className="text-xs font-bold text-[var(--dash-heading)]">
                {group.percentage}%
              </span>
            </div>
            <div className="h-2 w-full bg-[var(--dash-border)]">
              <div
                className="h-full rounded bg-[var(--dash-accent)]"
                style={{ width: `${group.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
