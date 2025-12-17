"use client";

import dynamic from "next/dynamic";

const PlansBillingsSettingsComponent = dynamic(() => import("@/components/manage/settings/plansBillingsSettings"), {
  ssr: false,
});

export default function PlansBillingsSettingsClient() {
  return (
    <>
      <PlansBillingsSettingsComponent />
    </>
  );
}

