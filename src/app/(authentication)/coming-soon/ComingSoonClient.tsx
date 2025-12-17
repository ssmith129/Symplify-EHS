"use client";

import dynamic from "next/dynamic";

const ComingSoonComponent = dynamic(() => import("@/components/authentication/coming-soon/comingSoon"), {
  ssr: false,
});

export default function ComingSoonClient() {
  return (
    <>
      <ComingSoonComponent />
    </>
  );
}

