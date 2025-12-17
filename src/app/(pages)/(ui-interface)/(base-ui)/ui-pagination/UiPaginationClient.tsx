"use client";

import dynamic from "next/dynamic";

const UiPaginationComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-pagination/uiPagination"), {
  ssr: false,
});

export default function UiPaginationClient() {
  return (
    <>
      <UiPaginationComponent />
    </>
  );
}

