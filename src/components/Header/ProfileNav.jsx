import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  return (
    <div
      to={"/profile"}
      className="border border-solid border-blue-500 rounded-lg flex items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer"
    >
      <span className="logo-profile inline-block w-7 h-7 logo-nav"></span>
      <span className="text-blue-500 font-medium text-xs">LOGIN/SIGNUP</span>
    </div>
  );
};

export default ProfileNav;
