import { Metadata } from "next";
import FormWizardClient from "./FormWizardClient";

export const metadata: Metadata = {
  title: "Wizard | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormWizardPage(){
    return(
        <>
            <FormWizardClient />
        </>
    )
}