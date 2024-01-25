import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchAirports } from "../apis/FetchAirports";
const Test = () => {
  const [airportsList, setAirportsList] = useState(null);
  const [OGairportsList, setOGAirportsList] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
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
    setSelectedValue(airport?.iata_code);
    setInputValue(`${airport?.city}, (${airport?.iata_code})`);
  }

  return (
    <div className={`inputBox flex relative p-0 `}>
      <input
        placeholder={"Enter your text"}
        type={"text"}
        id="input"
        value={inputValue}
        className="w-full relative rounded-lg m-3 focus:outline-none  border-2 border-solid border-slate-200 hover:border-slate-500 focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 "
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <label
        htmlFor="input"
        className="absolute top-[2px] left-6 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] text-sm "
      >
        {"Input"}
      </label>

      {showSuggetion && (
        <ul className="absolute w-fit bg-white border left-5 z-10 top-20 rounded-md ">
          {airportsList?.map((airport) => (
            <li
              key={airport?._id}
              onClick={() => {
                handleSelect(airport);
              }}
              className="flex py-2 px-3 gap-3 hover:bg-sky-100 cursor-pointer"
            >   
            <img src="https://gos3.ibcdn.com/flightIcon-1675492260.png" alt="flight Icon" className="p-2 w-10 h-10"/>
              <p className="font-medium text-slate-700 ">
                {airport?.city}, {airport?.country}{" "}
                <span >({airport?.iata_code})</span>
                <p className="font-normal text-sm text-slate-400 ">{airport?.name}</p>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
