"use client";

import dynamic from "next/dynamic";

const SocialFeedComponent = dynamic(() => import("@/components/application/socialFeed"), {
  ssr: false,
});

export default function SocialFeedClient() {
  return (
    <>
      <SocialFeedComponent />
    </>
  );
}

