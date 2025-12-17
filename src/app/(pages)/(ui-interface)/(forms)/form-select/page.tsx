import { Metadata } from "next";
import FormSelectClient from "./FormSelectClient";

export const metadata: Metadata = {
  title: "Select | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormSelectPage(){
    return(
        <>
            <FormSelectClient />
        </>
    )
}