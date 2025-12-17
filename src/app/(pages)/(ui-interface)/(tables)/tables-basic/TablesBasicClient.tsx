"use client";

import dynamic from "next/dynamic";

const TablesBasicComponent = dynamic(() => import("@/components/ui-intrerface/table/tables-basic"), {
  ssr: false,
});

export default function TablesBasicClient() {
  return (
    <>
      <TablesBasicComponent />
    </>
  );
}

