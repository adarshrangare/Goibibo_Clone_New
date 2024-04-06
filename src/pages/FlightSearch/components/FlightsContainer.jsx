import { Skeleton } from "antd";
import React from "react";
import { useEffect } from "react";
import FlightCard from "./FlightCard";

const FlightsContainer = ({ flightsList, isLoading }) => {
  return (
    <div
      id="flightContainer"
      className="w-full rounded-md overflow-hidden border-b-2  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-2 "
    >
      {!isLoading ? (
        flightsList.length !== 0 ? (
          flightsList.map((flight) => (
            <FlightCard key={flight?._id} {...flight} />
          ))
        ) : (
          <p className="text-3xl font-bold my-8 text-slate-500">
            No flights found
          </p>
        )
      ) : (
        [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Skeleton
            key={item}
            active
            className="border bg-white shadow-lg p-4 rounded-md min-h-40"
          />
        ))
      )}
      { flightsList?.length !== 0 && <span className="text-2xl font-normal text-slate-300 py-4 ">
        {"--"}End of the Page{"--"}
      </span>}
    </div>
  );
};

export default FlightsContainer;
