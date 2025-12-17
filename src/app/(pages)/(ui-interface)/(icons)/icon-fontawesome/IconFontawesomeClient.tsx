"use client";

import dynamic from "next/dynamic";

const IconFontawesomeComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconFontawesome"), {
  ssr: false,
});

export default function IconFontawesomeClient() {
  return (
    <>
      <IconFontawesomeComponent />
    </>
  );
}

