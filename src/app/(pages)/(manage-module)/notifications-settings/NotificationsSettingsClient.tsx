"use client";

import dynamic from "next/dynamic";

const NotificationsSettingsComponent = dynamic(() => import("@/components/manage/settings/notificationsSettings"), {
  ssr: false,
});

export default function NotificationsSettingsClient() {
  return (
    <>
      <NotificationsSettingsComponent />
    </>
  );
}

