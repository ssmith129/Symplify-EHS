"use client";

import dynamic from "next/dynamic";

const FormSelect2Component = dynamic(() => import("@/components/ui-intrerface/forms/form-select2/formSelect2"), {
  ssr: false,
});

export default function FormSelectClient() {
  return (
    <>
      <FormSelect2Component />
    </>
  );
}

