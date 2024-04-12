import React from "react";
import { UnderConstuction } from "../../assets/svgs";
import { ContentWrapper } from "../../components";
import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <div className="w-full min-h-screen ">
      <ContentWrapper>
      <div className="contains404  w-fit  my-4 mx-auto  p-4 bg-white border rounded-lg shadow-lg  ">
          <div className="message_404 text-center flex flex-col  items-center justify-center h-full">
            <div className="head404 p-4 font-bold text-6xl md:text-7xl text-center text-slate-400">
              Coming Soon
            </div>
            <div className="land404 text-2xl font-semibold my-2">Page is under construction </div>
            <div className="my-2 text-slate-600">
              We're sorry for inconvenience . This Section will be back soon.
            </div>
            <div className="links404 flex gap-4 text-blue-600 w-full items-center justify-center flex-wrap">
              <span className="text-slate-800">Go back to:</span>
              <Link to="/flight">Flights</Link>|<Link to="/hotels">Hotels</Link>
              |<Link to="/trains">Trains</Link>|<Link to="/bus">Buses</Link>
            </div>
           
        <UnderConstuction className="h-[50vh] relative max-md:-top-24 "/>
          </div>
          
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ComingSoon;
