import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Login from "../components/Modals/LoginModal/Login";
import { ToastContainer, toast } from "react-toastify";
const RootLayout = () => {
  return (
    <>
      <div className="toast absolute z-50 ">
       
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;
