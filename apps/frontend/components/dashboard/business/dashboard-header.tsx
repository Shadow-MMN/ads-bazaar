"use client";

import { Menu } from "lucide-react";
import { useMobileNav } from "./mobile-nav-context";
import { WalletChip } from "@/components/wallet/wallet-chip";

export function DashboardHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const { openMobileNav } = useMobileNav();

  return (
    <div className="mb-8 lg:mb-12">
      <div className="mb-4 flex items-center justify-between gap-4 lg:hidden">
        <button
          type="button"
          onClick={openMobileNav}
          aria-label="Open dashboard navigation"
          className="-ml-2 flex size-11 items-center justify-center rounded-lg text-[var(--dash-body)] transition-colors hover:bg-[var(--dash-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
        <WalletChip />
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-accent)]">
            {eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--dash-heading)]">
            {title}
          </h1>
        </div>
        <div className="hidden lg:block">
          <WalletChip />
        </div>
      </div>
    </div>
  );
}
