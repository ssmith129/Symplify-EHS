import { Metadata } from "next";
import IconWeatherClient from "./IconWeatherClient";

export const metadata: Metadata = {
  title: "Weather | Dreams EMR - Responsive Bootstrap 5 Medical Admin Template",
};

export default function WeatherPage(){
    return(
        <>
            <IconWeatherClient />
        </>
    )
}