"use client";

import dynamic from "next/dynamic";

const GeneralSettingsComponent = dynamic(() => import("@/components/manage/settings/generalSettings"), {
  ssr: false,
});

export default function GeneralSettingsClient() {
  return (
    <>
      <GeneralSettingsComponent />
    </>
  );
}

