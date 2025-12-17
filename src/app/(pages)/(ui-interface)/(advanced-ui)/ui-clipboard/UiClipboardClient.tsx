"use client";

import dynamic from "next/dynamic";

const UiClipBoardComponent = dynamic(() => import("@/components/ui-intrerface/ui-advance/uiClipboard"), {
  ssr: false,
});

export default function UiClipboardClient() {
  return (
    <>
      <UiClipBoardComponent />
    </>
  );
}

