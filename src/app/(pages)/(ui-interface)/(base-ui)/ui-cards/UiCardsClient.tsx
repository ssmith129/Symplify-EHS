"use client";

import dynamic from "next/dynamic";

const UiCardsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-cards/uiCards"), {
  ssr: false,
});

export default function UiCardsClient() {
  return (
    <>
      <UiCardsComponent />
    </>
  );
}

