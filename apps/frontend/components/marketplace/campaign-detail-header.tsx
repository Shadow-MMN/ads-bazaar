import { Briefcase } from "lucide-react";
import type { CampaignDetail } from "./campaign-detail-data";

export function CampaignDetailHeader({
  campaign,
}: {
  campaign: CampaignDetail;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="size-12 border border-outline-variant bg-surface-container-high overflow-hidden flex items-center justify-center shrink-0">
        {campaign.brandIconPath ? (
          <img
            src={campaign.brandIconPath}
            alt={campaign.brand}
            className="size-full object-cover"
          />
        ) : (
          <Briefcase className="size-5 text-on-surface-variant" />
        )}
      </div>
      <div>
        <h1 className="font-sora text-lg font-semibold text-on-surface">
          {campaign.title}
        </h1>
        <p className="text-sm text-on-surface-variant">
          by {campaign.brand}
        </p>
      </div>
    </div>
  );
}
