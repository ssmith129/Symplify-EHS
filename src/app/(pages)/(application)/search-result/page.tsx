import { Metadata } from "next";
import SearchResultClient from "./SearchResultClient";

export const metadata: Metadata = {
  title:
    "Search Result | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function SearchResultPage() {
  return (
    <>
      <SearchResultClient />
    </>
  );
}
