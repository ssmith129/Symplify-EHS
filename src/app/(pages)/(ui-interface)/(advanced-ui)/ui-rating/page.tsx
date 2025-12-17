import { Metadata } from "next";
import UiRatingClient from "./UiRatingClient";

export const metadata: Metadata = {
  title:
    "Rating | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function RatingPage() {
  return (
    <>
      <UiRatingClient />
    </>
  );
}
