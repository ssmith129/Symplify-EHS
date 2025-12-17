"use client";

import dynamic from "next/dynamic";

const IconWeatherComponent = dynamic(() => import("@/components/ui-intrerface/icons/iconWeather"), {
  ssr: false,
});

export default function IconWeatherClient() {
  return (
    <>
      <IconWeatherComponent />
    </>
  );
}

