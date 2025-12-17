"use client";

import dynamic from "next/dynamic";

const UnderMaintenanceComponent = dynamic(() => import("@/components/authentication/under-maintenance/underMaintenance"), {
  ssr: false,
});

export default function UnderMaintenanceClient() {
  return (
    <>
      <UnderMaintenanceComponent />
    </>
  );
}

