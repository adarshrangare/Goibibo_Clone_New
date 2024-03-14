import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { fetchCities } from "../../../apis/fetchCitiesList";
import { FaHotel } from "react-icons/fa";
const LocationInput = ({
  label,
  placeholder,
  id,
  type,
  selectedValue,
  onChange,
  value,
  setInputValue,
  error,
  className,
  labelClass
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  const [showSuggetion, setShowSuggestion] = useState(false);

  const [citiesList, setCitiesList] = useState(null);

  const [localInputValue, setLocalInputValue] = useState(value);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetchCities(localInputValue, token).then((res) => {
      // console.log(res?.data?.cities);

      setCitiesList(res?.data?.cities);
    });
  }, [localInputValue]);

  function handleInput(inputText) {
    setLocalInputValue(inputText);
    setInputValue(inputText)
    if (inputText.trim().length > 0) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  }

  function handleSelect(selectedCity){
        
    setInputValue(selectedCity);

    setShowSuggestion(false);

  }

  return (
    <div className={`inputBox flex relative p-0 `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        ref={label == "Password" ? inputRef : null}
        value={value}
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
          error ? "text-red-500" : "text-[rgb(119,119,119)]"
        }  ${labelClass}`}
      >
        {label ? label : "Input"}
      </label>

      {label == "Password" && (
        <div
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-2xl text-slate-400 transition-all"
          onClick={() => {
            setShowPassword((prev) => !prev);
            inputRef.current.type = !showPassword ? "text" : "password";
          }}
        >
          {showPassword ? <BiHide /> : <BiShowAlt />}{" "}
        </div>
      )}

      {/* // Suggestion List */}

      {showSuggetion && (
        <ul className="absolute w-fit min-w-full h-fit max-h-48 overflow-y-scroll bg-white border left-0 z-10 top-16 rounded-md ">
          {citiesList?.length > 0 ? (
            citiesList?.map((city) => (
              <li
                key={city?._id}
                onClick={() => {
                  handleSelect(city?.cityState);
                }}
                className="flex items-center py-2 px-3 gap-3 hover:bg-sky-100 cursor-pointer"
              >
                
                <FaHotel className="p-2 w-10 h-10 text-slate-500"/>
                <p className="font-medium text-slate-700 ">{city?.cityState}</p>
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

export default LocationInput;
