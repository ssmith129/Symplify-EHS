import { Metadata } from "next";
import FormFloatingLabelsClient from "./FormFloatingLabelsClient";

export const metadata: Metadata = {
  title: "Floating labels | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormFloatingLabelsPage(){
    return(
        <>
            <FormFloatingLabelsClient />
        </>
    )
}