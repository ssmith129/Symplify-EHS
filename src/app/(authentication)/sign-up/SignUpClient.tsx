"use client";

import dynamic from "next/dynamic";

const SignUpComponent = dynamic(() => import("@/components/authentication/register/signUp"), {
  ssr: false,
});

export default function SignUpClient() {
  return (
    <>
      <SignUpComponent />
    </>
  );
}

