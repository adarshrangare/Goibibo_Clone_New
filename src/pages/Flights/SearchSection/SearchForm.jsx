import dayjs from "dayjs";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DatePicker,
  InputField,
  RadioInput,
  SearchButton,
  SwapButton,
  TravellersCount,
} from "../../../components";
import { errorToast } from "../../../components/Toasts/toast";
import { useFlightPassanger } from "../../../context/";

const SearchForm = () => {
  const [inputSourceValue, setInputSourceValue] = useState("");
  const [inputDestValue, setInputDestValue] = useState("");
  const { journeyDetails, dispatchJourneyDetails } = useFlightPassanger();

  // console.log("context",useFlightPassanger())

  const pathname = useLocation().pathname;

  const {
    source_location,
    destination_location,
    oneway,
    travel_details,
    date_of_journey,
  } = journeyDetails;

  const navigate = useNavigate();
  function handleSubmit(e) {
    const { adult, child, infant } = travel_details?.numbers;
    if (source_location == "") {
      errorToast("Please Enter Source Location");
      return;
    }
    if (destination_location == "") {
      errorToast("Please Enter Destination Location");
      return;
    }

    if (source_location == destination_location) {
      errorToast(
        "Both airports are the same, Please Select Different Airports"
      );
      return;
    }

    const encodedPath = btoa(
      `${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`
    );

    if (pathname.includes("flight")) {
      navigate(`air-${encodedPath}`);
    } else {
      navigate(`flight/air-${encodedPath}`);
    }
  }

  // console.log(navigate);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full relative bg-white shadow-2xl rounded-2xl p-4 flex flex-col md:w-11/12 md:p-8"
    >
      <RadioInput
        label={"One-way"}
        value={oneway}
        name="jouney_type"
        id={"one-way"}
      />

      <div className="inputSection flex flex-col gap-1 w-full m-4 mx-auto py-2 md:flex-row md:items-center  ">
        <div className="flex flex-col md:flex-row ">
          <InputField
            className=""
            label="From"
            placeholder="Enter city or airport"
            id="source_location"
            selectedValue={source_location}
            inputValue={inputSourceValue}
            setInputValue={setInputSourceValue}
            handleValue={(value) => {
              dispatchJourneyDetails({
                type: "set_source_location",
                payload: { value },
              });
            }}
          />
          <SwapButton
            handleSwap={() => {
              const temp = inputDestValue;
              setInputDestValue(inputSourceValue);
              setInputSourceValue(temp);
              dispatchJourneyDetails({ type: "swap_location" });
            }}
            className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
          />
          <InputField
            className=""
            label="To"
            placeholder="Enter city or airport"
            id="destination_location"
            inputValue={inputDestValue}
            setInputValue={setInputDestValue}
            selectedValue={destination_location}
            handleValue={(value) => {
              dispatchJourneyDetails({
                type: "set_destination_location",
                payload: { value },
              });
            }}
          />
        </div>
        <DatePicker
          className="cursor-pointer"
          label="Departure"
          placeholder="Enter date of journey"
          id="date_of_journey"
          min={dayjs(Date.now()).format("YYYY-MM-DD")}
          inputValue={date_of_journey}
          handleInput={(value) => {
            // console.log("handleDate");
            dispatchJourneyDetails({
              type: "set_date_of_journey",
              payload: { value },
            });
          }}
        />

        <TravellersCount
          value={travel_details}
          handleValue={(secondType, target) => {
            dispatchJourneyDetails({
              type: "set_travel_details",
              secondType: secondType,
              target: target,
            });
          }}
        />
      </div>

      <SearchButton
        handleSubmit={handleSubmit}
        type={"flights"}
        className="px-12 py-4 rounded-full text-base md:text-lg font-semibold text-white bg-orange-500 w-fit self-center absolute bottom-[-25px] hover:bg-orange-600 "
      />
    </form>
  );
};

export default SearchForm;
