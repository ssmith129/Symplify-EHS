"use client";

import dynamic from "next/dynamic";

const FormBasicInputsComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-elements/formBasicInputs"), {
  ssr: false,
});

export default function FormBasicInputsClient() {
  return (
    <>
      <FormBasicInputsComponent />
    </>
  );
}

