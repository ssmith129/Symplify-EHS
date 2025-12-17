"use client";

import dynamic from "next/dynamic";

const WidgetsComponent = dynamic(() => import("@/components/ui-intrerface/widgets/widgets"), {
  ssr: false,
});

export default function WidgetsClient() {
  return (
    <>
      <WidgetsComponent />
    </>
  );
}

