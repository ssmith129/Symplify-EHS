"use client";

import dynamic from "next/dynamic";

const FormMaskComponent = dynamic(() => import("@/components/ui-intrerface/forms/input-masks/inputMasks"), {
  ssr: false,
});

export default function FormMaskClient() {
  return (
    <>
      <FormMaskComponent />
    </>
  );
}

