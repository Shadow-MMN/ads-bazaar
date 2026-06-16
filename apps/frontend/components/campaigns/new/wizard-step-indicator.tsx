import { Check } from "lucide-react";

interface WizardStepIndicatorProps {
  steps: { label: string }[];
  currentStep: number; // 1-indexed
}

export function WizardStepIndicator({ steps, currentStep }: WizardStepIndicatorProps) {
  return (
    <div className="mb-8 flex items-start justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div key={step.label} className="flex flex-1 flex-col items-center">
            <div className="relative flex w-full items-center">
              {/* Left connector */}
              {index > 0 && (
                <div
                  className="flex-1 border-t-2 transition-colors"
                  style={{ borderColor: isCompleted || isActive ? "#c8f232" : "rgba(255,255,255,0.15)" }}
                />
              )}

              {/* Step circle */}
              <div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors"
                style={{
                  backgroundColor: isCompleted || isActive ? "#c8f232" : "rgba(255,255,255,0.08)",
                  color: isCompleted || isActive ? "#293500" : "rgba(255,255,255,0.4)",
                }}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : stepNumber}
              </div>

              {/* Right connector */}
              {index < steps.length - 1 && (
                <div
                  className="flex-1 border-t-2 transition-colors"
                  style={{ borderColor: stepNumber < currentStep ? "#c8f232" : "rgba(255,255,255,0.15)" }}
                />
              )}
            </div>

            {/* Label */}
            <span
              className="mt-2 hidden text-[10px] font-bold uppercase tracking-wide sm:block"
              style={{ color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)" }}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
