import React from "react";
// import { PrimeReactProvider } from "primereact/api";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactDOM from "react-dom/client";
import "../src/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Navbar from "./components/navBar";
// import routes from ".routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PrimeReactProvider> */}
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
        <Route
          path="*"
          element={
            <AdminLayout
            // routes={routes}
            // useThemeStore={useThemeStore}
            />
          }
        />
      </Routes>
    </BrowserRouter>

    {/* </PrimeReactProvider> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
