"use client";

import { useEffect, useState } from "react";
import { CampaignWizardLayout } from "@/components/campaigns/new/campaign-wizard-layout";
import { WizardStepIndicator } from "@/components/campaigns/new/wizard-step-indicator";
import { StepCampaignBrief } from "@/components/campaigns/new/steps/step-campaign-brief";
import { StepTargeting } from "@/components/campaigns/new/steps/step-targeting";
import { StepBudget } from "@/components/campaigns/new/steps/step-budget";
import { StepProofRequirements } from "@/components/campaigns/new/steps/step-proof-requirements";
import { StepReviewFund } from "@/components/campaigns/new/steps/step-review-fund";

const STEPS = [
  { label: "Brief" },
  { label: "Targeting" },
  { label: "Budget" },
  { label: "Proof" },
  { label: "Review" },
];

const DRAFT_KEY = "adsbazaar_campaign_draft";

interface WizardState {
  currentStep: number;
  brief: {
    title: string;
    description: string;
    imageUrl: string | null;
    platforms: string[];
    startDate: string;
    endDate: string;
    campaignType: "awareness" | "conversion" | "community" | "";
  };
  targeting: {
    categories: string[];
    minAudienceSize: string;
    regions: string[];
    requirements: string;
  };
  budget: {
    asset: string;
    totalBudget: number;
    creatorSlots: number;
  };
  proof: {
    contentFormats: string[];
    deliverables: string;
    submissionDeadline: string;
    verificationType: string;
    linkSocialPost: boolean;
    viewCountThreshold: boolean;
  };
}

const initialState: WizardState = {
  currentStep: 1,
  brief: {
    title: "",
    description: "",
    imageUrl: null,
    platforms: [],
    startDate: "",
    endDate: "",
    campaignType: "",
  },
  targeting: {
    categories: [],
    minAudienceSize: "",
    regions: [],
    requirements: "",
  },
  budget: {
    asset: "USDC",
    totalBudget: 0,
    creatorSlots: 1,
  },
  proof: {
    contentFormats: [],
    deliverables: "",
    submissionDeadline: "",
    verificationType: "",
    linkSocialPost: true,
    viewCountThreshold: false,
  },
};

function validateStep(step: number, state: WizardState): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!state.brief.title.trim()) errors.title = "Campaign title is required.";
    if (!state.brief.description.trim()) errors.description = "Description is required.";
    if (state.brief.platforms.length === 0) errors.platforms = "Select at least one platform.";
    if (!state.brief.startDate) errors.startDate = "Start date is required.";
    if (!state.brief.endDate) errors.endDate = "End date is required.";
    if (state.brief.startDate && state.brief.endDate && state.brief.endDate <= state.brief.startDate) {
      errors.endDate = "End date must be after start date.";
    }
  }

  if (step === 2) {
    if (state.targeting.categories.length < 3) errors.categories = "Select at least 3 categories.";
    if (!state.targeting.minAudienceSize) errors.minAudienceSize = "Select a minimum audience size.";
    if (state.targeting.regions.length === 0) errors.regions = "Select at least one region.";
  }

  if (step === 3) {
    if (!state.budget.asset) errors.asset = "Select a payment asset.";
    if (state.budget.totalBudget <= 0) errors.totalBudget = "Budget must be greater than 0.";
    if (state.budget.creatorSlots < 1) errors.creatorSlots = "At least 1 creator slot is required.";
  }

  if (step === 4) {
    if (state.proof.contentFormats.length === 0) errors.contentFormats = "Select at least one content format.";
    if (!state.proof.deliverables.trim()) errors.deliverables = "Deliverables description is required.";
    if (!state.proof.submissionDeadline) errors.submissionDeadline = "Submission deadline is required.";
  }

  return errors;
}

export default function NewCampaignPage() {
  const [state, setState] = useState<WizardState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hydrated, setHydrated] = useState(false);

  // Restore draft from sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as WizardState;
        setState(parsed);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Auto-save to sessionStorage on every state change
  useEffect(() => {
    if (hydrated) {
      try {
        sessionStorage.setItem(DRAFT_KEY, JSON.stringify(state));
      } catch {
        // ignore
      }
    }
  }, [state, hydrated]);

  function goToStep(step: number) {
    setState((s) => ({ ...s, currentStep: step }));
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextStep() {
    if (state.currentStep === 5) {
      // Fund Escrow & Launch — no-op for now
      return;
    }
    const stepErrors = validateStep(state.currentStep, state);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    goToStep(state.currentStep + 1);
  }

  function prevStep() {
    if (state.currentStep > 1) {
      goToStep(state.currentStep - 1);
    }
  }

  function updateBrief(brief: WizardState["brief"]) {
    setState((s) => ({ ...s, brief }));
  }

  function updateTargeting(targeting: WizardState["targeting"]) {
    setState((s) => ({ ...s, targeting }));
  }

  function updateBudget(budget: WizardState["budget"]) {
    setState((s) => ({ ...s, budget }));
  }

  function updateProof(proof: WizardState["proof"]) {
    setState((s) => ({ ...s, proof }));
  }

  if (!hydrated) return null;

  return (
    <CampaignWizardLayout
      currentStep={state.currentStep}
      totalSteps={STEPS.length}
      onNext={nextStep}
      onBack={prevStep}
      canGoBack={state.currentStep > 1}
      isLastStep={state.currentStep === 5}
    >
      <WizardStepIndicator steps={STEPS} currentStep={state.currentStep} />

      {state.currentStep === 1 && (
        <StepCampaignBrief data={state.brief} onChange={updateBrief} errors={errors} />
      )}
      {state.currentStep === 2 && (
        <StepTargeting data={state.targeting} onChange={updateTargeting} errors={errors} />
      )}
      {state.currentStep === 3 && (
        <StepBudget data={state.budget} onChange={updateBudget} errors={errors} />
      )}
      {state.currentStep === 4 && (
        <StepProofRequirements data={state.proof} onChange={updateProof} errors={errors} />
      )}
      {state.currentStep === 5 && (
        <StepReviewFund data={state} onGoToStep={goToStep} />
      )}
    </CampaignWizardLayout>
  );
}
