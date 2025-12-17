import { Metadata } from "next";
import UiCarouselClient from "./UiCarouselClient";

export const metadata: Metadata = {
  title: "Carousel | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};


export default function UICarousel(){
    return(
        <>
            <UiCarouselClient />
        </>
    )
}