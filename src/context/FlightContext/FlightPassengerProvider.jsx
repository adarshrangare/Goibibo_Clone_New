import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import {
  reducerFunction,
  initialState,
} from "../../utils/flightPassangerReducer";

const FlightPassengerContext = createContext();

const FlightPassengerProvider = ({ children }) => {
  const [journeyDetails, dispatchJourneyDetails] = useReducer(
    reducerFunction,
    initialState
  );

  return <FlightPassengerContext.Provider value={{journeyDetails,dispatchJourneyDetails}}>{children}</FlightPassengerContext.Provider>;
};

export function useFlightPassanger() {
  return useContext(FlightPassengerContext);
}

export default FlightPassengerProvider;
