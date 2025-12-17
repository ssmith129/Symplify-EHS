"use client";

import dynamic from "next/dynamic";

const ContactListComponent = dynamic(() => import("@/components/application/contactList"), {
  ssr: false,
});

export default function ContactListClient() {
  return (
    <>
      <ContactListComponent />
    </>
  );
}

