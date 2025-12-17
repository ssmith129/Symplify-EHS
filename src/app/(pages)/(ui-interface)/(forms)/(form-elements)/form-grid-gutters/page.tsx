import { Metadata } from "next";
import FormGridGuttersClient from "./FormGridGuttersClient";

export const metadata: Metadata = {
  title: "Grid Gutters | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function FormGridGuttersPage(){
    return(
        <>
            <FormGridGuttersClient />
        </>
    )
}