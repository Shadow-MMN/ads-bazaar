import { DashboardHeader } from "@/components/dashboard/creator/dashboard-header";
import { analyticStats, growthSeries, ageGroups, topLocations, channels, topCampaigns } from "@/components/dashboard/creator/creator-analytics-data";
import { AnalyticsPageHeader } from "@/components/dashboard/creator/analytics-page-header";
import { AnalyticsStatCards } from "@/components/dashboard/creator/analytics-stat-cards";
import { FollowerGrowthChart } from "@/components/dashboard/creator/follower-growth-chart";
import { AgeDistributionPanel } from "@/components/dashboard/creator/age-distribution-panel";
import { TopLocationsPanel } from "@/components/dashboard/creator/top-locations-panel";
import { ChannelPerformanceSection } from "@/components/dashboard/creator/channel-performance-section";
import { TopPerformingTable } from "@/components/dashboard/creator/top-performing-table";

export default function CreatorAnalyticsPage() {
  return (
    <>
      <DashboardHeader eyebrow="Performance insights" title="Analytics & Insights" />
      <div className="flex flex-col gap-6">
      <AnalyticsPageHeader />
      <AnalyticsStatCards stats={analyticStats} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <FollowerGrowthChart series={growthSeries} />
        </div>
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
          <AgeDistributionPanel groups={ageGroups} />
          <TopLocationsPanel locations={topLocations} />
        </div>
      </div>

      <ChannelPerformanceSection channels={channels} />
      <TopPerformingTable campaigns={topCampaigns} />
    </div>
    </>
  );
}
