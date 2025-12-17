import { Metadata } from "next";
import FormInputGroupsClient from "./FormInputGroupsClient";

export const metadata: Metadata = {
  title: "Input Groups | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormInputGroupsPage(){
    return(
        <>
            <FormInputGroupsClient />
        </>
    )
}