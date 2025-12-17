"use client";

import dynamic from "next/dynamic";

const UiCollapseComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-collapse/uiCollapse"), {
  ssr: false,
});

export default function UiCollapseClient() {
  return (
    <>
      <UiCollapseComponent />
    </>
  );
}

