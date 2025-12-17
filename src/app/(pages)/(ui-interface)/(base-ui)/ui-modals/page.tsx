import { Metadata } from "next";
import UiModalsClient from "./UiModalsClient";

export const metadata: Metadata = {
  title: "Modals | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIModals(){
    return(
        <>
            <UiModalsClient />
        </>
    )
}