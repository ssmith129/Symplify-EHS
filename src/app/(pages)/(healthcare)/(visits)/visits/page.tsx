import { Metadata } from "next";
import VisitsClient from "./VisitsClient";

export const metadata: Metadata = {
  title:
    "Visits | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function VisitsPage() {
  return (
    <>
      <VisitsClient />
    </>
  );
}
