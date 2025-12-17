"use client";

import dynamic from "next/dynamic";

const UiScrollspyComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-scrollspy/uiScrollspy"), {
  ssr: false,
});

export default function UiScrollspyClient() {
  return (
    <>
      <UiScrollspyComponent />
    </>
  );
}

