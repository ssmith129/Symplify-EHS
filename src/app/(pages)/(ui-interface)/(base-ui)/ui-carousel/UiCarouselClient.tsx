"use client";

import dynamic from "next/dynamic";

const UiCarouselComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-carousel/uiCarousel"), {
  ssr: false,
});

export default function UiCarouselClient() {
  return (
    <>
      <UiCarouselComponent />
    </>
  );
}

