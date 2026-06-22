import type { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/creator/dashboard-header";
import { ConnectedChannels } from "@/components/dashboard/creator/connected-channels";

export const metadata: Metadata = {
  title: "Inventory",
};
import { DigitalMediaKit } from "@/components/dashboard/creator/digital-media-kit";
import { AudienceInsights } from "@/components/dashboard/creator/audience-insights";
import { SyncSchedule } from "@/components/dashboard/creator/sync-schedule";
import {
  audienceInsights,
  connectedChannels,
  mediaKit,
  syncNote,
  syncSchedule,
  totalActiveConnections,
} from "@/components/dashboard/creator/creator-inventory-data";

export default function CreatorInventoryPage() {
  return (
    <>
      <DashboardHeader eyebrow="Your digital presence" title="Inventory" />

      <div className="grid grid-cols-12 gap-6">
        <ConnectedChannels
          channels={connectedChannels}
          activeCount={totalActiveConnections}
        />
        <DigitalMediaKit mediaKit={mediaKit} />
        <AudienceInsights insights={audienceInsights} />
        <SyncSchedule items={syncSchedule} note={syncNote} />
      </div>
    </>
  );
}
