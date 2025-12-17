"use client";

import dynamic from "next/dynamic";

const UiModalsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-modals/uiModals"), {
  ssr: false,
});

export default function UiModalsClient() {
  return (
    <>
      <UiModalsComponent />
    </>
  );
}

