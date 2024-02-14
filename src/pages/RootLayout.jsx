import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import Login from "../components/Modals/LoginModal/Login";
import { ToastContainer, toast } from "react-toastify";
import FlightPassengerProvider from "../context/FlightContext/FlightPassengerProvider";
const RootLayout = () => {
  return (
    <>

        <div className="toast absolute z-50 "></div>
        <Header />
        <main id="main">
          <Outlet />
        </main>
        <Footer/>

    </>
  );
};

export default RootLayout;
