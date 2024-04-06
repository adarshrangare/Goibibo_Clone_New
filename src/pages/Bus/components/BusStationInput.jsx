import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { FaHotel,FaWifi } from "react-icons/fa";
import { busStations } from "../../../utils/constants";
const BusStationInput = ({
  placeholder,
  label,
  value,
  error,
  type,
  id,
  className,
  labelClass,
  handleLocation,
}) => {
  const [showSuggetion, setShowSuggestion] = useState(false);

  const [busStationList, setBusStationList] = useState(busStations);

  const [localInputValue, setLocalInputValue] = useState(value);

  useEffect(() => {
    setLocalInputValue(value);
  }, [value]);

  function handleInput(inputText) {
    setLocalInputValue(inputText);
    setBusStationList((prev) => {
      return busStations.filter((station) =>
        station.toLowerCase().includes(inputText.toLowerCase())
      );
    });
    if (inputText.trim().length > 0) {
      setShowSuggestion(true);
      // setBusStationList(busStations)
    } else {
      setShowSuggestion(false);
    }
  }

  function handleSelect(selectedCity) {
    // console.log(selectedCity);

    handleLocation(selectedCity);
    setShowSuggestion(false);
    setBusStationList(busStations);
  }

  return (
    <div className={`inputBox flex relative p-0 hover:cursor-pointer`}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        value={localInputValue}
        autoComplete="off"
        className={`w-full relative rounded-lg m-3 focus:outline-none  border-2 border-solid   focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 ${className} ${
          error ? "border-red-500" : "border-slate-200 hover:border-slate-500"
        }`}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />

      <label
        htmlFor={id}
        className={`absolute select-none top-[2px] left-6 px-1 rounded bg-[#fff]  font-medium leading-[18px] text-sm ${
          error
            ? "text-red-500"
            : "text-[rgb(119,119,119)] hover:cursor-pointer"
        }  ${labelClass}`}
      >
        {label ? label : "Input"}
      </label>

      {/* // Suggestion List */}

      {showSuggetion && (
        <ul className="absolute w-fit min-w-full h-fit max-h-48 overflow-y-scroll bg-white border left-0 z-10 top-16 rounded-md ">
          {busStationList?.length > 0 ? (
            busStationList?.map((station) => (
              <li
                key={station}
                onClick={() => {
                  handleSelect(station);
                }}
                className="flex items-center py-2 px-3 gap-3 hover:bg-sky-100 cursor-pointer"
              >
                <FaHotel className="p-2 w-10 h-10 text-slate-500" />

                <p className="font-medium text-slate-700 ">{station}</p>
              </li>
            ))
          ) : (
            <div className="font-medium text-slate-300 text-lg py-4 text-center w-full h-full flex justify-center items-center">
              NO RESULT FOUND
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default BusStationInput;
