// src/pages/auth/GuestLogin.js

import React from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../../firebase";

const GuestLogin = () => {
  const handleGuestLogin = async () => {
    try {
      const result = await signInAnonymously(auth);
      console.log("Guest logged in:", result.user);
      alert("Logged in as Guest!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Continue as Guest</h2>
      <button onClick={handleGuestLogin}>Login as Guest</button>
    </div>
  );
};

export default GuestLogin;
