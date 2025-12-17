"use client";

import dynamic from "next/dynamic";

const SecuritySettingsComponent = dynamic(() => import("@/components/manage/settings/securitySettings"), {
  ssr: false,
});

export default function SecuritySettingsClient() {
  return (
    <>
      <SecuritySettingsComponent />
    </>
  );
}

