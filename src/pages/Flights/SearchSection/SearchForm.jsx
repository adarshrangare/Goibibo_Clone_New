import dayjs from "dayjs";
import React, { useReducer, useState } from "react";

import { DatePicker, InputField, RadioInput, SearchButton, SwapButton } from "../../../components";

function reducerFunction(state, action) {


  switch (action.type) {
    case "set_destination_location": {
      return { ...state, destination_location: action.payload.value };
    }
    case "set_source_location": {
      return { ...state, source_location: action.payload.value };
    }
    case "set_date_of_journey": {
      // console.log(state.journey_location);
      return { ...state, date_of_journey: action.payload.value };
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
  travel_details:{
    numbers :{
      adult : 1,
      child : 0,
      infant : 0
    },
    class:'economy'
  },
  date_of_journey: Date.now() ,
};

const SearchForm = () => {
  const [journeyDetails, dispatchJourneyDetails] = useReducer(
    reducerFunction,
    initialState
  );

  console.log(journeyDetails)

  const {
    source_location,
    destination_location,
    oneway,
    travel_details,
    date_of_journey,
  } = journeyDetails;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative bg-white shadow-2xl rounded-2xl p-4 flex flex-col md:w-11/12 md:p-8"
    >
      <RadioInput
        label={"One-way"}
        value={oneway}
        name="jouney_type"
        id={"one-way"}
      />

      <div className="inputSection flex flex-col gap-1 w-full m-4 mx-auto py-2 md:flex-row  ">
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
        <DatePicker
            className=""
            label="Departure"
            placeholder="Enter date of journey"
            id="date_of_journey"
            min={dayjs(Date.now()).format('YYYY-MM-DD')}
            inputValue={date_of_journey}
            handleInput={(value) => {
              console.log("handleDate")
              dispatchJourneyDetails({
                type: "set_date_of_journey",
                payload: {value},
              });
            }}
          />

    <DatePicker
            className=""
            label="Departure"
            placeholder="Enter date of journey"
            id="date_of_journey"
            min={dayjs(Date.now()).format('YYYY-MM-DD')}
            inputValue={date_of_journey}
            handleInput={(value) => {
              console.log("handleDate")
              dispatchJourneyDetails({
                type: "set_date_of_journey",
                payload: {value},
              });
            }}
          />

            
        <div className="">
            

        </div>
      </div>
      
      <SearchButton handleSubmit={""} type={"flights"} className="px-12 py-4 rounded-full text-base md:text-lg font-semibold text-white bg-orange-500 w-fit self-center absolute bottom-[-25px] hover:bg-orange-600 " />

    </form>
  );
};

export default SearchForm;
