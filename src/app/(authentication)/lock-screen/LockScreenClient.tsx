"use client";

import dynamic from "next/dynamic";

const LockScreenComponent = dynamic(() => import("@/components/authentication/lock-screen/lockScreen"), {
  ssr: false,
});

export default function LockScreenClient() {
  return (
    <>
      <LockScreenComponent />
    </>
  );
}

