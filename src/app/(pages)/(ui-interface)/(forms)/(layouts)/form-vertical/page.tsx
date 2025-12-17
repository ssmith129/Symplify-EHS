import { Metadata } from "next";
import FormVerticalClient from "./FormVerticalClient";

export const metadata: Metadata = {
  title: "Vertical Form | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormVerticalPage(){
    return(
        <>
            <FormVerticalClient />
        </>
    )
}