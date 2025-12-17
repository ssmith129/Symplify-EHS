import { Metadata } from "next";
import IconFontawesomeClient from "./IconFontawesomeClient";

export const metadata: Metadata = {
  title: "Fontawesome | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function FontawesomePage(){
    return(
        <>
            <IconFontawesomeClient />
        </>
    )
}