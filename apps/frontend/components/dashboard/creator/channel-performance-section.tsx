import Image from "next/image";
import type { ChannelCard } from "./creator-analytics-data";

function ChannelCardItem({ channel }: { channel: ChannelCard }) {
  const barEntries: { key: "views" | "likes" | "shares"; label: string }[] = [
    { key: "views", label: "VIEWS" },
    { key: "likes", label: "LIKES" },
    { key: "shares", label: "SHARES" },
  ];

  return (
    <div className="border border-[var(--dash-border)] bg-[var(--dash-surface)] p-5">
      <div className="mb-6 flex items-center gap-3">
        <Image
          src={channel.iconPath}
          alt={channel.name}
          width={32}
          height={32}
          className="size-8"
        />
        <span className="text-sm font-bold text-[var(--dash-heading)]">{channel.name}</span>
      </div>

      <div className="flex h-20 items-end justify-around gap-3">
        {barEntries.map(({ key }) => (
          <div key={key} className="relative flex h-full w-6 items-end bg-[var(--dash-border)]">
            <div
              className="w-full rounded bg-[var(--dash-accent)]"
              style={{ height: `${channel.bars[key]}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-around">
        {barEntries.map(({ key, label }) => (
          <span key={key} className="text-[10px] font-semibold uppercase text-[var(--dash-muted)]">
            {label}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--dash-border)] pt-4">
        <span className="text-xs text-[var(--dash-muted)]">Conversion Rate</span>
        <span className="text-sm font-bold text-[var(--dash-accent)]">{channel.conversionRate}</span>
      </div>
    </div>
  );
}

export function ChannelPerformanceSection({ channels }: { channels: ChannelCard[] }) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-[var(--dash-heading)]">Channel Performance</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {channels.map((channel) => (
          <ChannelCardItem key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
}
