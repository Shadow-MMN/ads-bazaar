"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRole } from "@/components/role/role-context";

export default function DashboardPage() {
  const router = useRouter();
  const { role } = useRole();

  useEffect(() => {
    if (role === "creator") {
      router.replace("/dashboard/creator");
    } else {
      // Default to business dashboard; covers "business" and the null/unauthenticated case
      router.replace("/dashboard/business");
    }
  }, [role, router]);

  // Render nothing while the redirect is in flight
  return null;
}
