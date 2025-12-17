"use client";

import dynamic from "next/dynamic";

const UiToastsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-toasts/uiToasts"), {
  ssr: false,
});

export default function UiToastsClient() {
  return (
    <>
      <UiToastsComponent />
    </>
  );
}

