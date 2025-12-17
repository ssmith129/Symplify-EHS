import { Metadata } from "next";
import StartVisitsClient from "./StartVisitsClient";

export const metadata: Metadata = {
  title:
    "Start Visits | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function StartVisitsPage() {
  return (
    <>
      <StartVisitsClient />
    </>
  );
}
