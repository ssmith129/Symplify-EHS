"use client";

import dynamic from "next/dynamic";

const FormWizardComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-wizard/formWizard"), {
  ssr: false,
});

export default function FormWizardClient() {
  return (
    <>
      <FormWizardComponent />
    </>
  );
}

