"use client";

import { Briefcase } from "lucide-react";
import type { MarketplaceCampaign } from "./marketplace-data";

type MarketplaceCampaignCardProps = {
  campaign: MarketplaceCampaign;
};

export function MarketplaceCampaignCard({ campaign }: MarketplaceCampaignCardProps) {
  // Determine card border color based on priority
  const borderClass =
    campaign.status === "high-priority"
      ? "border-primary-container/30"
      : "border-outline-variant";

  // Format Ref ID if present
  const displayRefId = campaign.refId
    ? campaign.refId.startsWith("ID:")
      ? campaign.refId
      : `ID: ${campaign.refId}`
    : null;

  return (
    <article
      className={`border ${borderClass} bg-surface-container p-5 flex flex-col transition-colors hover:border-primary-container/40`}
    >
      {/* Header Row */}
      <div className="flex items-start justify-between mb-4">
        {/* Left - Icon placeholder (always Briefcase per PR review feedback) */}
        <div className="size-10 border border-outline-variant bg-surface-container-high flex items-center justify-center">
          <Briefcase className="size-5 text-on-surface-variant" aria-hidden="true" />
        </div>

        {/* Right - Status Area */}
        <div className="flex flex-col items-end gap-1">
          {/* Status Badge */}
          {campaign.status === "funded" ? (
            <span className="rounded border border-primary-container text-primary-container px-2 py-0.5 text-[10px] font-bold tracking-widest">
              FUNDED
            </span>
          ) : campaign.status === "high-priority" ? (
            <span className="rounded bg-primary-container text-on-primary px-2 py-0.5 text-[10px] font-bold tracking-widest">
              HIGH PRIORITY
            </span>
          ) : null}

          {/* Ref ID */}
          {displayRefId && (
            <span className="text-[10px] text-on-surface-variant font-mono">
              {displayRefId}
            </span>
          )}
        </div>
      </div>

      {/* Campaign Title */}
      <h3 className="font-sora text-sm font-semibold text-on-surface mt-1 truncate">
        {campaign.title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-on-surface-variant mt-2 line-clamp-3">
        {campaign.description}
      </p>

      {/* Payout & Deadline Row */}
      <div className="flex items-end justify-between mt-auto pt-4">
        {/* Left - Payout */}
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
            PAYOUT
          </span>
          <div className="mt-0.5 flex items-baseline">
            <span className="font-sora text-lg font-bold text-on-surface">
              {campaign.payout}
            </span>
            <span className="text-xs font-bold text-on-surface-variant ml-1">
              {campaign.currency}
            </span>
          </div>
        </div>

        {/* Right - Deadline */}
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant text-right">
            DEADLINE
          </span>
          <span className="block mt-0.5 text-sm font-semibold text-on-surface italic">
            {campaign.deadline}
          </span>
        </div>
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant">
        {/* Left - Applicant Avatars (rendered as plain circles from count) */}
        <div className="flex -space-x-1.5">
          {Array.from({ length: Math.min(campaign.applicantAvatars, 2) }).map((_, i) => (
            <div key={i} className="size-6 rounded-full bg-surface-container-high border-2 border-surface-container shrink-0" />
          ))}
          {campaign.applicantAvatars > 2 && (
            <div className="size-6 rounded-full bg-surface-container-high border-2 border-surface-container flex items-center justify-center text-[8px] font-bold text-on-surface-variant shrink-0">
              +{campaign.applicantAvatars - 2}
            </div>
          )}
        </div>

        {/* Right - CTA Button */}
        {campaign.hasApplyNow ? (
          <button
            type="button"
            disabled
            title="Coming soon"
            className="bg-primary-container text-on-primary px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity rounded cursor-not-allowed"
          >
            APPLY NOW
          </button>
        ) : (
          <button
            type="button"
            disabled
            title="Coming soon"
            className="border border-outline-variant px-4 py-2 text-xs font-bold text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-colors rounded cursor-not-allowed"
          >
            VIEW BRIEF
          </button>
        )}
      </div>
    </article>
  );
}

