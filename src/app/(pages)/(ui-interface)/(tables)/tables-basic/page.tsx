import { Metadata } from "next";
import TablesBasicClient from "./TablesBasicClient";

export const metadata: Metadata = {
  title: "Basic Table | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function TablesBasicPage(){
    return(
        <>
            <TablesBasicClient />
        </>
    )
}