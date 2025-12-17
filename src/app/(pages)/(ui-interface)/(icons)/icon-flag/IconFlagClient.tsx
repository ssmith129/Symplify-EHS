"use client";

import dynamic from "next/dynamic";

const IconFlagComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconFlag"), {
  ssr: false,
});

export default function IconFlagClient() {
  return (
    <>
      <IconFlagComponent />
    </>
  );
}

