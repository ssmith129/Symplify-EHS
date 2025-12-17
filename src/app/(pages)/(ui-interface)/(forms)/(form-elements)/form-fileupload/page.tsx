import { Metadata } from "next";
import FormFileuploadClient from "./FormFileuploadClient";

export const metadata: Metadata = {
  title: "Fileupload | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormFileuploadPage(){
    return(
        <>
            <FormFileuploadClient />
        </>
    )
}