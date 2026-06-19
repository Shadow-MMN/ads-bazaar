import { HelpCircle } from "lucide-react";

export function CampaignHelpCard() {
  return (
    <div className="border border-outline-variant bg-surface-container p-5">
      <div className="flex items-center gap-3">
        <HelpCircle className="size-6 text-on-surface-variant shrink-0" />
        <div>
          <p className="text-sm font-semibold text-on-surface">Need Help?</p>
          <p className="text-xs text-on-surface-variant">
            Chat with a campaign manager
          </p>
        </div>
      </div>
    </div>
  );
}
