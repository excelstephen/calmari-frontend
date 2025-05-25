// src/routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ChatBox from './pages/ChatBox';
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import GuestLogin from "./pages/auth/GuestLogin";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/guest" element={<GuestLogin />} />
      <Route path="/chat" element={<ChatBox />} />
      {/* Add more routes here as your app grows */}
    </Routes>
  );
};

export default AppRoutes;
