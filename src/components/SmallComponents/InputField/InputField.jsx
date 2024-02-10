import React from "react";
import { useEffect } from "react";
import "./style.css";
import { fetchAirports } from "../../../apis/FetchAirports";
import { useState } from "react";
import { useFlightPassanger } from "../../../context";
import { useRef } from "react";


const InputField = ({
  label,
  placeholder,
  id,
  type,
  selectedValue,
  handleValue,
  inputValue,
  setInputValue,
}) => {
  // const [inputValue, setInputValue] = useState("");
  const [OGairportsList, setOGAirportsList] = useState(null);
  const [airportsList, setAirportsList] = useState(null);
  const [showSuggetion, setShowSuggetion] = useState(false);

  const {journeyDetails} = useFlightPassanger();



  useEffect(() => {
    fetchAirports().then((res) => {
      setOGAirportsList(res);
      setAirportsList(res);
    });
  }, []);

  useEffect(() => {
    if (airportsList) {
      setAirportsList((prevList) => {
        return OGairportsList?.filter(({ name, city, iata_code }) => {
          return (
            name.toLowerCase().includes(inputValue.toLowerCase()) ||
            iata_code.toLowerCase().includes(inputValue.toLowerCase()) ||
            city.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
      });
    }
  }, [inputValue]);

  function handleInput(inputText) {
    setInputValue(inputText);
    console.log(inputText);
    if (inputText.trim().length > 0) {
      setShowSuggetion(true);
    } else {
      setShowSuggetion(false);
    }
  }

  function handleSelect(airport) {
    console.log(airport);
    setShowSuggetion(false);
    handleValue(airport?.iata_code);
    setInputValue(`${airport?.city}, (${airport?.iata_code})`);
  }

  return (
    <div className={`inputBox flex relative p-0 `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        autoComplete="off"
        value={inputValue}        
        className="w-full relative rounded-lg m-3 focus:outline-none  border-2 border-solid border-slate-200 hover:border-slate-500 focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 "
        onChange={(e) => {
          console.log(e.target.value);
          handleInput(e.target.value);
          
        }}
      />

      

      <label
        htmlFor={id}
        className="absolute top-[2px] left-6 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] text-sm "
      >
        {label ? label : "Input"}
      </label>

      {showSuggetion && (
        <ul className="absolute w-fit min-w-full h-fit max-h-48 overflow-y-scroll bg-white border left-0 z-10 top-20 rounded-md ">
          {airportsList?.length > 0 ? (
            airportsList?.map((airport) => (
              <li
                key={airport?._id}
                onClick={() => {
                  handleSelect(airport);
                }}
                className="flex py-2 px-3 gap-3 hover:bg-sky-100 cursor-pointer"
              >
                <img
                  src="https://gos3.ibcdn.com/flightIcon-1675492260.png"
                  alt="flight Icon"
                  className="p-2 w-10 h-10"
                />
                <p className="font-medium text-slate-700 ">
                  {airport?.city}, {airport?.country}{" "}
                  <span>({airport?.iata_code})</span>
                  <p className="font-normal text-xs text-slate-400 ">
                    {airport?.name}
                  </p>
                </p>
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

export default InputField;
