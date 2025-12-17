import { Metadata } from "next";
import FormBasicInputsClient from "./FormBasicInputsClient";

export const metadata: Metadata = {
  title: "Basic inputs | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormBasicInputsPage(){
    return(
        <>
            <FormBasicInputsClient />
        </>
    )
}