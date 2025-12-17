"use client";

import dynamic from "next/dynamic";

const FormPickersComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-pickers/formPickers"), {
  ssr: false,
});

export default function FormPickersClient() {
  return (
    <>
      <FormPickersComponent />
    </>
  );
}

