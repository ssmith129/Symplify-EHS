"use client";

import dynamic from "next/dynamic";

const UiSpinnerComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-spinner/uiSpinner"), {
  ssr: false,
});

export default function UiSpinnerClient() {
  return (
    <>
      <UiSpinnerComponent />
    </>
  );
}

