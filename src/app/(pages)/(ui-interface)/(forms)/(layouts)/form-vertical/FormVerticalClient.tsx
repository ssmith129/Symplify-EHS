"use client";

import dynamic from "next/dynamic";

const FormVerticalComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-layouts/formVertical"), {
  ssr: false,
});

export default function FormVerticalClient() {
  return (
    <>
      <FormVerticalComponent />
    </>
  );
}

