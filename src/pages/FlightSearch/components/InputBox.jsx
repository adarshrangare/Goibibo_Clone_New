import React from "react";
import { useEffect } from "react";
import { fetchAirports } from "../../../apis/FetchAirports";
import { useState } from "react";
import autoprefixer from "autoprefixer";
const InputBox = ({
  label,
  placeholder,
  id,
  type,
  selectedValue,
  handleValue,
  inputValue,
  setInputValue
}) => {
  // const [inputValue, setInputValue] = useState("");
  const [OGairportsList, setOGAirportsList] = useState(null);
  const [airportsList, setAirportsList] = useState(null);
  const [showSuggetion, setShowSuggetion] = useState(false);

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

  function handleInput(label) {
    setInputValue(label);

    if (label.trim().length > 0) {
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
    <div className={`p-0 `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        value={inputValue}
        autoComplete="off"
        className="h-8 rounded-lg bg-blue-800 font-medium px-4 py-2 text-white focus:outline-none w-44 md:w-52"
        onChange={(e) => {
          console.log(e.target.value);
          handleInput(e.target.value);
          
        }}
      />
      

      {showSuggetion && (
        <ul className="relative max-md:absolute w-44 md:w-52  min-w-fit h-fit max-h-48 overflow-y-scroll bg-white border  z-20  rounded-md ">
          { airportsList.length > 0 ? airportsList?.map((airport) => (
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
              <div className="font-medium text-slate-700 ">
                {airport?.city}, {airport?.country}{" "}
                <span>({airport?.iata_code})</span>
                <p className="font-normal text-xs text-slate-400 ">
                  {airport?.name}
                </p>
              </div>
            </li>
          )) : ( <div className="font-medium text-slate-300 text-lg py-4 text-center w-full h-full flex justify-center items-center">NO RESULT FOUND</div> ) }
        </ul>
      )}
    </div>
  );
};

export default InputBox;
