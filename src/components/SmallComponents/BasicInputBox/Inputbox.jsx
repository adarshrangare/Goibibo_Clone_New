import React, { useState, useRef } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
const Inputbox = ({
  label,
  placeholder,
  id,
  type,
  selectedValue,
  onChange,
  value,
  setInputValue,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
 


  return (
    <div className={`inputBox flex relative p-0 `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        ref={label == "Password" ? inputRef : null}
        value={value}
        autoComplete="off"
        className={`w-full relative rounded-lg m-3 focus:outline-none  border-2 border-solid   focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 ${
          error ? "border-red-500" : "border-slate-200 hover:border-slate-500"
        }`}
        onChange={onChange}
      />

      <label
        htmlFor={id}
        className={`absolute select-none top-[2px] left-6 px-1 rounded bg-[#fff]  font-medium leading-[18px] text-sm ${
          error ? "text-red-500" : "text-[rgb(119,119,119)]"
        } `}
      >
        {label ? label : "Input"}
      </label>

      {label == "Password" && (
        <div
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-2xl text-slate-400 transition-all"
          onClick={(e) => {
            
            setShowPassword((prev) => !prev);
            inputRef.current.type = !showPassword ? "text" : "password";
          }}
        >
          {showPassword ? <BiHide /> : <BiShowAlt />}{" "}
        </div>
      )}

      {/* // Suggestion List */}

     

    </div>
  );
};

export default Inputbox;
