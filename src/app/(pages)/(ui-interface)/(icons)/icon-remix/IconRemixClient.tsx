"use client";

import dynamic from "next/dynamic";

const IconRemixComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconRemix"), {
  ssr: false,
});

export default function IconRemixClient() {
  return (
    <>
      <IconRemixComponent />
    </>
  );
}

