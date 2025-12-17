"use client";

import dynamic from "next/dynamic";

const DashboardComponent = dynamic(() => import("@/components/dashboard/dashboard"), {
  ssr: false,
});

export default function DashboardClient() {
  return (
    <>
      <DashboardComponent />
    </>
  );
}

