import React from "react";
import { useState } from "react";

const SelectButton = ({label,filterObj,value,handleClick}) => {

    const [active,setActive] = useState(false);

  return (
      <button
      type="checkbox"
        className={`px-4 py-2 border-none outline-none focus:outline-none  rounded-md text-sm font-medium   ${active?  "bg-blue-500 text-white hover:text-white" : " hover:text-blue-500 text-slate-400 bg-slate-200"}  `}
        onClick={(e) => {
      
          handleClick(e,active,value);
      
          setTimeout(()=>{
            setActive(prev=>!prev);
          },0)
        }}
      >
        {label}
      
    </button>
  );
};

export default SelectButton;
