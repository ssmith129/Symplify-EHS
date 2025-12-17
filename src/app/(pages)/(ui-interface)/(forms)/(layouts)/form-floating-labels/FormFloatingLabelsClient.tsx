"use client";

import dynamic from "next/dynamic";

const FormFloatingLabelsComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-layouts/formFloatingLabels"), {
  ssr: false,
});

export default function FormFloatingLabelsClient() {
  return (
    <>
      <FormFloatingLabelsComponent />
    </>
  );
}

