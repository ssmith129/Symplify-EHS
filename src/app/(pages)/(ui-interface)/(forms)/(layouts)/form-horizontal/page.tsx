import { Metadata } from "next";
import FormHorizontalClient from "./FormHorizontalClient";

export const metadata: Metadata = {
  title: "Horizantal Form | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormHorizantalPage(){
    return(
        <>
            <FormHorizontalClient />
        </>
    )
}