"use client";

import dynamic from "next/dynamic";

const UiListGroupComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-list-group/uiListGroup"), {
  ssr: false,
});

export default function UiListGroupClient() {
  return (
    <>
      <UiListGroupComponent />
    </>
  );
}

