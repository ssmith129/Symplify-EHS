"use client";

import dynamic from "next/dynamic";

const LoginComponent = dynamic(() => import("@/components/authentication/Login/login"), {
  ssr: false,
});

export default function LoginClient() {
  return (
    <>
      <LoginComponent />
    </>
  );
}

