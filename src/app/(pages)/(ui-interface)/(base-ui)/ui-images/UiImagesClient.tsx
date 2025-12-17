"use client";

import dynamic from "next/dynamic";

const UiImagesComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-images/uiImages"), {
  ssr: false,
});

export default function UiImagesClient() {
  return (
    <>
      <UiImagesComponent />
    </>
  );
}

