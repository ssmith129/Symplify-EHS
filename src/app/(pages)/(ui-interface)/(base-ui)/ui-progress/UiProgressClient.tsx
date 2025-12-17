"use client";

import dynamic from "next/dynamic";

const UiProgressComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-progress/uiProgress"), {
  ssr: false,
});

export default function UiProgressClient() {
  return (
    <>
      <UiProgressComponent />
    </>
  );
}

