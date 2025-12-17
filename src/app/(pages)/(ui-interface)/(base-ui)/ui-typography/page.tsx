import { Metadata } from "next";
import UiTypographyClient from "./UiTypographyClient";

export const metadata: Metadata = {
  title: "Typography | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UITypography(){
    return(
        <>
            <UiTypographyClient />
        </>
    )
}