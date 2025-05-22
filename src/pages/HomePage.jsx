// src/pages/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Calmari</h1>
      <p>Your peace matters 🧘🏾‍♂️✨</p>

      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/guest">Continue as Guest</Link>
      </div>
    </div>
  );
};

export default HomePage;
