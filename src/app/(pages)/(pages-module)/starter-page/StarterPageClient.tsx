"use client";

import dynamic from "next/dynamic";

const StarterPageComponent = dynamic(() => import("@/components/authentication/starter-page/starterPage"), {
  ssr: false,
});

export default function StarterPageClient() {
  return (
    <>
      <StarterPageComponent />
    </>
  );
}

