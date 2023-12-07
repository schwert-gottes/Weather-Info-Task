import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import PopupItem from "./PopupItems";

interface MapComponentProps {
  initialPosition: [number, number];
  onMapClick: (lat: number, lng: number) => void;
  markers: {
    temp: number;
    lat: number;
    lng: number;
    icon: string;
    feels_like: number;
    humidity: number;
    timezone: string;
  }[];
}

const MapComponent: React.FC<MapComponentProps> = ({
  initialPosition,
  onMapClick,
  markers,
}) => {
  const MapEvents = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        onMapClick(lat, lng);
      },
    });
    return null;
  };
  const myIcon = (marker: any) => {
    return new Icon({
      iconUrl: `http://openweathermap.org/img/w/${marker.icon}.png`,
      iconSize: [35, 35],
    });
  };
  return (
    <div className="map-comp">
      <h2>Map Component</h2>
      <MapContainer
        center={initialPosition}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapEvents />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={myIcon(marker)}
          >
            <Popup className="map-popup">
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <img
                  src={`http://openweathermap.org/img/w/${marker.icon}.png`}
                  alt={`Weather Icon`}
                  style={{ width: "80px", height: "80px" }}
                />
                <PopupItem marker={marker} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
