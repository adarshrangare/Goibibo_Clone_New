import React from "react";
import { airlineData } from "../../../utils/constants";

const FlightCard = ({airline,source,destination,duration, stops,ticketPrice,arrivalTime,departureTime}) => {
  return (
    <article className="card w-full border-2 rounded-md h-fit py-4 px-2 hover:shadow-even transition-shadow ">
      <div className=" ml-4 pb-3 flex gap-4"> <img className=" shrink-0" src={airlineData[airline]?.logo} width={20} height={20} alt="" />  <span className="">{airlineData[airline]?.airline_name}</span></div>

      <div className="flex justify-between items-center gap-4 ">
        <div className="source basis-[23.3%] text-center">
          <div className="loaction text-xs truncate text-slate-500 capitalize">
            {source}
          </div>
          <div className="time font-semibold">{departureTime}</div>
        </div>
        <div className="duration basis-[23.3%] text-center">
          <div className="stop text-xs truncate text-slate-500 capitalize">
            {stops ==0 ? "Non-Stop" : stops == 1 ? "1 stop" : stops+" stops"}
          </div>
          <div className="duration font-semibold">{duration+" hrs"}</div>
        </div>
        <div className="dest basis-[23.3%] text-center">
          <div className="loaction text-xs truncate text-slate-500 capitalize">
            {destination}
          </div>
          <div className="time font-semibold">{arrivalTime}</div>
        </div>

        <div className="font-semibold basis-[30%] text-center flex items-center justify-center flex-wrap md:gap-4">₹{ticketPrice}

        <button className=" font-semibold text-white truncate py-2 px-4 bg-orange-500 m-2 rounded-full"> Book Ticket</button>
        </div>
        
      </div>
    </article>
  );
};

export default FlightCard;
