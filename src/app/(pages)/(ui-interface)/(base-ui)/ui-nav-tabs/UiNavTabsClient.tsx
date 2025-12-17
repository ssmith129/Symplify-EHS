"use client";

import dynamic from "next/dynamic";

const UiNavTabsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-nav-tabs/uiNavTabs"), {
  ssr: false,
});

export default function UiNavTabsClient() {
  return (
    <>
      <UiNavTabsComponent />
    </>
  );
}

