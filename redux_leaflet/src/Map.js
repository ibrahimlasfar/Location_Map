// Map.js
import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useGeoLocation from './hooks/useGeolocation';

function Map({ markers }) {
  const location = useGeoLocation();

  return (
    <div id="mapid">
      <MapContainer center={[34.020882, -6.841650]} zoom={13} scrollWheelZoom={false} style={{ height: "768px", width: "1366px" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Display static markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.latitude, marker.longitude]}>
            <Popup>
              <div>
                <h3>{marker.name}</h3>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Display current location marker if available */}
        {location.loaded && !location.error &&
          <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
            <Popup>
              <div>
                <h3>Your Current Location</h3>
              </div>
            </Popup>
          </Marker>
        }
      </MapContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  markers: state.brewery.markers
});

export default connect(mapStateToProps)(Map);
