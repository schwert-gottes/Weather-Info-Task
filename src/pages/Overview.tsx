import React, { useState } from "react";
import { ChartComponent, MapComponent } from "../components";
import { apiKey } from "../constants";

const WeatherApp: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<
    { lat: number; lng: number; temp: number }[]
  >([{ lat: 51.505, lng: -0.09, temp: 20 }]);
  const [markers, setMarkers] = useState<
    {
      temp: number;
      lat: number;
      lng: number;
      icon: string;
      feels_like: number;
      humidity: number;
      timezone: string;
    }[]
  >([]);

  const handleMapClick = async (lat: number, lng: number) => {
    // Make API call to OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const {
        main: { temp, humidity, feels_like },
        weather,
        timezone,
      } = data;

      const newPoint = {
        lat,
        lng,
        temp: Math.round(temp - 273.15), // Convert temperature to Celsius
        humidity,
        feels_like: Math.round(feels_like - 273.15), // Convert "feels like" to Celsius
        icon: weather[0].icon,
        timezone: timezone,
      };
      // Add new data point
      setDataPoints((prevDataPoints) => [...prevDataPoints, newPoint]);
      // Add new marker
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        { ...newPoint, icon: weather[0].icon },
      ]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="overview-container">
      <div className="map-container">
        <MapComponent
          initialPosition={[51.505, -0.09]}
          onMapClick={handleMapClick}
          markers={markers}
        />
      </div>
      <div className="chart-container">
        <ChartComponent dataPoints={dataPoints} />
      </div>
    </div>
  );
};

export default WeatherApp;
