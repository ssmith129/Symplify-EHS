"use client";

import dynamic from "next/dynamic";

const FormHorizontalComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-layouts/formHorizontal"), {
  ssr: false,
});

export default function FormHorizontalClient() {
  return (
    <>
      <FormHorizontalComponent />
    </>
  );
}

