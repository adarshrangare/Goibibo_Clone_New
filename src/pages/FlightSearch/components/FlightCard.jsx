import React, { useState } from "react";
import { airlineData } from "../../../utils/constants";
import FlightDetails from "./FlightDetails";
import {DownOutlined
} from '@ant-design/icons';
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const FlightCard = ({
  _id,
  airline,
  source,
  destination,
  duration,
  stops,
  ticketPrice,
  arrivalTime,
  departureTime,
  
}) => {

  const [showDetails, setShowDetails] = useState(false);
  
  const navigate = useNavigate();

  const handleNavigate=()=>{
    navigate(`${_id}--${ticketPrice}`);
  }


  return (
    <article className="card w-full border-2 relative rounded-xl h-fit py-4 px-2 hover:shadow-even transition-all bg-white  duration-500 scale-[98%] hover:scale-100">
      <div className=" ml-4 pb-3 flex gap-4">
        {" "}
        <img
          className=" shrink-0 rounded-lg w-6 h-6"
          src={airlineData[airline]?.logo}
          width={20}
          height={20}
          alt=""
        />{" "}
        <span className="">{airlineData[airline]?.airline_name}</span>
      </div>

      <div className="flex justify-between items-center gap-4 ">
        <div className="source basis-[23.3%] text-center">
          <div className="loaction text-xs truncate text-slate-500 capitalize">
            {source}
          </div>
          <div className="time font-semibold">{departureTime}</div>
        </div>
        <div className="duration basis-[23.3%] text-center">
          <div className={`stop text-xs truncate text-slate-500  capitalize border-b-4 ${duration > 2 ? duration < 5 ? "border-yellow-300" : " border-red-300" :"border-green-300"} `}>
            {stops == 0 ? "Non-Stop" : stops == 1 ? "1 stop" : stops + " stops"}
          </div>
          <div className="duration font-semibold">{duration + " hrs"}</div>
        </div>
        <div className="dest basis-[23.3%] text-center">
          <div className="loaction text-xs truncate text-slate-500 capitalize">
            {destination}
          </div>
          <div className="time font-semibold">{arrivalTime}</div>
        </div>

        <div className="font-semibold basis-[30%] text-center flex items-center justify-center flex-wrap md:gap-4">
          ₹{ticketPrice}
          <button className=" font-semibold text-white truncate py-2 px-4 bg-orange-500 m-2 rounded-full" 
          onClick={handleNavigate}>
            {" "}
            Book Ticket
          </button>
        </div>

      </div>

      { showDetails && <FlightDetails  flightId ={_id}  />}
      
      <div className="font-medium text-center text-xs text-blue-600 cursor-pointer select-none transition-all" onClick={()=>{
        setShowDetails(prev=>!prev)
      }}>{showDetails ?<>Hide Details <FaAngleUp className="inline"/></> :<>Show Details <FaAngleDown className="inline"/></>} </div>

    </article>
  );
};

export default FlightCard;
