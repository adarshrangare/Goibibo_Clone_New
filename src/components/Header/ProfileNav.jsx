import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  return (
    <div
      to={"/profile"}
      className="border border-solid border-blue-500 rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit"
    >
      <span className="logo-profile inline-block w-7 h-7 logo-nav"></span>
      <span className="text-blue-500 font-medium text-xs text-ellipsis overflow-hidden">LOGIN/SIGNUP</span>
    </div>
  );
};

export default ProfileNav;
