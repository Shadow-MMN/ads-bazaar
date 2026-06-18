"use client";

import { useEffect, useState } from "react";
import {
  getAddress,
  isAllowed,
  isConnected,
} from "@stellar/freighter-api";
import { Wallet } from "lucide-react";

type OnboardingHeaderProps = {
  variant: "wallet" | "support";
};

export function OnboardingHeader({ variant }: OnboardingHeaderProps) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const restore = async () => {
      try {
        const connected = await isConnected();
        if (connected.error || !connected.isConnected) return;
        const allowed = await isAllowed();
        if (allowed.error || !allowed.isAllowed) return;
        const result = await getAddress();
        if (!result.error && result.address) {
          setWalletAddress(result.address);
        }
      } catch {}
    };
    restore();
  }, []);

  const truncate = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <header>
      <div className="flex items-center justify-between h-14 px-6 max-w-[1200px] mx-auto">
        <span className="font-sora font-bold text-[20px] text-[var(--db-on-surface)]">
          AdsBazaar
        </span>
        {variant === "wallet" && walletAddress ? (
          <div className="flex items-center gap-1.5 border border-[var(--db-outline-variant)] rounded-[4px] px-3 py-1.5 text-[13px] font-geist text-[var(--db-on-surface)]">
            <Wallet size={14} className="text-[var(--db-on-surface-variant)]" />
            <span>{truncate(walletAddress)}</span>
          </div>
        ) : variant === "wallet" ? (
          <div className="bg-[var(--db-primary-container)] text-[var(--db-on-primary)] rounded-[4px] px-3 py-1.5 text-[13px] font-geist font-semibold">
            Connect Wallet
          </div>
        ) : (
          <span className="text-[13px] font-geist text-[var(--db-on-surface-variant)] hover:text-[var(--db-on-surface)] transition-colors cursor-pointer">
            ? SUPPORT
          </span>
        )}
      </div>
      <div className="h-px bg-[var(--db-outline-variant)]" />
    </header>
  );
}
