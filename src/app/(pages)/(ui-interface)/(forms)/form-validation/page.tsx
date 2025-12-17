import { Metadata } from "next";
import FormValidationClient from "./FormValidationClient";

export const metadata: Metadata = {
  title: "Validation | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormValidationPage(){
    return(
        <>
            <FormValidationClient />
        </>
    )
}