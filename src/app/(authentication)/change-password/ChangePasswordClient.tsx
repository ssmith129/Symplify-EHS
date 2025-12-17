"use client";

import dynamic from "next/dynamic";

const ChangePasswordComponent = dynamic(() => import("@/components/authentication/change-password/change-password"), {
  ssr: false,
});

export default function ChangePasswordClient() {
  return (
    <>
      <ChangePasswordComponent />
    </>
  );
}

