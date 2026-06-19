import { Target, ClipboardCheck } from "lucide-react";
import type { CampaignDetail } from "./campaign-detail-data";

export function CampaignBriefSection({
  campaign,
}: {
  campaign: CampaignDetail;
}) {
  return (
    <section>
      <h2 className="font-sora text-base font-semibold text-on-surface pb-3 border-b border-outline-variant">
        Campaign Brief
      </h2>
      <p className="text-sm leading-relaxed text-on-surface-variant mt-4">
        {campaign.brief}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="border border-outline-variant bg-surface-container p-5">
          <Target className="size-6 text-primary-container mb-3" />
          <h3 className="text-sm font-semibold text-on-surface mb-2">
            Target Audience
          </h3>
          <p className="text-xs leading-relaxed text-on-surface-variant">
            {campaign.targetAudience}
          </p>
        </div>
        <div className="border border-outline-variant bg-surface-container p-5">
          <ClipboardCheck className="size-6 text-primary-container mb-3" />
          <h3 className="text-sm font-semibold text-on-surface mb-2">
            Deliverables
          </h3>
          <p className="text-xs leading-relaxed text-on-surface-variant">
            {campaign.deliverables}
          </p>
        </div>
      </div>
    </section>
  );
}
