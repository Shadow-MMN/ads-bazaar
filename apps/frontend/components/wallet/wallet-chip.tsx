"use client";

import { useEffect, useRef, useState } from "react";
import { Wallet } from "lucide-react";
import { useWallet } from "./wallet-context";

const shortenAddress = (address: string) =>
  `${address.slice(0, 4)}...${address.slice(-4)}`;

export function WalletChip() {
  const { wallet, isConnecting, connect, disconnect } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleCopy = () => {
    if (!wallet) return;
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={wallet ? () => setIsOpen((prev) => !prev) : connect}
        disabled={isConnecting}
        aria-label={wallet ? "Wallet options" : "Connect wallet"}
        className="flex items-center gap-2 rounded border border-[var(--dash-border)] bg-[var(--dash-surface)] px-4 py-2 transition-colors hover:bg-[var(--dash-border)] disabled:cursor-wait disabled:opacity-60"
      >
        <Wallet
          className={`size-[18px] ${wallet ? "text-[var(--dash-accent)]" : "text-[var(--dash-muted)]"}`}
          aria-hidden="true"
        />
        <span className="text-[15px] font-medium text-[var(--dash-body)]">
          {isConnecting
            ? "Connecting..."
            : wallet
            ? shortenAddress(wallet.address)
            : "Connect"}
        </span>
      </button>

      {isOpen && wallet && (
        <div className="absolute right-0 top-full mt-2 z-50 min-w-[240px] rounded border border-[var(--dash-border)] bg-[var(--dash-surface)] p-4 shadow-lg">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--dash-muted)]">
            Network
          </p>
          <p className="mb-3 text-sm text-[var(--dash-body)]">{wallet.network}</p>

          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--dash-muted)]">
            Address
          </p>
          <button
            type="button"
            onClick={handleCopy}
            title="Click to copy"
            className="mb-3 w-full break-all text-left font-mono text-sm text-[var(--dash-body)] hover:text-[var(--dash-muted)] transition-colors"
          >
            {copied ? "Copied!" : wallet.address}
          </button>

          <button
            type="button"
            onClick={() => {
              disconnect();
              setIsOpen(false);
            }}
            className="w-full rounded border border-red-400/30 py-1.5 text-center text-sm font-semibold text-red-400 transition-colors hover:bg-red-400/10 hover:text-red-300"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
