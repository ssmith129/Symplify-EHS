"use client";

import dynamic from "next/dynamic";

const UiRangeSlidesComponent = dynamic(() => import("@/components/ui-intrerface/ui-advance/uiRangeslider"), {
  ssr: false,
});

export default function UiRangesliderClient() {
  return (
    <>
      <UiRangeSlidesComponent />
    </>
  );
}

