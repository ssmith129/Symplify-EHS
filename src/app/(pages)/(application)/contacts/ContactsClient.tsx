"use client";

import dynamic from "next/dynamic";

const ContactsComponent = dynamic(() => import("@/components/application/contacts"), {
  ssr: false,
});

export default function ContactsClient() {
  return (
    <>
      <ContactsComponent />
    </>
  );
}

