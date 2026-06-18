"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShieldCheck, Lock, Zap } from "lucide-react";
import { StepIndicator } from "@/components/onboarding/step-indicator";
import { CreatorForm } from "@/components/onboarding/creator-form";

const STORAGE_KEY = "adsbazaar_onboarding";

function loadDraft() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.creatorForm) return parsed.creatorForm;
    }
  } catch {}
  return {
    displayName: "",
    category: "",
    country: "",
    audienceSize: "",
    socialLink: "",
    bio: "",
  };
}

function saveDraft(data: Record<string, string>) {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const existing = raw ? JSON.parse(raw) : {};
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...existing, step: 2, role: "creator", creatorForm: data }),
    );
  } catch {}
}

export default function CreatorRegistrationPage() {
  const router = useRouter();
  const [data, setData] = useState(loadDraft);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed.creatorForm) setData(parsed.creatorForm);
      } catch {}
    }
  }, []);

  const handleChange = (next: typeof data) => {
    setData(next);
    saveDraft(next);
  };

  return (
    <div className="w-full max-w-[540px]">
      <StepIndicator
        variant="bars"
        totalSteps={3}
        currentStep={2}
        label="Creator Registration"
      />
      <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] overflow-hidden">
        <CreatorForm
          data={data}
          onChange={handleChange}
          onSubmit={() => router.push("/onboarding/complete/creator")}
          onSkip={() => router.push("/dashboard/creator")}
        />
      </div>

      <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-4 w-full mt-12 mb-6">
        <div className="flex flex-col items-center gap-1 min-w-28">
          <ShieldCheck size={24} className="text-[var(--db-primary-container)]" />
          <span className="font-geist text-[12px] text-[var(--db-on-surface-variant)] text-center">
            Verified on Stellar
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 min-w-28">
          <Lock size={24} className="text-[var(--db-primary-container)]" />
          <span className="font-geist text-[12px] text-[var(--db-on-surface-variant)] text-center">
            Privacy Protected
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 min-w-28">
          <Zap size={24} className="text-[var(--db-primary-container)]" />
          <span className="font-geist text-[12px] text-[var(--db-on-surface-variant)] text-center">
            Instant Payouts
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-[var(--db-outline-variant)]" />

      <footer className="w-full mt-6">
        <p className="text-[11px] font-geist text-[var(--db-on-surface-variant)] text-center">
          © 2024 ADSBAZAAR PROTOCOL. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
