import React from "react";
import Logo from "./Logo";
import MyAccount from "./MyAccount";
import Navbar from "./Navbar";
import "./style.css";
const Header = () => {
  return (
    <header className="sticky top-0 z-10  w-full h-16 bg-white shadow-md">
      <div className="w-full max-w-[1475px] mx-auto h-full flex items-center px-[50px] justify-between max-sm:px-1">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar />
        </div>

        <MyAccount />
      </div>
    </header>
  );
};

export default Header;
