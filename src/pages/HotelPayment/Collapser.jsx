import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.css";

const CollapseWindow = ({heading, children,textClass,className}) => {
  const [visible, setVisible] = useState(true);

  const contentEl = useRef(null);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
    setEleHeight((prev)=>{
      return visible ? contentEl.current?.scrollHeight : 0;
    })
  };

  useEffect(()=>{
    setEleHeight(contentEl.current?.scrollHeight);
  })

  const [eleHeight ,setEleHeight] = useState(contentEl.current?.scrollHeight );
  
  return (
    <section
      className={`CollapseWindow bg-white rounded-md border overflow-hidden mb-4 ${className}`}
    >
      <div className="headContainer flex justify-between items-center">
        <h1 className={`font-medium p-2 md:px-6 px-4 ${textClass}`}>{heading}</h1>
        <IoIosArrowDown
          className={`text-lg p-1 bg-slate-200 h-6 w-6 mx-6 text-slate-500 rounded-full transition-transform duration-300 cursor-pointer ${
            visible ? "rotate-180" : ""
          }`}
          onClick={toggleVisibility}
          aria-label={visible ? "Collapse" : "Expand"}
        />
      </div>

      <div
        ref={contentEl}
        className="h-0 md:px-6 px-4 overflow-hidden transition-all border-t-2"
        style={{height: visible ? contentEl.current?.scrollHeight : 0 }}
      >
        {children}
      </div>
    </section>
  );
};

export default CollapseWindow;
