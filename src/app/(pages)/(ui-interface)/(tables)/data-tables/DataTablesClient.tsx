"use client";

import dynamic from "next/dynamic";

const DataTablesComponent = dynamic(() => import("@/components/ui-intrerface/table/data-tables"), {
  ssr: false,
});

export default function DataTablesClient() {
  return (
    <>
      <DataTablesComponent />
    </>
  );
}

