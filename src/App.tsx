import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components";
import { LoginCard, WeatherApp } from "./pages";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="home-container">
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/login" element={<LoginCard />} />
          {/* Add more routes if needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
