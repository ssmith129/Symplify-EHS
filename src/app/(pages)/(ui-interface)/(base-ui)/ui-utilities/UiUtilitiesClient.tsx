"use client";

import dynamic from "next/dynamic";

const UiUtilitiesComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-utilities/uiUtilities"), {
  ssr: false,
});

export default function UiUtilitiesClient() {
  return (
    <>
      <UiUtilitiesComponent />
    </>
  );
}

