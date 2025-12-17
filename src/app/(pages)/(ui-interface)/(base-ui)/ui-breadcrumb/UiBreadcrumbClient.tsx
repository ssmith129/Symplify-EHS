"use client";

import dynamic from "next/dynamic";

const UiBreadcrumbComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-breadcrumb/uiBreadcrumb"), {
  ssr: false,
});

export default function UiBreadcrumbClient() {
  return (
    <>
      <UiBreadcrumbComponent />
    </>
  );
}

