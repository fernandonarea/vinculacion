import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../assets/styles/map.css";

const MapView = () => {
  const position = [-2.1902236, -79.8826774];

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Facultad Ingeniería en Software
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
export default MapView;
