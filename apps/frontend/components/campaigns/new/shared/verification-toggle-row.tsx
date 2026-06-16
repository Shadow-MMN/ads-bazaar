"use client";

interface VerificationToggleRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  isLast?: boolean;
}

export function VerificationToggleRow({
  icon,
  title,
  description,
  enabled,
  onChange,
  isLast = false,
}: VerificationToggleRowProps) {
  return (
    <div
      className="flex items-center gap-4 px-4 py-3.5"
      style={{ borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Icon container */}
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded"
        style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#f7f8f2]">{title}</p>
        <p className="text-[12px] text-[rgba(255,255,255,0.45)]">{description}</p>
      </div>

      {/* Toggle */}
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className="relative shrink-0"
        style={{ width: 40, height: 22 }}
      >
        <span
          className="block h-full rounded-full transition-colors"
          style={{ backgroundColor: enabled ? "#c8f232" : "rgba(255,255,255,0.15)" }}
        />
        <span
          className="absolute top-[3px] block h-4 w-4 rounded-full bg-white shadow transition-all"
          style={{ left: enabled ? "calc(100% - 19px)" : "3px" }}
        />
      </button>
    </div>
  );
}
