import React from "react";
import { useEffect } from "react";
import FlightCard from "./FlightCard";

const FlightsContainer = ({flightsList}) => {

    

  return (
    <div className="w-full rounded-md overflow-hidden bg-white mx-auto flex flex-col items-center justify-start h-[150vh] overflow-y-scroll gap-2 ">
        
        {
            flightsList && flightsList.map(flight=>(<FlightCard key={flight?._id} {...flight} />))

        }

    </div>
  );
};

export default FlightsContainer;
