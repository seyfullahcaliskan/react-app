import { useEffect } from "react";

import React from "react";
import "../src/css/index.css";

import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Loading from "./components/loading";
import HomePage from "./pages/homePage";

import { PrimeReactProvider } from "primereact/api";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";

import i18n from "./i18n";

export default function App() {
  document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language");
    const language = savedLanguage || "tr";
    i18n.changeLanguage(language);
  });
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.classList.add(currentTheme);
    }
  }, []);

  return (
    <React.StrictMode>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="" element={<Navbar item={<Loading />} />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="homepage" element={<Navbar item={<HomePage />} />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </React.StrictMode>
  );
}
