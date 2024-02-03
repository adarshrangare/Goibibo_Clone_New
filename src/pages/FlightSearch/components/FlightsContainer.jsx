import React from "react";
import { useEffect } from "react";
import FlightCard from "./FlightCard";

const FlightsContainer = ({flightsList}) => {

    

  return (
    <div className="w-full rounded-md overflow-hidden  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-2 ">
        
        {
            flightsList && flightsList.map(flight=>(<FlightCard key={flight?._id} {...flight} />))

        }
      <span className="text-xl font-medium text-slate-200 py-2 ">{"--"}End of the Page{"--"}</span>
    </div>
  );
};

export default FlightsContainer;
