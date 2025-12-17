import { Metadata } from "next";
import UiListGroupClient from "./UiListGroupClient";

export const metadata: Metadata = {
  title: "List Group | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UIListGroup(){
    return(
        <>
            <UiListGroupClient />
        </>
    )
}