"use client";

import dynamic from "next/dynamic";

const UiRatingComponent = dynamic(() => import("@/components/ui-intrerface/ui-advance/uiRating"), {
  ssr: false,
});

export default function UiRatingClient() {
  return (
    <>
      <UiRatingComponent />
    </>
  );
}

