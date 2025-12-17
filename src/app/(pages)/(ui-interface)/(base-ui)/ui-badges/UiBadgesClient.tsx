"use client";

import dynamic from "next/dynamic";

const UiBadgesComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-badges/uiBadges"), {
  ssr: false,
});

export default function UiBadgesClient() {
  return (
    <>
      <UiBadgesComponent />
    </>
  );
}

