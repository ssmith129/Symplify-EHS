import { Metadata } from "next";
import FormPickersClient from "./FormPickersClient";

export const metadata: Metadata = {
  title: "Pickers | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormPickersPage(){
    return(
        <>
            <FormPickersClient />
        </>
    )
}