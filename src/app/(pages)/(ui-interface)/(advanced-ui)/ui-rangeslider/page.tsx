import { Metadata } from "next";
import UiRangesliderClient from "./UiRangesliderClient";

export const metadata: Metadata = {
  title:
    "Rangeslider | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function RangesliderPage() {
  return (
    <>
      <UiRangesliderClient />
    </>
  );
}
