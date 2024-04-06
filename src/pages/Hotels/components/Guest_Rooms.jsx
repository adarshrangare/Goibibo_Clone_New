import React, { useState } from "react";
import { Counter } from "../../../components";

const Gust_Room = ({ value, handleValue,className, classNamep,labelClass }) => {
  const [showMenu, setShowMenu] = useState(false);

  // console.log(value);

  return (
    <div
      className={`text-left  relative border-2 rounded-md p-0 m-3 min-w-[200px] w-fit   hover:border-slate-500 cursor-pointer ${className} ${
        showMenu ? "border-blue-500" : ""
      } `}
      onClick={() => {
        setShowMenu(true);
      }}
    >
      <p className={`font-medium leading-0 px-4 pt-2  m-0 ${classNamep}`}>
        {value?.numbers?.adult} {value?.numbers?.adult > 1 ? "Adults" : "Adult"}
        {value?.numbers?.child > 0
          ? value?.numbers?.child > 1
            ? ", " + value?.numbers?.child + " Children"
            : ", " + value?.numbers?.child + " Child"
          : ""}
        {value?.numbers?.room > 0
          ? value?.numbers?.room > 1
            ? ", " + value?.numbers?.room + " Rooms"
            : ", " + value?.numbers?.room + " Room"
          : ""}
      </p>
      

      <label
        htmlFor={"id"}
        className={`absolute -top-3 left-3 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] text-sm z-[2] ${labelClass}`}
      >
        Guests & Rooms
      </label>

      <div
        className={`counter absolute top-16 -left-1 bg-white rounded shadow-all w-[250px] md:w-96 p-4 px-8 z-[2] flex flex-col  md:left-auto  transition-all duration-500 origin-top-left ${
          showMenu ? "scale-100 " : "scale-0"
        }`}
      >
        <button
          className="close shadow-all text-center w-6 h-6 bg-white absolute -top-3 -right-3 rounded-full"
          onClick={() => {
            // console.log("clicked cross");
            setTimeout(() => {
              setShowMenu((prev) => {
                // console.log("click", prev);
                return false;
              });
            }, 0);
          }}
        >
          x
        </button>
        <Counter
          name="Adults"
          desc="(Aged 12+ yrs)"
          count={value?.numbers?.adult}
          disabledNeg={value?.numbers?.adult == 1}
          disabledPos={
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.room ===
            9
          }
          handleClick={(secondType) => {
            handleValue("adult",secondType);
          }}
        />
        <Counter
          name="Children"
          desc="(Below 12 yrs)"
          count={value?.numbers?.child}
          disabledNeg={value?.numbers?.child == 0}
          disabledPos={
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.room ==
            9
          }
          handleClick={(secondType) => {
            handleValue("child",secondType);
          }}
        />
        <Counter
          name="Rooms"
          desc="1 Bedroom"
          count={value?.numbers?.room}
          disabledNeg={value?.numbers?.room == 0}
          disabledPos={
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.room ==
            9
          }
          handleClick={(secondType) => {
            handleValue("room",secondType);
          }}
        />
      </div>
    </div>
  );
};

export default Gust_Room;
