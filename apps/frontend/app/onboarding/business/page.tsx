"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StepIndicator } from "@/components/onboarding/step-indicator";
import { BusinessForm } from "@/components/onboarding/business-form";

const STORAGE_KEY = "adsbazaar_onboarding";

function loadDraft() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.businessForm) return parsed.businessForm;
    }
  } catch {}
  return {
    name: "",
    industry: "",
    country: "",
    email: "",
    website: "",
    description: "",
  };
}

function saveDraft(data: Record<string, string>) {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const existing = raw ? JSON.parse(raw) : {};
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...existing,
        step: 2,
        role: "business",
        businessForm: data,
      }),
    );
  } catch {}
}

export default function BusinessRegistrationPage() {
  const router = useRouter();
  const [data, setData] = useState(loadDraft);

  useEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed.businessForm) setData(parsed.businessForm);
      } catch {}
    }
  }, []);

  const handleChange = (next: typeof data) => {
    setData(next);
    saveDraft(next);
  };

  return (
    <div className="w-full max-w-[800px]">
      <StepIndicator
        variant="bars"
        totalSteps={3}
        currentStep={2}
        label="Profile Setup"
      />
      <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] overflow-hidden">
        <BusinessForm
          data={data}
          onChange={handleChange}
          onSubmit={() => router.push("/onboarding/complete/business")}
          onBack={() => router.push("/onboarding/role")}
        />
      </div>
      <p className="font-geist text-[13px] text-[var(--db-on-surface-variant)] text-center mt-6 max-w-[540px] mx-auto">
        By continuing, you agree to our{" "}
        <span className="text-[var(--db-on-surface)]  hover:underline cursor-pointer">
          Service Terms
        </span>
        . Your information is encrypted and stored on the Stellar network.
      </p>
    </div>
  );
}
