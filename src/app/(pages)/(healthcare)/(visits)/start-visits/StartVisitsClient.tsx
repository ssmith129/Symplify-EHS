"use client";

import dynamic from "next/dynamic";

const StartVisitsComponennt = dynamic(() => import("@/components/visits/startVisits"), {
  ssr: false,
});

export default function StartVisitsClient() {
  return (
    <>
      <StartVisitsComponennt />
    </>
  );
}

