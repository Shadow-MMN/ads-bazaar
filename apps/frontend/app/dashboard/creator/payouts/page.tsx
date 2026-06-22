import type { Metadata } from "next";
import { Timer, TrendingUp } from "lucide-react";
import { ClaimableCard } from "@/components/dashboard/creator/claimable-card";

export const metadata: Metadata = {
  title: "Payouts",
};
import {
  connectedWallet,
  currentCycle,
  networkStatus,
  offRampFeatures,
  payoutHistory,
  payoutSummary,
} from "@/components/dashboard/creator/creator-payouts-data";
import { DashboardHeader } from "@/components/dashboard/creator/dashboard-header";
import { OffRampPanel } from "@/components/dashboard/creator/off-ramp-panel";
import { PayoutHistoryTable } from "@/components/dashboard/creator/payout-history-table";
import { PayoutsNetworkStatus } from "@/components/dashboard/creator/payouts-network-status";
import { StatCard } from "@/components/dashboard/creator/stat-card";
import { WalletPanel } from "@/components/dashboard/creator/wallet-panel";

export default function CreatorPayoutsPage() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <DashboardHeader eyebrow="Your earnings" title="Payouts & Earnings" />
        <div className="text-left sm:text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--dash-muted)]">
            {currentCycle.endsLabel}
          </p>
          <p className="text-sm font-bold text-[var(--dash-heading)]">
            {currentCycle.endsDate}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <StatCard
          className="col-span-12 sm:col-span-6 lg:col-span-4"
          delta={payoutSummary.totalEarnedDelta}
          icon={TrendingUp}
          iconTone="accent"
          label="Total Earned"
          value={payoutSummary.totalEarned}
        />

        <ClaimableCard amount={payoutSummary.availableToClaim} />

        <StatCard
          className="col-span-12 sm:col-span-6 lg:col-span-4"
          delta={payoutSummary.pendingArrival}
          icon={Timer}
          iconTone="muted"
          label="Pending Verification"
          value={payoutSummary.pendingVerification}
        />

        <WalletPanel wallet={connectedWallet} />

        <OffRampPanel features={offRampFeatures} />

        <PayoutHistoryTable items={payoutHistory} />
      </div>

      <PayoutsNetworkStatus status={networkStatus} />
    </>
  );
}
