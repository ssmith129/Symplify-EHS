"use client";

import dynamic from "next/dynamic";

const FileUploadPageComponent = dynamic(() => import("@/components/ui-intrerface/forms/form-elements/formFileupload"), {
  ssr: false,
});

export default function FormFileuploadClient() {
  return (
    <>
      <FileUploadPageComponent />
    </>
  );
}

