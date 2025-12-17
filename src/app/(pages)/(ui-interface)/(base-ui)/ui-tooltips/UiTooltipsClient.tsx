"use client";

import dynamic from "next/dynamic";

const UiTooltipsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-tooltips/uiTooltips"), {
  ssr: false,
});

export default function UiTooltipsClient() {
  return (
    <>
      <UiTooltipsComponent />
    </>
  );
}

