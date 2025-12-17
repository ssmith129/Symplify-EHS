"use client";

import dynamic from "next/dynamic";

const UiAccordionComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-accordion/uiAccordion"), {
  ssr: false,
});

export default function UiAccordionClient() {
  return (
    <>
      <UiAccordionComponent />
    </>
  );
}

