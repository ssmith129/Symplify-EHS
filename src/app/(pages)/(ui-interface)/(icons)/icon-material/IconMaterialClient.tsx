"use client";

import dynamic from "next/dynamic";

const IconMaterialComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconMaterial"), {
  ssr: false,
});

export default function IconMaterialClient() {
  return (
    <>
      <IconMaterialComponent />
    </>
  );
}

