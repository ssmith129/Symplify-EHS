"use client";

import dynamic from "next/dynamic";

const UiPlaceholdersComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-placeholders/uiPlaceholders"), {
  ssr: false,
});

export default function UiPlaceholdersClient() {
  return (
    <>
      <UiPlaceholdersComponent />
    </>
  );
}

