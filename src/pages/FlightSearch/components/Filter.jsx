import { Checkbox, Select, Slider } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";

const Filter = ({ setFilter, filter, handleFilter }) => {
  const [priceRange, setPriceRange] = useState([200, 4000]);

  return (
    <div className="w-full ">
      <div className="border-b mb-2 pb-4 py-2">
        <h1 className="font-medium ">Stops</h1>
        <Checkbox.Group
          className="px-4 flex flex-col gap-4 my-4 flex-wrap mx-auto justify-center items-start"
          onChange={(value) => {
            // console.log(value);
            handleFilter("stops", value);
          }}
          options={[
            {
              label: "Non-Stop",
              value: 0,
            },
            {
              label: "1 Stop",
              value: 1,
            },
            {
              label: "2 Stop",
              value: 2,
            },
          ]}
        ></Checkbox.Group>
      </div>
      <div className="border-b mb-2 pb-4 py-2">
        <h1 className="font-medium ">Duration</h1>
        <Checkbox.Group
          className="px-4 flex flex-col gap-4 my-4 flex-wrap mx-auto justify-center items-start"
          onChange={(value) => {
            // console.log(value);
            handleFilter("duration", value);
          }}
          options={[
            {
              label: "1 hour",
              value: 1,
            },
            {
              label: "2 hours",
              value: 2,
            },
            {
              label: "3 hours",
              value: 3,
            },
            {
              label: "4 hours",
              value: 4,
            },
            {
              label: "5 hours",
              value: 5,
            },
            {
              label: "6 hours",
              value: 6,
            },
          ]}
        ></Checkbox.Group>
      </div>
      
      <div className="pb-4 mb-2 py-2">
        <h1 className="font-medium ">
          Price{" "}
          <span className="text-xs text-slate-500 font-normal">
            (This Filter is based on SL price)
          </span>
        </h1>

        <Slider
          range={{ draggableTrack: true }}
          defaultValue={priceRange}
          min={200}
          max={4000}
          className="w-11/12 mx-auto"
          onChangeComplete={(value) => {
            // console.log(value);
            setPriceRange(value);
            handleFilter("price", value);
          }}
        />
        <div className="flex justify-between mt-4">
          <span className="text-sm bg-slate-200 bg-opacity-75 p-1 rounded-lg ">
            {priceRange[0]}
          </span>{" "}
          <span className="text-sm bg-slate-200 bg-opacity-75 p-1 rounded-lg ">
            {priceRange[1]}
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Filter;
