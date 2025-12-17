import { Metadata } from "next";
import Error404Client from "./Error404Client";

export const metadata: Metadata = {
  title: "Error 404 | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function Error404(){
    return(
        <>
            <Error404Client />
        </>
    )
}