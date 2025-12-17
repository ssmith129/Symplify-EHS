"use client";

import dynamic from "next/dynamic";

const UiButtonsGroupComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-buttons-group/uiButtonsGroup"), {
  ssr: false,
});

export default function UiButtonsGroupClient() {
  return (
    <>
      <UiButtonsGroupComponent />
    </>
  );
}

