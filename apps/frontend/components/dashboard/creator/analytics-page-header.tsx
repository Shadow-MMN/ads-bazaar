import { Calendar, ChevronDown, Download } from "lucide-react";

export function AnalyticsPageHeader() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="font-[family-name:var(--font-sora)] text-[28px] font-semibold text-[var(--dash-heading)]">
          Analytics &amp; Insights
        </h1>
        <p className="mt-1 text-sm text-[var(--dash-muted)]">
          Real-time performance metrics across your connected social channels.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex items-center gap-2 border-2 border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 text-sm text-[var(--dash-body)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Calendar className="size-4" aria-hidden="true" />
          Last 30 Days
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled
          title="Coming soon"
          className="flex items-center gap-2 border-2 border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 text-sm font-semibold text-[var(--dash-heading)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Download className="size-4" aria-hidden="true" />
          Export
        </button>
      </div>
    </div>
  );
}
