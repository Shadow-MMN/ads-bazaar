"use client";

import { createContext, useContext } from "react";

export type WalletState = {
  address: string;
  network: string;
};

export type WalletContextValue = {
  wallet: WalletState | null;
  isConnecting: boolean;
  error: string | null;
  connect: () => Promise<WalletState | null>;
  disconnect: () => void;
};

export const WalletContext = createContext<WalletContextValue | null>(null);

export function useWallet(): WalletContextValue {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
