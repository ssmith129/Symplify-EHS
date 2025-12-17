"use client";

import dynamic from "next/dynamic";

const UiTypographyComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-typography/uiTypography"), {
  ssr: false,
});

export default function UiTypographyClient() {
  return (
    <>
      <UiTypographyComponent />
    </>
  );
}

