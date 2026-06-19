"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  getAddress,
  getNetworkDetails,
  isAllowed,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";
import { WalletContext, type WalletState } from "./wallet-context";

export function WalletProvider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState<WalletState | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const restoreWallet = async () => {
      const connected = await isConnected();
      if (connected.error || !connected.isConnected) return;

      const allowed = await isAllowed();
      if (allowed.error || !allowed.isAllowed) return;

      const [addressResult, networkResult] = await Promise.all([
        getAddress(),
        getNetworkDetails(),
      ]);

      if (!isMounted || addressResult.error || !addressResult.address) return;

      setWallet({
        address: addressResult.address,
        network: networkResult.error ? "Stellar" : networkResult.network,
      });
    };

    restoreWallet();
    return () => {
      isMounted = false;
    };
  }, []);

  const connect = async (): Promise<WalletState | null> => {
    setIsConnecting(true);
    setError(null);

    try {
      const connected = await isConnected();
      if (connected.error || !connected.isConnected) {
        throw new Error("Install Freighter to connect a Stellar wallet.");
      }

      const access = await requestAccess();
      if (access.error || !access.address) {
        const msg =
          access.error &&
          typeof access.error === "object" &&
          "message" in access.error
            ? String((access.error as { message: string }).message)
            : "Unable to connect wallet.";
        throw new Error(msg);
      }

      const network = await getNetworkDetails();
      const newWallet: WalletState = {
        address: access.address,
        network: network.error ? "Stellar" : network.network,
      };
      setWallet(newWallet);
      return newWallet;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to connect wallet.");
      return null;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setWallet(null);
    setError(null);
  };

  return (
    <WalletContext.Provider value={{ wallet, isConnecting, error, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}
