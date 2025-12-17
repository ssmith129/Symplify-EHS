"use client";

import dynamic from "next/dynamic";

const AppearanceSettingsComponent = dynamic(() => import("@/components/manage/settings/appearanceSettings"), {
  ssr: false,
});

export default function AppearanceSettingsClient() {
  return (
    <>
      <AppearanceSettingsComponent />
    </>
  );
}

