import React, { useState } from "react";
import { Counter } from "../../../components/";

const Travellers = ({ value, handleValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`h-8 bg-blue-800  rounded-lg flex items-center justify-center`}
      onClick={() => {
        setShowMenu(true);
      }}
    >
      <p className="font-medium text-white  px-4 py-2 cursor-pointer ">
        {value?.numbers?.adult} {value?.numbers?.adult > 1 ? "Adults" : "Adult"}
        {value?.numbers?.child > 0
          ? value?.numbers?.child > 1
            ? ", " + value?.numbers?.child + " Children"
            : ", " + value?.numbers?.child + " Child"
          : ""}
        {value?.numbers?.infant > 0
          ? value?.numbers?.infant > 1
            ? ", " + value?.numbers?.infant + " Infants"
            : ", " + value?.numbers?.infant + " Infant"
          : ""}
      </p>

      <div
        className={`counter absolute top-[95%]   bg-white rounded shadow-all w-[250px] md:w-96 p-4 px-8 z-[20] flex flex-col  md:left-auto  transition-all duration-500 origin-top-left ${
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
              value?.numbers?.infant ===
            9
          }
          handleClick={(secondType) => {
            handleValue(secondType, "adult");
          }}
        />
        <Counter
          name="Children"
          desc="(Aged 2-12 yrs)"
          count={value?.numbers?.child}
          disabledNeg={value?.numbers?.child == 0}
          disabledPos={
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.infant ==
            9
          }
          handleClick={(secondType) => {
            handleValue(secondType, "child");
          }}
        />
        <Counter
          name="Infants"
          desc="(Below 2 yrs)"
          count={value?.numbers?.infant}
          disabledNeg={value?.numbers?.infant == 0}
          disabledPos={
            value?.numbers?.adult <= value?.numbers?.infant ||
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.infant ==
              9
          }
          handleClick={(secondType) => {
            handleValue(secondType, "infant");
          }}
        />
      </div>
    </div>
  );
};

export default Travellers;
