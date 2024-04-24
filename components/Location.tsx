import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  throw new Error("Google Maps API key is not defined");
}

const Location = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });

    loader.load().then(async () => {
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;

      new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -15.798088, lng: -47.875483 },
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
    });
  }, []);

  return (
    <div className="text-center mx-4">
      <h2 className="my-4 md:my-10">Local do Evento:</h2>
      <div id="map" className="h-64 md:h-96 w-11/12 md:w-2/4 mx-auto"></div>
    </div>
  );
};

export default Location;
