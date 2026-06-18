"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { LayoutGrid, Sparkles } from "lucide-react";
import { StepIndicator } from "@/components/onboarding/step-indicator";
import { RoleCard } from "@/components/onboarding/role-card";

function RoleContent() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");

  useEffect(() => {
    try {
      sessionStorage.setItem(
        "adsbazaar_onboarding",
        JSON.stringify({
          role:
            intent === "creator"
              ? "creator"
              : intent === "business"
                ? "business"
                : null,
          step: 1,
          businessForm: null,
          creatorForm: null,
        }),
      );
    } catch {}
  }, [intent]);

  return (
    <>
      <StepIndicator variant="dots" totalSteps={2} currentStep={1} />

      <h1 className="font-sora text-[40px] font-extrabold text-[var(--db-on-surface)] text-center leading-tight">
        Select your journey.
      </h1>
      <p className="font-geist text-[16px] text-[var(--db-on-surface-variant)] text-center mt-3 max-w-[560px]">
        Welcome to the AdsBazaar ecosystem. Choose how you want to participate
        in the creator economy.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <RoleCard
          role="business"
          icon={<LayoutGrid size={20} />}
          title="I am a Business"
          description="Launch creator campaigns, fund escrow, and manage creator relationships from one dashboard."
          href="/onboarding/business"
          highlighted={intent === "business"}
        />
        <RoleCard
          role="creator"
          icon={<Sparkles size={20} />}
          title="I am a Creator"
          description="Discover campaigns, apply with your profile, submit content, and get paid instantly."
          href="/onboarding/creator"
          highlighted={intent === "creator"}
        />
      </div>

      <footer className="w-full mt-auto pt-16">
        <div className="h-px bg-[var(--db-outline-variant)] mb-4" />
        <div className="flex items-center justify-between text-[11px] font-geist text-[var(--db-on-surface-variant)]">
          <span>© 2024 ADSBAZAAR. BUILT ON STELLAR.</span>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-[var(--db-primary-container)] transition-colors hover:underline underline-offset-4 decoration-[var(--db-primary-container)]">
              TERMS
            </span>
            <span className="cursor-pointer hover:text-[var(--db-primary-container)] transition-colors hover:underline underline-offset-4 decoration-[var(--db-primary-container)]">
              PRIVACY
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function RoleSelectionPage() {
  return (
    <div className="w-full max-w-[960px] flex-1 flex flex-col items-center">
      <Suspense fallback={null}>
        <RoleContent />
      </Suspense>
    </div>
  );
}
