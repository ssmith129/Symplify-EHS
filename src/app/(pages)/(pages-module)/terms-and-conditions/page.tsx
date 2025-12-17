import { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms and conditions | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function TermsAndConditions(){
    return(
        <>
            <TermsAndConditionsClient />
        </>
    )
}