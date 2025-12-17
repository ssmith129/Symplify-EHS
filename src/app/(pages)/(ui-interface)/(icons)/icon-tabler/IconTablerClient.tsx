"use client";

import dynamic from "next/dynamic";

const IconTablerComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconTabler"), {
  ssr: false,
});

export default function IconTablerClient() {
  return (
    <>
      <IconTablerComponent />
    </>
  );
}

