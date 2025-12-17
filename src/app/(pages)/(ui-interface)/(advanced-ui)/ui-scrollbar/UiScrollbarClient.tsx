"use client";

import dynamic from "next/dynamic";

const UiScrollbarComponent = dynamic(() => import("@/components/ui-intrerface/ui-advance/uiScrollbar"), {
  ssr: false,
});

export default function UiScrollbarClient() {
  return (
    <>
      <UiScrollbarComponent />
    </>
  );
}

