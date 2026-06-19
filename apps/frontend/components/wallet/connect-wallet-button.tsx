"use client";

import { useEffect, useRef, useState } from "react";
import { useWallet } from "./wallet-context";

const shortenAddress = (address: string) =>
  `${address.slice(0, 4)}...${address.slice(-4)}`;

export function ConnectWalletButton() {
  const { wallet, isConnecting, error, connect, disconnect } = useWallet();
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

  if (wallet) {
    return (
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col items-end bg-primary-container text-on-primary font-semibold text-[14px] px-5 py-2.5 rounded-[4px] hover:opacity-90 transition-opacity"
        >
          <span className="text-[10px] font-bold uppercase opacity-70 leading-none">
            {wallet.network}
          </span>
          <span className="font-mono leading-tight">
            {shortenAddress(wallet.address)}
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[240px] rounded-[4px] border border-outline-variant bg-surface-container p-4 shadow-lg">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Network
            </p>
            <p className="mb-3 text-sm text-on-surface">{wallet.network}</p>

            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Address
            </p>
            <button
              type="button"
              onClick={handleCopy}
              title="Click to copy"
              className="mb-3 w-full break-all text-left font-mono text-sm text-on-surface hover:text-on-surface-variant transition-colors"
            >
              {copied ? "Copied!" : wallet.address}
            </button>

            <button
              type="button"
              onClick={() => {
                disconnect();
                setIsOpen(false);
              }}
              className="w-full rounded-[2px] border border-red-400/30 py-1.5 text-center text-sm font-semibold text-red-400 transition-colors hover:bg-red-400/10 hover:text-red-300"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-flex flex-col items-center gap-1">
      <button
        type="button"
        onClick={connect}
        disabled={isConnecting}
        className="bg-primary-container text-on-primary font-semibold text-[14px] px-5 py-2.5 rounded-[4px] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-wait"
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </button>
      {error && (
        <span className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 w-max max-w-[260px] text-center text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
