"use client";

import dynamic from "next/dynamic";

const UserPermissionsSettingsComponent = dynamic(() => import("@/components/manage/settings/userPermissionsSettings"), {
  ssr: false,
});

export default function UserPermissionsSettingsClient() {
  return (
    <>
      <UserPermissionsSettingsComponent />
    </>
  );
}

