"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { getAddress, isAllowed, isConnected } from "@stellar/freighter-api";
import { StepIndicator } from "@/components/onboarding/step-indicator";

const STORAGE_KEY = "adsbazaar_onboarding";

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const TRUST_SCORE = 720;
const TRUST_MAX = 1000;
const FILL_PCT = TRUST_SCORE / TRUST_MAX;

export default function CreatorCompletionPage() {
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

  const truncate = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <div className="w-full min-h-screen bg-[#131313] flex flex-col items-center relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,180,100,0.08), transparent 70%)",
        }}
      />
      <div className="w-full max-w-[900px] flex flex-col items-center px-4 py-12 relative z-10">
        <StepIndicator
          variant="labeled"
          totalSteps={3}
          currentStep={3}
        />

        <div className="w-20 h-20 bg-[var(--db-primary-container)] rounded-[8px] flex items-center justify-center">
          <CheckCircle2 size={48} className="text-[var(--db-on-primary)]" />
        </div>

        <h1 className="font-sora text-[72px] md:text-[72px] text-[40px] font-extrabold text-[var(--db-on-surface)] text-center leading-tight mt-6">
          Welcome to the Bazaar!
        </h1>
        <p className="font-geist text-[18px] text-[var(--db-on-surface-variant)] text-center mt-3 max-w-[560px]">
          Your decentralized creator journey starts now. We&apos;ve verified your
          credentials and initialized your presence on the Stellar network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-12">
          <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] p-6 flex flex-col">
            <div className="w-10 h-10 bg-[var(--db-surface-high)] rounded-[4px] flex items-center justify-center">
              <ShieldCheck
                size={20}
                className="text-[var(--db-primary-container)]"
              />
            </div>
            <h3 className="font-sora text-[18px] font-semibold text-[var(--db-on-surface)] mt-4">
              Creator Profile
            </h3>
            <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-2 leading-relaxed flex-1">
              Your profile is now discoverable by top brands looking for
              authentic storytellers.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-[var(--db-primary-container)]" />
              <span className="font-geist text-[11px] uppercase text-[var(--db-primary-container)] font-semibold">
                LIVE ON NETWORK
              </span>
            </div>
          </div>

          <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] p-6 flex flex-col">
            <div className="w-10 h-10 bg-[var(--db-surface-high)] rounded-[4px] flex items-center justify-center">
              <Wallet
                size={20}
                className="text-[var(--db-primary-container)]"
              />
            </div>
            <h3 className="font-sora text-[18px] font-semibold text-[var(--db-on-surface)] mt-4">
              Wallet Ready
            </h3>
            <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-2 leading-relaxed flex-1">
              Payouts are automated via Stellar smart contracts. Funds will
              settle directly to your vault.
            </p>
            <div className="flex items-center justify-between w-full bg-[var(--db-surface-high)] border border-[var(--db-outline-variant)] rounded-[4px] px-3 py-1.5 mt-6">
              <span className="font-geist text-[10px] uppercase text-[var(--db-on-surface-variant)]">
                VAULT ADDRESS
              </span>
              <span className="font-mono text-[13px] text-[var(--db-on-surface)]">
                {walletAddress ? truncate(walletAddress) : "GBX4...3Z9K"}
              </span>
            </div>
          </div>

          <div className="bg-[var(--db-surface)] border border-[var(--db-outline-variant)] rounded-[8px] p-6 flex flex-col">
            <div className="w-10 h-10 bg-[var(--db-surface-high)] rounded-[4px] flex items-center justify-center">
              <TrendingUp
                size={20}
                className="text-[var(--db-primary-container)]"
              />
            </div>
            <h3 className="font-sora text-[18px] font-semibold text-[var(--db-on-surface)] mt-4">
              Trust Score
            </h3>
            <p className="font-geist text-[14px] text-[var(--db-on-surface-variant)] mt-2 leading-relaxed flex-1">
              Initial reputation anchor established. Complete your first campaign
              to boost your tier.
            </p>
            <div className="flex items-center justify-between mt-6">
              <div>
                <span className="font-sora text-[32px] font-bold text-[var(--db-primary-container)]">
                  {TRUST_SCORE}
                </span>
                <span className="font-geist text-[11px] uppercase text-[var(--db-on-surface-variant)] ml-2">
                  PRIME TIER
                </span>
              </div>
              <svg width="44" height="44" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r={RADIUS}
                  fill="none"
                  stroke="var(--db-outline-variant)"
                  strokeWidth="4"
                />
                <circle
                  cx="22"
                  cy="22"
                  r={RADIUS}
                  fill="none"
                  stroke="var(--db-primary-container)"
                  strokeWidth="4"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE * (1 - FILL_PCT)}
                  strokeLinecap="round"
                  transform="rotate(-90 22 22)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full mt-12">
          <button
            onClick={() => router.push("/dashboard/creator")}
            className="w-full sm:flex-1 h-[56px] rounded-[4px] bg-[var(--db-primary-container)] text-[var(--db-on-primary)] font-geist text-[14px] font-semibold uppercase tracking-[0.05em] px-8 hover:opacity-90 transition-opacity"
          >
            EXPLORE CAMPAIGNS <ArrowRight size={16} className="inline" />
          </button>
          <button
            onClick={() => router.push("/dashboard/creator")}
            className="w-full sm:flex-1 h-[56px] rounded-[4px] border border-[var(--db-on-surface)] text-[var(--db-on-surface)] font-geist text-[14px] font-semibold uppercase px-8 hover:bg-[var(--db-surface-high)] transition-colors"
          >
            GO TO DASHBOARD
          </button>
        </div>
      </div>
    </div>
  );
}
