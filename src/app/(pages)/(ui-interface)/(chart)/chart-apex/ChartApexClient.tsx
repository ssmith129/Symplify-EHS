"use client";

import dynamic from "next/dynamic";

const ChartApexComponent = dynamic(() => import("@/components/ui-intrerface/charts/apexcharts"), {
  ssr: false,
});

export default function ChartApexClient() {
  return (
    <>
      <ChartApexComponent />
    </>
  );
}

