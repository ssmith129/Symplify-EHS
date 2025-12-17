"use client";

import dynamic from "next/dynamic";

const FormValidationComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-validation/formValidation"), {
  ssr: false,
});

export default function FormValidationClient() {
  return (
    <>
      <FormValidationComponent />
    </>
  );
}

