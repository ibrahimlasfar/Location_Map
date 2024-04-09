import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

import icon from "./constants";

export default function LeafletControlGeocoder() {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    var geocoder = L.Control.Geocoder.nominatim();
    if (typeof URLSearchParams !== "undefined" && window.location.search) {
      var params = new URLSearchParams(window.location.search);
      var geocoderString = params.get("geocoder");
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }

    const control = L.Control.geocoder({
      query: "",
      placeholder: "Search here...",
      defaultMarkGeocode: false,
      geocoder,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }
        markerRef.current = L.marker(latlng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);

    return () => {
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }
      // Control should be removed using the remove() method
      control.remove();
    };
  }, [map]);

  return null;
}
