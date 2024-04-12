import { Skeleton } from "antd";
import React from "react";
import TrainCard from "./TrainCard";

const TrainContainer = ({ trainsList, departureDate, isLoading }) => {
  return (
    <div
      id="trainContainer"
      className="w-full rounded-md overflow-hidden border-b-2  mx-auto px-2 flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-4 "
    >
      {!isLoading
        ? trainsList?.map((train,index) => (
            
              <TrainCard
              key={train?._id}
                {...train}
                departureDate={departureDate}
              />
            
          ))
        : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton key={item} active className="border bg-white shadow-lg p-4 rounded-md min-h-40" />
          ))}
      <span className="text-2xl font-normal text-slate-300 py-4 ">
        {"--"}End of the Page{"--"}
      </span>
    </div>
  );
};

export default TrainContainer;
