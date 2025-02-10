"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "210px",
};

const MapComponent = () => {
  const lat = 8.96363;
  const lng = 38.83552;

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCz61eQinGa5Jd43DrRFQBDR3x0GzTyL4s">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        mapTypeId="satellite"
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
