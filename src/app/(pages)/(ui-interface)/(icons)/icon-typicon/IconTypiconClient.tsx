"use client";

import dynamic from "next/dynamic";

const IconTypiconComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconTypicon"), {
  ssr: false,
});

export default function IconTypiconClient() {
  return (
    <>
      <IconTypiconComponent />
    </>
  );
}

