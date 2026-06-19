"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { campaignDetailMock } from "./campaign-detail-data";

export function ApplicationForm() {
  const [portfolioLink, setPortfolioLink] = useState("");
  const [contentFormat, setContentFormat] = useState(
    campaignDetailMock.contentFormats[0]
  );
  const [pitchMessage, setPitchMessage] = useState("");

  return (
    <div className="border border-outline-variant bg-surface-container p-6">
      <h3 className="font-sora text-sm font-bold uppercase tracking-[0.05em] text-on-surface mb-6">
        APPLY FOR CAMPAIGN
      </h3>

      <div className="flex flex-col gap-5">
        {/* Portfolio Link */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2 block">
            PORTFOLIO LINK
          </label>
          <input
            type="url"
            placeholder="https://instagram.com/handle"
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            className="w-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50"
          />
        </div>

        {/* Content Format */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2 block">
            CONTENT FORMAT
          </label>
          <div className="relative">
            <select
              value={contentFormat}
              onChange={(e) => setContentFormat(e.target.value)}
              className="w-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface appearance-none"
            >
              {campaignDetailMock.contentFormats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant/50 pointer-events-none" />
          </div>
        </div>

        {/* Pitch Message */}
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2 block">
            PITCH MESSAGE
          </label>
          <textarea
            placeholder="Why are you a good fit for this wearable launch?"
            value={pitchMessage}
            onChange={(e) => setPitchMessage(e.target.value)}
            className="w-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 min-h-[120px] resize-none"
          />
        </div>
      </div>

      <button
        disabled
        title="Coming soon"
        className="w-full bg-primary-container text-on-primary py-4 font-bold text-sm tracking-wide hover:opacity-90 transition-opacity mt-2"
      >
        SUBMIT APPLICATION ▷
      </button>
    </div>
  );
}
