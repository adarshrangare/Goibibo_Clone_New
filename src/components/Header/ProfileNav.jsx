import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../Modals/LoginModal/Login";

const ProfileNav = () => {

  const [loginOpen, setLoginOpen] = useState(false);

  function toggleLoginModal(){

    setLoginOpen(prev=>!prev);

  }

  return (
    <>
      <div
      onClick={toggleLoginModal}
      className="border border-solid border-blue-500 rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit"
    >
      <span className="logo-profile inline-block w-7 h-7 logo-nav"></span>
      <span className="text-blue-500 font-medium text-xs text-ellipsis overflow-hidden">LOGIN/SIGNUP</span>
      
      

    </div>
    {loginOpen && <Login toggleLoginModal={ toggleLoginModal }/> }
    </>
  );
};

export default ProfileNav;
