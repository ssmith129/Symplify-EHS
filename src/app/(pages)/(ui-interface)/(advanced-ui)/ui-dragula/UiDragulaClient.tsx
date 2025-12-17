"use client";

import dynamic from "next/dynamic";

const UiDragulaComponent = dynamic(() => import("@/components/ui-intrerface/ui-advance/dragula/dragula"), {
  ssr: false,
});

export default function UiDragulaClient() {
  return (
    <>
      <UiDragulaComponent />
    </>
  );
}

