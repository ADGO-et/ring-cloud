'use client';
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleApiKey = ''

  useEffect(() => {
    if (mapRef.current && !mapRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      window.initMap = () => {
        if (mapRef.current) {
          new google.maps.Map(mapRef.current, {
            center: { lat: 9.145, lng: 40.4897 },
            zoom: 6,
          });
        }
      };
    }
  }, []);

  return <div ref={mapRef} className="w-full h-[210px] rounded-lg shadow-md" />;
}
