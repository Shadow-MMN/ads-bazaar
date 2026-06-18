"use client";

import { usePathname } from "next/navigation";
import { OnboardingHeader } from "@/components/onboarding/onboarding-header";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStep1 =
    pathname === "/onboarding/role" || pathname === "/onboarding";

  return (
    <div className="min-h-screen bg-[#131313] flex flex-col">
      <OnboardingHeader variant={isStep1 ? "wallet" : "support"} />
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        {children}
      </main>
    </div>
  );
}
