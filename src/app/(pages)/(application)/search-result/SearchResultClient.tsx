"use client";

import dynamic from "next/dynamic";

const SearchResultComponent = dynamic(() => import("@/components/application/searchResult"), {
  ssr: false,
});

export default function SearchResultClient() {
  return (
    <>
      <SearchResultComponent />
    </>
  );
}

