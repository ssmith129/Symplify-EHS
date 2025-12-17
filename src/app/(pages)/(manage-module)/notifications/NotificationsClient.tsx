"use client";

import dynamic from "next/dynamic";

const NotificationsComponent = dynamic(() => import("@/components/manage/notifications/notifications"), {
  ssr: false,
});

export default function NotificationsClient() {
  return (
    <>
      <NotificationsComponent />
    </>
  );
}

