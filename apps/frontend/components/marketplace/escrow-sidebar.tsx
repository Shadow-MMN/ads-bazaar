import { ShieldCheck } from "lucide-react";
import type { CampaignDetail } from "./campaign-detail-data";

export function EscrowSidebar({
  campaign,
}: {
  campaign: CampaignDetail;
}) {
  return (
    <div className="border border-outline-variant bg-surface-container p-6">
      <div className="flex items-center justify-between">
        <div className="border border-primary-container px-3 py-1 text-xs font-bold tracking-widest text-primary-container">
          ESCROW VERIFIED
        </div>
        <div className="size-9 border border-outline-variant flex items-center justify-center">
          <ShieldCheck className="size-5 text-primary-container" />
        </div>
      </div>

      <div className="mt-4">
        <p className="font-sora text-[28px] font-bold text-on-surface">
          {campaign.budget}
        </p>
        <p className="text-sm text-on-surface-variant mt-1">
          Total Campaign Budget ({campaign.currency})
        </p>
      </div>

      <div className="border-t border-outline-variant my-5" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-on-surface-variant">Funds Locked:</span>
          <span className="text-sm font-semibold text-on-surface font-mono">
            {campaign.fundsLocked}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-on-surface-variant">
            Smart Contract:
          </span>
          <a
            href={campaign.smartContractUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary-container hover:underline font-mono"
          >
            {campaign.smartContract}
          </a>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-on-surface-variant">
            Payout Schedule:
          </span>
          <span className="text-sm font-semibold text-on-surface">
            {campaign.payoutSchedule}
          </span>
        </div>
      </div>
    </div>
  );
}
