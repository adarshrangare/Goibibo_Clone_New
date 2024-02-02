import dayjs from "dayjs";
import React, { useReducer } from "react";
import { createContext, useContext } from "react";
// import { reducerFunction } from "../../utils/flightPassangerReducer";



function reducerFunction(state, action) {
  switch (action.type) {
    case "set_destination_location": {
      return { ...state, destination_location: action.payload.value };
    }
    case "set_source_location": {
      console.log("setting...");
      return { ...state, source_location: action.payload.value };
    }
    case "set_date_of_journey": {
        
      return { ...state, date_of_journey: action.payload.value };
    }

    case "swap_location": {
      const temp = state.source_location;

      return {
        ...state,
        source_location: state.destination_location,
        destination_location: temp,
      };
    }

    case "set_travel_details": {
      const { travel_details } = state;
      const { numbers } = travel_details;

      if (action.secondType == "increase") {
        numbers[action.target] += 1;

        travel_details.numbers = { ...numbers };
      } else if (action.secondType == "decrease") {
        numbers[action.target] -= 1;

        travel_details.numbers = { ...numbers };
      }

      return { ...state, travel_details };
    }
    case "set_travel_details_numbers":{

      return {...state, numbers : action.payload.value }

    }

    default:
      return state;
  }
}



const initialState = {
  source_location: "",
  destination_location: "",
  oneway: true,
  travel_details: {
    numbers: {
      adult: 1,
      child: 0,
      infant: 0,
    },
    class: "economy",
  },
  date_of_journey: dayjs().format("YYYY-MM-DD") ,
};

const FlightPassengerContext = createContext();

const FlightPassengerProvider = ({ children }) => {

  

  const [journeyDetails, dispatchJourneyDetails] = useReducer(
    reducerFunction,
    initialState
  );

  return (
    <FlightPassengerContext.Provider
      value={{ journeyDetails, dispatchJourneyDetails }}
    >
      {children}
    </FlightPassengerContext.Provider>
  );
};

export function useFlightPassanger() {
  return useContext(FlightPassengerContext);
}

export default FlightPassengerProvider;
