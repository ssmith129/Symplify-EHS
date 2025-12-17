import { Metadata } from "next";
import FormCheckboxRadiosClient from "./FormCheckboxRadiosClient";

export const metadata: Metadata = {
  title: "Checkbox radios | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormCheckboxRadiosPage(){
    return(
        <>
            <FormCheckboxRadiosClient />
        </>
    )
}