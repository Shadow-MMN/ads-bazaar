import { CheckCircle2 } from "lucide-react";

export function CampaignRequirements({
  requirements,
}: {
  requirements: string[];
}) {
  return (
    <section>
      <h2 className="font-sora text-base font-semibold text-on-surface pb-3 border-b border-outline-variant">
        Requirements
      </h2>
      <div className="flex flex-col gap-3 mt-4">
        {requirements.map((req, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="size-5 shrink-0 text-primary-container mt-0.5" />
            <span className="text-sm text-on-surface-variant">{req}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
