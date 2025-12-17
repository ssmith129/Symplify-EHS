"use client";

import dynamic from "next/dynamic";

const PreferencesSettingsComponent = dynamic(() => import("@/components/manage/settings/preferencesSettings"), {
  ssr: false,
});

export default function PreferencesSettingsClient() {
  return (
    <>
      <PreferencesSettingsComponent />
    </>
  );
}

