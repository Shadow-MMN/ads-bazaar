import type { CampaignDetail } from "./campaign-detail-data";

export function CampaignHeroImage({
  campaign,
}: {
  campaign: CampaignDetail;
}) {
  return (
    <div className="relative w-full overflow-hidden border border-outline-variant bg-surface-container">
      {campaign.heroImagePath ? (
        <img
          src={campaign.heroImagePath}
          alt={campaign.title}
          className="aspect-[16/10] w-full object-cover bg-surface-container-high"
        />
      ) : (
        <div className="aspect-[16/10] w-full bg-surface-container-high" />
      )}
      <div className="absolute top-4 left-4 border border-outline-variant bg-surface-container px-3 py-1.5 text-xs font-bold text-on-surface">
        {campaign.category}
      </div>
    </div>
  );
}
