import { Metadata } from "next";
import UiNavTabsClient from "./UiNavTabsClient";

export const metadata: Metadata = {
  title: "Nav Tabs | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function UINavTabs(){
    return(
        <>
            <UiNavTabsClient />
        </>
    )
}