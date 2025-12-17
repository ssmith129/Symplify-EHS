"use client";

import dynamic from "next/dynamic";

const PrivacyPolicyComponent = dynamic(() => import("@/components/authentication/privacy-policy/privacyPolicy"), {
  ssr: false,
});

export default function PrivacyPolicyClient() {
  return (
    <>
      <PrivacyPolicyComponent />
    </>
  );
}

