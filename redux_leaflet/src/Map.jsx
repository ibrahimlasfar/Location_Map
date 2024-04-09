import React, { useState } from "react";
import { connect } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import useGeoLocation from "./hooks/useGeolocation";
import RoutingMachine from "./RoutingControl";
import LeafletControlGeocoder from "./LeafletControlGeocoder";
import Sidebar from "./Sidebar"; // Import the Sidebar component

// Define Map component
function Map({ markers }) {
  const location = useGeoLocation();
  const [endPoint, setEndPoint] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null); 
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const handleMapClick = (e) => {
    // Clear the selected marker and end point
    setSelectedMarker(null);
    setEndPoint([e.latlng.lat, e.latlng.lng]);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker((prevMarker) => {
      if (prevMarker === marker) {
        return null;
      } else {
        setEndPoint([marker.latitude, marker.longitude]);
        return marker;
      }
    });
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const startPoint =
    location.loaded && !location.error
      ? [location.coordinates.lat, location.coordinates.lng]
      : null;

  return (
    <div
      id="mapid"
      style={{ height: "100vh", width: "100vw", position: "relative" }}
    >
      <MapContainer
        center={[34.020882, -6.84165]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        whenCreated={() => {}}
      >
        {endPoint && startPoint && (
          <RoutingMachine
            key={endPoint}
            position={"topright"}
            start={startPoint}
            end={endPoint}
            color={"#757de8"}
          />
        )}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            eventHandlers={{ click: () => handleMarkerClick(marker) }}
          >
            <Popup>
              <div>
                <h3>{marker.name}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>
              <div>
                <h3>My Current Location</h3>
              </div>
            </Popup>
          </Marker>
        )}
        <ClickHandler handleClick={handleMapClick} />
        <LeafletControlGeocoder />
      </MapContainer>
      <div>
        {selectedMarker && (
          <Sidebar marker={selectedMarker} onClose={handleCloseSidebar} />
        )}
      </div>
    </div>
  );
}

const ClickHandler = ({ handleClick }) => {
  useMapEvents({
    click: (e) => {
      handleClick(e);
    },
  });

  return null;
};

const mapStateToProps = (state) => ({
  markers: state.brewery.markers,
});

export default connect(mapStateToProps)(Map);
