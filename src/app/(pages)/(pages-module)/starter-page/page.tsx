import { Metadata } from "next";
import StarterPageClient from "./StarterPageClient";

export const metadata: Metadata = {
  title: "Starter Page | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function StarterPage(){
    return(
        <>
            <StarterPageClient />
        </>
    )
}