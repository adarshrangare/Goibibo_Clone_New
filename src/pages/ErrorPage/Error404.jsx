import React, { useState } from "react";
import { ContentWrapper } from "../../components";
import { Link} from "react-router-dom";
import { useEffect } from "react";

const Error404 = () => {
    useEffect(()=>{
       window.document.body.style.backgroundColor = "white"
    },[])

   
  return (
    <div className="w-full min-h-screen ">
      <ContentWrapper>
        <div className="contains404  md:w-10/12 my-4 mx-auto">
          <div className="message_404 text-center flex flex-col  items-center justify-center h-full">
            <div className="head404 font-bold text-8xl md:text-9xl text-center text-slate-300">
              404
            </div>
            <div className="land404 text-2xl font-semibold my-2">You've landed in No Man's Land! </div>
            <div className="my-2 text-slate-600">
              We're sorry. The page that you are looking for does not exist
            </div>
            <div className="links404 flex gap-4 text-blue-600 w-full items-center justify-center">
              <span className="text-slate-800">Go back to:</span>
              <Link to="/flight">Flights</Link>|<Link to="/hotels">Hotels</Link>
              |<Link to="/trains">Trains</Link>|<Link to="/bus">Buses</Link>
            </div>
            <img
            src="https://www.goibibo.com/images/v2/404img.gif"
            alt="404"
            className=" m-4"
          />
          </div>
          
        </div>

        
      </ContentWrapper>
    </div>
  );
};

export default Error404;
