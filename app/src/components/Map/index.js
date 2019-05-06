import React, { useContext, useEffect, useRef } from "react";

import CountryCode from "../../context";
import L from "leaflet";

const style = {
  width: "75%",
  height: "100%",
  margin: "auto",
  borderRadius: "20px"
};

function Map() {
  const context = useContext(CountryCode);
  const { latLng } = context;
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.remove();
    }
    mapRef.current = L.map("map", {
      center: new L.LatLng(latLng.lat, latLng.lng),
      zoom: 5,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          noWrap: true
        })
      ]
    });
    markerRef.current = L.marker(latLng).addTo(mapRef.current);
  }, [latLng]);

  const markerRef = useRef(null);
  return <div id="map" style={ style }/>;
}

export default Map;