"use client";

import dynamic from "next/dynamic";

const UiAlertsComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-alerts/uiAlerts"), {
  ssr: false,
});

export default function UiAlertsClient() {
  return (
    <>
      <UiAlertsComponent />
    </>
  );
}

