import { Metadata } from "next";
import Error500Client from "./Error500Client";

export const metadata: Metadata = {
  title: "Error 500 | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function Error500(){
    return(
        <>
            <Error500Client />
        </>
    )
}