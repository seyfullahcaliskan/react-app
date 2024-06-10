import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/index.css";

import reportWebVitals from "./reportWebVitals";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navBar";
import Loading from "./components/loading";
import HomePage from "./pages/homePage";

import { PrimeReactProvider } from "primereact/api";
import Login from "./pages/Login";
import Register from "./pages/Register";

var currentPath = window.location.pathname;
var path = currentPath.substr(currentPath.lastIndexOf("/") + 1);
console.log(path);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route
            path="/forget-password"
            element={<ForgetPassword useThemeStore={useThemeStore} />}
          />
          <Route
            path="/new-password"
            element={<ForgetPassword useThemeStore={useThemeStore} />}
          /> */}

          <Route path="" element={<Navbar item={<Loading />} />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="homepage" element={<Navbar item={<HomePage />} />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
