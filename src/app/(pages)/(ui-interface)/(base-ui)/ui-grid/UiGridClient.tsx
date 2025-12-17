"use client";

import dynamic from "next/dynamic";

const UiGridComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-grid/uiGrid"), {
  ssr: false,
});

export default function UiGridClient() {
  return (
    <>
      <UiGridComponent />
    </>
  );
}

