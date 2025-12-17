import { Metadata } from "next";
import IconTypiconClient from "./IconTypiconClient";

export const metadata: Metadata = {
  title: "Typeicon | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function TypeiconPage(){
    return(
        <>
            <IconTypiconClient />
        </>
    )
}