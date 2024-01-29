import React from "react";
import { useState } from "react";

const SignTabSwitcher = ({ onTabChange, tabs }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 140);
    setTimeout(() => {
      setSelectedTabIndex(index);
    },0);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs h-[38px] mx-auto mb-4  border-2 overflow-x-hidden p-0.5 rounded-[20px] w-72">
      <div className="tabItems flex items-center h-full relative w-full text-slate-500 ">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`tabItem h-full flex items-center justify-center w-full  font-medium z-[2] cursor-pointer transition-colors duration-300  ${ selectedTabIndex==index ? "text-blue-500" : ""} `}
            onClick={() => {
              activeTab(tab, index);
            }}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg h-7 w-1/2 rounded-2xl bg-sky-100 absolute left-0 transition-[left] duration-[cubic-bezier(0.88,-0.35,0.565,1.35)]  " style={{ left: left }}></span>
      </div>
    </div>
  );
};

export default SignTabSwitcher;