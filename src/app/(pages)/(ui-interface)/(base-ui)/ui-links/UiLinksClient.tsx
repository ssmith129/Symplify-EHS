"use client";

import dynamic from "next/dynamic";

const UiLinksComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-links/uiLinks"), {
  ssr: false,
});

export default function UiLinksClient() {
  return (
    <>
      <UiLinksComponent />
    </>
  );
}

