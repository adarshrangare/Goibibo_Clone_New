import dayjs, { Dayjs } from "dayjs";
import React from "react";
// import "./style.css";

const DatePicker = ({
  label,
  placeholder,
  id,
  inputValue,
  handleInput,
  min,
  className
}) => {

  // console.log(handleInput);

  return (
    <div className={`inputBox flex relative p-0 cursor-pointer`}>
      <input
        placeholder={placeholder ? placeholder : "Select Date"}
        type="date"
        id={id}
        min={min}
        value={dayjs(inputValue).format('YYYY-MM-DD')}
        className="w-fit relative rounded-lg m-3 focus:outline-none cursor-pointer border-2 border-solid border-slate-200 bg-white hover:border-slate-500 focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 "
        onChange={(e) => {
          // console.log(e.target.value)
          handleInput(e.target.value);
        }}
      />
      <label
        htmlFor={id}
        className="absolute top-[2px] left-6 px-1 cursor-pointer rounded bg-white text-[rgb(119,119,119)] font-medium leading-[18px] text-sm "
      >
        {label ? label : "Input"}
      </label>
    </div>
  );
};

export default DatePicker;
