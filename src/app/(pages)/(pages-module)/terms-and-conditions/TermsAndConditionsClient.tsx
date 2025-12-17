"use client";

import dynamic from "next/dynamic";

const TermsAndConditionsComponent = dynamic(() => import("@/components/authentication/terms-and-conditions/termsAndConditions"), {
  ssr: false,
});

export default function TermsAndConditionsClient() {
  return (
    <>
      <TermsAndConditionsComponent />
    </>
  );
}

