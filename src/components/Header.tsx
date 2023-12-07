import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="btn-container">
      <button className="home-btn" onClick={() => navigate("/")}>
        Home
      </button>
      <h1>Weather Info</h1>{" "}
      <button className="sign-btn" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default Header;
