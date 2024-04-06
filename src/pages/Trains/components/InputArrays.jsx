import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { SwapButton } from "../../../components";
import StationInput from "./StationInput";
const InputArrays = ({trainProp}) => {
  
  const {source,destination,handleDestination,handleSource,handleSwap} = trainProp

  // console.log("render");
  
  return (
    <div className="flex inputArea flex-col md:flex-row items-center  md:px-4 gap-2">
      <StationInput
        label="Source Station"
        value={source}
        placeholder="Enter Source Station"
        handleLocation={handleSource}
      />
      <SwapButton handleSwap={()=>{
        const temp = source;
        handleSource(destination);
        handleDestination(temp);

      }} className="max-md:mb-2 p-2 border rounded-lg shadow-even active:scale-90 transition-all " />
      <StationInput
        label="Destination Station"
        value={destination}
        placeholder="Enter Destination Station"
        handleLocation={handleDestination}
      />
       
    </div>
  );
};

export default InputArrays;
