import type { LocationRow } from "./creator-analytics-data";

export function TopLocationsPanel({ locations }: { locations: LocationRow[] }) {
  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <p className="mb-4 text-sm font-semibold text-[var(--dash-heading)]">Top Locations</p>
      <div className="flex flex-col gap-3">
        {locations.map((loc) => (
          <div key={loc.rank} className="flex items-center gap-3">
            <span className="w-6 shrink-0 text-xs font-bold text-[var(--dash-muted)]">
              {loc.rank}
            </span>
            <span className="flex-1 text-sm text-[var(--dash-heading)]">{loc.name}</span>
            <span className="text-sm font-bold text-[var(--dash-accent)]">{loc.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
