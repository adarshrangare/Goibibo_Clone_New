import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../Modals/LoginModal/Login";
import { useAuth } from "../../context/AuthProvider";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

const ProfileNav = () => {
  const { isLoggedIn, userDetail, loginOpen, setLoginOpen,logOutFunc } = useAuth();

  console.log(userDetail);

  function toggleLoginModal() {
    setLoginOpen((prev) => !prev);
  }

  return (
    <>
      {isLoggedIn ? (
        <div
          className="user border relative border-solid border-blue-500 rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit overflow-visible"
        >
          <span className="logo-profile inline-block w-8 h-8 logo-nav mr-2"></span>
          <span className="text-blue-500 font-medium text-xs text-ellipsis text-center ">
            Hey, {userDetail?.user?.name?.split(" ")[0] || "User"}
          </span>
          <div onClick={logOutFunc} className="logout absolute top-0 left-0  z-10 flex justify-center font-medium items-center w-full h-full bg-white text-blue-500 "> <IoMdLogOut/>  Logout </div>
        </div>
      ) : (
        <>
          <div
            onClick={toggleLoginModal}
            className="border border-solid border-blue-500 rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit"
          >
            <span className="logo-profile inline-block w-7 h-7 logo-nav"></span>
            <span className="text-blue-500 font-medium text-xs text-ellipsis overflow-hidden">
              LOGIN/SIGNUP
            </span>
          </div>
          {loginOpen && <Login toggleLoginModal={toggleLoginModal} />}
        </>
      )}
    </>
  );
};

export default ProfileNav;
