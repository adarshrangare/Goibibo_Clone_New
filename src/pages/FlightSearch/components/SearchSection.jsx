import React from "react";
import { RadioInput } from "../../../components";
import { useFlightPassanger } from "../../../context/FlightContext/FlightPassengerProvider";
import InputSection from "./InputSection";

const SearchSection = ({journeyDetails, dispatchJourneyDetails}) => {
  
  
  return (
    <>
      <RadioInput
        label="ONE WAY"
        className=" bg-transparent focus:outline-none accent-white text-white"
        labelClass="text-xs"
      />

      <InputSection journeyDetails={journeyDetails}  dispatchJourneyDetails={dispatchJourneyDetails} />
      
    </>
  );
};

export default SearchSection;
