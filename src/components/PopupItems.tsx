import React from "react";

interface PopupItemsProps {
  marker: {
    temp: number;
    lat: number;
    lng: number;
    icon: string;
    feels_like: number;
    humidity: number;
    timezone: string;
  };
}

const PopupItem: React.FC<PopupItemsProps> = ({ marker }) => {
  return (
    <div>
      <div className="popup-item">
        <h4 style={{ lineHeight: 0 }}>Temperature:</h4>
        <h4 style={{ lineHeight: 0 }}>
          <b> {marker.temp}</b> °C
        </h4>
      </div>
      <div className="popup-item">
        <h4 style={{ lineHeight: 0 }}>Feels like:</h4>
        <h4 style={{ lineHeight: 0 }}>
          <b> {marker.feels_like}</b> °C
        </h4>
      </div>
      <div className="popup-item">
        <h4 style={{ lineHeight: 0 }}>Humidity:</h4>
        <h4 style={{ lineHeight: 0 }}>
          <b> {marker.humidity}</b> °C
        </h4>
      </div>
      <div className="popup-item">
        <h4 style={{ lineHeight: 0 }}>Timezone:</h4>
        <h4 style={{ lineHeight: 0 }}>
          <b> {marker.timezone}</b>
        </h4>
      </div>
    </div>
  );
};

export default PopupItem;
