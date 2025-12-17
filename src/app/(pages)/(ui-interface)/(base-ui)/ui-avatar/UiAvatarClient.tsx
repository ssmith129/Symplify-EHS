"use client";

import dynamic from "next/dynamic";

const UiAvatarComponent = dynamic(() => import("@/components/ui-intrerface/base-ui/ui-avatar/uiAvatar"), {
  ssr: false,
});

export default function UiAvatarClient() {
  return (
    <>
      <UiAvatarComponent />
    </>
  );
}

