"use client";

import dynamic from "next/dynamic";

const EmailComposeComponent = dynamic(() => import("@/components/application/emailCompose"), {
  ssr: false,
});

export default function EmailComposeClient() {
  return (
    <>
      <EmailComposeComponent />
    </>
  );
}

