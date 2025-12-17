"use client";

import dynamic from "next/dynamic";

const VisitsComponent = dynamic(() => import("@/components/visits/visits"), {
  ssr: false,
});

export default function VisitsClient() {
  return (
    <>
      <VisitsComponent />
    </>
  );
}

