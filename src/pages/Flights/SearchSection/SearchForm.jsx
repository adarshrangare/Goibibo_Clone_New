import dayjs from "dayjs";
import React, { useReducer, useState } from "react";

import { InputField, RadioInput, SwapButton } from "../../../components";

function reducerFunction(state, action) {


  switch (action.type) {
    case "set_destination_location": {
      return { ...state, destination_location: action.payload.value };
    }
    case "set_source_location": {
      return { ...state, source_location: action.payload.value };
    }

    case "swap_location":{

      const temp = state.source_location;
      
      return{...state ,source_location: state.destination_location, destination_location : temp    }

    }

    default:
      return state;
  }
}

const initialState = {
  source_location: "",
  destination_location: "",
  oneway: true,
  number_of_Passanger: 1,
  travel_class: "",
  date_of_journey: dayjs(Date.now()).format("DD-MM-YYY"),
};

const SearchForm = () => {
  const [journeyDetails, dispatchJourneyDetails] = useReducer(
    reducerFunction,
    initialState
  );

  const {
    source_location,
    destination_location,
    oneway,
    number_of_Passanger,
    travel_class,
    date_of_journey,
  } = journeyDetails;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-72 bg-white shadow-2xl rounded-md p-4 flex flex-col md:w-10/12 md:p-8"
    >
      <RadioInput
        label={"One-way"}
        value={oneway}
        name="jouney_type"
        id={"one-way"}
      />

      <div className="inputSection flex flex-col gap-1 w-full m-4 py-2 md:flex-row">
        <div className="flex flex-col md:flex-row ">
          <InputField
            className=""
            label="From"
            placeholder="Enter city or airport"
            id="source_location"
            inputValue={source_location}
            handleInput={(value) => {
              dispatchJourneyDetails({
                type: "set_source_location",
                payload: {value},
              });
            }}
          />
          <SwapButton handleSwap={ ()=>{
            dispatchJourneyDetails({type:"swap_location" })
          } } className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] " />
          <InputField
            className=""
            label="To"
            placeholder="Enter city or airport"
            id="destination_location"
            inputValue={destination_location}
            handleInput={(value) => {
              dispatchJourneyDetails({
                type: "set_destination_location",
                payload: {value},
              });
            }}
          />
        </div>


            
        <div className="">
            

        </div>
      </div>
    </form>
  );
};

export default SearchForm;
