"use client";

import dynamic from "next/dynamic";

const FormInputGroupsComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-elements/formInputGroups"), {
  ssr: false,
});

export default function FormInputGroupsClient() {
  return (
    <>
      <FormInputGroupsComponent />
    </>
  );
}

