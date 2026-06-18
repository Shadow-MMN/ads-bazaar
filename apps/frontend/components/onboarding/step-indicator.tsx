type StepIndicatorProps = {
  totalSteps: number;
  currentStep: number;
  variant?: "dots" | "bars" | "labeled";
  label?: string;
};

export function StepIndicator({
  totalSteps,
  currentStep,
  variant = "dots",
  label,
}: StepIndicatorProps) {
  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center mb-8">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isActive = step <= currentStep;
          return (
            <div key={step} className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  isActive ? "bg-[var(--db-primary-container)]" : "bg-[var(--db-outline-variant)]"
                }`}
              />
              {step < totalSteps && (
                <div className="w-10 h-px bg-[var(--db-outline-variant)] mx-3" />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div className="mb-8 w-full">
        <div className={`flex items-center mb-3 ${label ? "justify-between" : "justify-center"}`}>
          <span className="bg-[var(--db-primary-container)] text-[var(--db-on-primary)] text-[12px] font-geist font-semibold px-2 py-0.5 rounded-[4px]">
            STEP {String(currentStep).padStart(2, "0")} OF{" "}
            {String(totalSteps).padStart(2, "0")}
          </span>
          {label && (
            <span className="text-[12px] font-geist text-[var(--db-on-surface)]">
              {label}
            </span>
          )}
        </div>
        <div className="flex gap-1 w-full">
          {Array.from({ length: totalSteps }, (_, i) => {
            const step = i + 1;
            const isFilled = step <= currentStep;
            return (
              <div
                key={step}
                className={`h-1 flex-1 rounded-[2px] ${
                  isFilled
                    ? "bg-[var(--db-primary-container)]"
                    : "bg-[var(--db-outline-variant)]"
                }`}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 w-full max-w-[480px] mx-auto">
      <div className="flex gap-1 w-full mb-2">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`h-1 flex-1 rounded-[2px] ${
              step <= currentStep
                ? "bg-[var(--db-primary-container)]"
                : "bg-[var(--db-outline-variant)]"
            }`}
          />
        ))}
      </div>
      <div className="flex gap-1 w-full">
        {["STEP 01", "STEP 02", "STEP 03"].map((s, i) => {
          const stepNum = i + 1;
          const isCurrent = stepNum === currentStep;
          return (
            <span
              key={s}
              className={`flex-1 text-center text-[10px] font-geist font-semibold uppercase ${
                isCurrent
                  ? "text-[var(--db-on-surface)]"
                  : "text-[var(--db-on-surface-variant)]"
              }`}
            >
              {s}
            </span>
          );
        })}
      </div>
    </div>
  );
}
