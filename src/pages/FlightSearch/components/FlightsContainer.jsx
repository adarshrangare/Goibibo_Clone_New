import React from "react";
import { useEffect } from "react";
import FlightCard from "./FlightCard";

const FlightsContainer = ({flightsList}) => {

    

  return (
    <div id="flightContainer" className="w-full rounded-md overflow-hidden border-b-2  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-2 ">
        
        {
            flightsList && flightsList.map(flight=>(<FlightCard key={flight?._id} {...flight} />))

        }
      <span className="text-2xl font-normal text-slate-300 py-4 ">{"--"}End of the Page{"--"}</span>
    </div>
  );
};

export default FlightsContainer;
