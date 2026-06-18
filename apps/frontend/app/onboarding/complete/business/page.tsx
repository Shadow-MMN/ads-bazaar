"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CircleCheck,
  ShieldCheck,
  Briefcase,
  Wallet,
  Lock,
} from "lucide-react";
import { getAddress, isAllowed, isConnected } from "@stellar/freighter-api";
import { StepIndicator } from "@/components/onboarding/step-indicator";

const STORAGE_KEY = "adsbazaar_onboarding";

export default function BusinessCompletionPage() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}

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

  const truncate = (addr: string) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <div className="w-full max-w-[640px] flex flex-col items-center pt-12">
      <StepIndicator variant="bars" totalSteps={3} currentStep={3} />

      <div className="w-20 h-20 bg-[var(--db-surface)] border border-[var(--db-primary-container)] rounded-[8px] flex items-center justify-center shadow-[0_0_24px_rgba(200,242,50,0.15)]">
        <CircleCheck size={48} className="text-[var(--db-primary-container)]" />
      </div>

      <h1 className="font-sora text-[56px] font-extrabold text-[var(--db-on-surface)] text-center leading-tight mt-6">
        You&apos;re all set!
      </h1>
      <p className="font-geist text-[18px] text-[var(--db-on-surface-variant)] text-center mt-3 max-w-[480px]">
        Your decentralised identity is now live on the Stellar network. You are
        ready to explore the marketplace.
      </p>

      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] px-6 py-5">
          <span className="font-geist text-[10px] font-semibold uppercase text-[var(--db-on-surface-variant)]">
            STATUS
          </span>
          <div className="flex items-center gap-2 mt-2">
            <ShieldCheck
              size={20}
              className="text-[var(--db-primary-container)]"
            />
            <span className="font-sora text-[20px] font-semibold text-[var(--db-on-surface)]">
              Account Created
            </span>
          </div>
        </div>

        <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] px-6 py-5">
          <span className="font-geist text-[10px] font-semibold uppercase text-[var(--db-on-surface-variant)]">
            ROLE
          </span>
          <div className="flex items-center gap-2 mt-2">
            <Briefcase
              size={20}
              className="text-[var(--db-primary-container)]"
            />
            <span className="font-sora text-[20px] font-semibold text-[var(--db-on-surface)]">
              BUSINESS
            </span>
          </div>
        </div>

        <div className="md:col-span-2 bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] px-6 py-5">
          <span className="font-geist text-[10px] font-semibold uppercase text-[var(--db-on-surface-variant)]">
            STELLAR WALLET CONNECTED
          </span>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Wallet
                size={18}
                className="text-[var(--db-primary-container)]"
              />
              <span className="font-mono text-[15px] text-[var(--db-on-surface)]">
                {walletAddress ? truncate(walletAddress) : "GC4Y...9K2L"}
              </span>
            </div>
            <span className="text-[11px] font-geist font-semibold uppercase text-[var(--db-primary-container)] border border-[var(--db-primary-container)] rounded-[4px] px-2 py-0.5">
              Active
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full mt-10">
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full sm:flex-1 h-[56px] rounded-[4px] bg-[var(--db-primary-container)] text-[var(--db-on-primary)] font-geist text-[14px] font-semibold uppercase tracking-[0.05em] px-8 whitespace-nowrap hover:opacity-90 transition-opacity "
        >
          ENTER DASHBOARD{" "}
          <ArrowRight size={16} className="inline mb-[2px] ml-0.5" />
        </button>
        <button
          onClick={() => router.push("/dashboard/business")}
          className="w-full sm:flex-1 h-[56px] rounded-[4px] border border-[var(--db-on-surface)] text-[var(--db-on-surface)] font-geist text-[14px] font-semibold uppercase px-8 whitespace-nowrap hover:bg-[var(--db-surface-high)] transition-colors"
        >
          VIEW PROFILE
        </button>
      </div>

      <footer className="w-full mt-16 pt-4 border-t border-[var(--db-outline-variant)]">
        <div className="flex items-center justify-between text-[11px] font-geist text-[var(--db-on-surface-variant)]">
          <div className="flex items-center gap-2">
            <Lock size={14} />
            <span className="uppercase">SECURE DECENTRALISED VERIFICATION</span>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer text-[var(--db-on-surface-variant)] hover:text-[var(--db-primary-container)] transition-colors uppercase hover:underline underline-offset-4 decoration-[var(--db-primary-container)]">
              STELLAR EXPERT
            </span>
            <span className="cursor-pointer text-[var(--db-on-surface-variant)] hover:text-[var(--db-primary-container)] transition-colors uppercase hover:underline underline-offset-4 decoration-[var(--db-primary-container)]">
              HELP CENTER
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
