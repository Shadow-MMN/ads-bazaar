"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Role = "business" | "creator" | null;

type RoleContextValue = {
  role: Role;
  setRole: (role: Role) => void;
};

const ROLE_STORAGE_KEY = "adsbazaar_role";

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>(null);

  // Hydrate from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(ROLE_STORAGE_KEY);
      if (stored === "business" || stored === "creator") {
        setRoleState(stored);
      }
    } catch {
      // localStorage may be unavailable in some environments
    }
  }, []);

  const setRole = useCallback((newRole: Role) => {
    setRoleState(newRole);
    try {
      if (newRole === null) {
        localStorage.removeItem(ROLE_STORAGE_KEY);
      } else {
        localStorage.setItem(ROLE_STORAGE_KEY, newRole);
      }
    } catch {
      // localStorage may be unavailable in some environments
    }
  }, []);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole(): RoleContextValue {
  const ctx = useContext(RoleContext);
  if (!ctx) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return ctx;
}
