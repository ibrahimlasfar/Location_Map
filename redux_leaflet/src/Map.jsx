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
  const [selectedMarker, setSelectedMarker] = useState(null); // State to store the selected marker
  // eslint-disable-next-line no-unused-vars
  const [sidebarOpen, setSidebarOpen] = useState(false); //sidebarOpen,

  // Function to handle map click event
  const handleMapClick = (e) => {
    // Update the end point with clicked coordinates
    setEndPoint([e.latlng.lat, e.latlng.lng]);
  };

  // Function to handle marker click event
  const handleMarkerClick = (marker) => {
    setSelectedMarker(prevMarker => {
      if (prevMarker === marker) {
        return null; // Toggle off if marker is already selected
      } else {
        setEndPoint([marker.latitude, marker.longitude]);
        return marker; // Set the clicked marker
      }
    });
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  // Define start point as the current location
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
        {/* Add RoutingMachine component */}
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

        {/* Display static markers */}
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

        {/* Display current location marker if available */}
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>
              <div>
                <h3>Your Current Location</h3>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Attach event listener for map click */}
        <ClickHandler handleClick={handleMapClick} />
        <LeafletControlGeocoder />
      </MapContainer>
      {/* Render the Sidebar component if a marker is selected */}
      <div>
        {selectedMarker && (
          <Sidebar marker={selectedMarker} onClose={handleCloseSidebar} />
        )}
      </div>
    </div>
  );
}

// ClickHandler component to handle map click event
const ClickHandler = ({ handleClick }) => {
  // Use useMapEvents hook to handle map click event
  useMapEvents({
    click: (e) => {
      // Call handleClick function passed from parent component
      handleClick(e);
    },
  });

  return null;
};

// MapStateToProps function
const mapStateToProps = (state) => ({
  markers: state.brewery.markers,
});

// Connect Map component to Redux store
export default connect(mapStateToProps)(Map);