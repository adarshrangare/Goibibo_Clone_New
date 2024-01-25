import React from 'react'
import { useState } from 'react';


const TabSwitcher = ({tabs,onTabChange }) => {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);


  const activeTab = (tab, index) => {
    // setLeft(index * 100);

      setSelectedTabIndex(index);

    onTabChange(tab);
  };


  return (
    <div className="mx-2 my-2 md:my-6">
      <div className="tabItems flex">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`transition-all capitalize duration-500 mr-2 px-4 py-2 rounded-full font-medium cursor-pointer ${ selectedTabIndex==index ? "bg-blue-100 text-blue-600" : "text-slate-500 hover:text-slate-800 "}  ${index!=0 ? "hidden md:block" : ""} `}
            onClick={() => {
              activeTab(tab, index);
            }}
          >
            {tab}
          </span>
        ))}

      </div>
    </div>
  )
}

export default TabSwitcher