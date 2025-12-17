"use client";

import dynamic from "next/dynamic";

const UiLightboxesComponent = dynamic(() => import("@/components/ui-intrerface/ui-advance/uiLightbox"), {
  ssr: false,
});

export default function UiLightboxClient() {
  return (
    <>
      <UiLightboxesComponent />
    </>
  );
}

