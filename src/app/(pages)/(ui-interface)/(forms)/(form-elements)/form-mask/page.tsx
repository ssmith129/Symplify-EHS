import { Metadata } from "next";
import FormMaskClient from "./FormMaskClient";

export const metadata: Metadata = {
  title: "Mask input | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormMaskInputPage(){
    return(
        <>
            <FormMaskClient />
        </>
    )
}