import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import { FlightPassengerProvider } from "./context/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <AuthProvider>
      <FlightPassengerProvider>
        <App />
      </FlightPassengerProvider>
    </AuthProvider>
  </>
);
