"use client";

import dynamic from "next/dynamic";

const IconBootstrapComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconBootstrap"), {
  ssr: false,
});

export default function IconBootstrapClient() {
  return (
    <>
      <IconBootstrapComponent />
    </>
  );
}

