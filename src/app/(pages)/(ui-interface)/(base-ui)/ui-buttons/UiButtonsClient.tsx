"use client";

import dynamic from "next/dynamic";

const UiButtonsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-buttons/uiButtons"), {
  ssr: false,
});

export default function UiButtonsClient() {
  return (
    <>
      <UiButtonsComponent />
    </>
  );
}

