import { Metadata } from "next";
import UiSpinnerClient from "./UiSpinnerClient";

export const metadata: Metadata = {
  title: "Spinner | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UISpinner(){
    return(
        <>
            <UiSpinnerClient />
        </>
    )
}