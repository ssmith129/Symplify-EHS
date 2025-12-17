import { Metadata } from "next";
import UiOffcanvasClient from "./UiOffcanvasClient";

export const metadata: Metadata = {
  title: "Offcanvas | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIOffcanvas(){
    return(
        <>
            <UiOffcanvasClient />
        </>
    )
}