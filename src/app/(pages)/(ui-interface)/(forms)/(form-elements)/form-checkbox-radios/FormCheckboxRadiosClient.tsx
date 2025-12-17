"use client";

import dynamic from "next/dynamic";

const FormCheckboxRadiosComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-elements/formCheckboxRadios"), {
  ssr: false,
});

export default function FormCheckboxRadiosClient() {
  return (
    <>
      <FormCheckboxRadiosComponent />
    </>
  );
}

