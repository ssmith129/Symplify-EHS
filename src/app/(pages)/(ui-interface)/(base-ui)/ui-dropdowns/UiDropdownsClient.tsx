"use client";

import dynamic from "next/dynamic";

const UiDropdownsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-dropdowns/uiDropdowns"), {
  ssr: false,
});

export default function UiDropdownsClient() {
  return (
    <>
      <UiDropdownsComponent />
    </>
  );
}

