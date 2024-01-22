import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from '../components'
import Login from "../components/Modals/LoginModal/Login";
const RootLayout = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default RootLayout;
