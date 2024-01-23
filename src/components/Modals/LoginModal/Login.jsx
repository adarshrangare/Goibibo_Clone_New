import React from "react";
import { createPortal } from "react-dom";

const Login = ({ toggleLoginModal }) => {
  const portalRoot = document.getElementById("modal");

  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-[rgba(71,85,105,0.7)] z-10"></div>
      <div className="fixed mx-auto bottom-0 shadowup w-full bg-white h-1/3 rounded-t-3xl z-50 transition-all md:w-1/2  md:fixed md:p-4 md:text-center md:transform md:-translate-x-1/2 md:-translate-y-1/2  md:top-1/2 md:left-1/2 md:rounded-md md:shadow-xl z-12">
        {/* <button onClick={toggleLoginModal}></button> */}

        <button className=" absolute top-[-25px] right-0 " onClick={toggleLoginModal}>X</button>
      </div>
    </>,
    portalRoot
  );
};

export default Login;
