import React from "react";
import { Link } from "react-router-dom";

const LoginCard: React.FC = () => {
  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in...");
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    // Add Facebook login logic here
    console.log("Logging in with Facebook...");
  };

  return (
    <div className="login-card">
      <h2 className="login-text">Login</h2>
      <div>
        <div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
          </div>
        </div>
        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
        <div className="social-login">
          <button onClick={handleGoogleLogin} className="social-btn google-btn">
            Login with Google
          </button>
        </div>
        <div className="social-login">
          <button
            onClick={handleFacebookLogin}
            className="social-btn facebook-btn"
          >
            Login with Facebook
          </button>
        </div>
      </div>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginCard;
