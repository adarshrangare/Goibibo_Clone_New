import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

import "./style.css";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="nav-links bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-10 ">
   
   <NavLink
        to={"/flight"}
        className={`flights nav-item ${pathname == "/" ? "active" : ""}`}
      >
        <span className="logo-flight logo-nav "></span> Flights
      </NavLink>
      <NavLink to={"/hotels"} className="hotels nav-item">
        <span className="logo-hotels logo-nav"></span> Hotels
      </NavLink>
      <NavLink to={"/trains"} className="trains nav-item">
        <span className="logo-trains logo-nav"></span> Trains
      </NavLink>
      {/* <NavLink  className="cabs nav-item">
      <span className="logo-cabs logo-nav"></span> Cabs
    </NavLink> */}
      <NavLink to={"/bus"} className="bus nav-item">
        <span className="logo-bus logo-nav"></span> Bus
      </NavLink>

    </nav>
  );
};

export default Navbar;
