"use client";

import dynamic from "next/dynamic";

const UiOffcanvasComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-offcanvas/uiOffcanvas"), {
  ssr: false,
});

export default function UiOffcanvasClient() {
  return (
    <>
      <UiOffcanvasComponent />
    </>
  );
}

