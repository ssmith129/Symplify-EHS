"use client";

import dynamic from "next/dynamic";

const UiRatioComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-ratio/uiRatio"), {
  ssr: false,
});

export default function UiRatioClient() {
  return (
    <>
      <UiRatioComponent />
    </>
  );
}

