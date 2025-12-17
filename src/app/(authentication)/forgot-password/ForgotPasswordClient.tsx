"use client";

import dynamic from "next/dynamic";

const ForgotPasswordComponent = dynamic(() => import("@/components/authentication/forgot-password/forgotPassword"), {
  ssr: false,
});

export default function ForgotPasswordClient() {
  return (
    <>
      <ForgotPasswordComponent />
    </>
  );
}

