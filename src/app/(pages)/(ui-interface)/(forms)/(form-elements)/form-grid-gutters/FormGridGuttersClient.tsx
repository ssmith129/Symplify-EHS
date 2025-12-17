"use client";

import dynamic from "next/dynamic";

const FormGridGuttersComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-elements/formGridGutters"), {
  ssr: false,
});

export default function FormGridGuttersClient() {
  return (
    <>
      <FormGridGuttersComponent />
    </>
  );
}

