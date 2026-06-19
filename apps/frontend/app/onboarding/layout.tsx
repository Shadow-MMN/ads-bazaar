"use client";

import { OnboardingHeader } from "@/components/onboarding/onboarding-header";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#131313] flex flex-col">
      <OnboardingHeader variant="wallet" />
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        {children}
      </main>
    </div>
  );
}
