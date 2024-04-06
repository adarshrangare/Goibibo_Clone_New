import { Checkbox, Rate, Slider } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { Md18UpRating } from "react-icons/md";

const FilterHotels = ({ setFilter, filter, handleFilter }) => {
  const [priceRange, setPriceRange] = useState([200, 4000]);

  return (
    <div className="w-full ">
      <div className="border-b mb-2 pb-4 py-2">
        <h1 className="font-medium ">Couple Friendly</h1>
        <Checkbox.Group
          className="flex gap-4 my-4 flex-wrap mx-auto justify-start items-start px-4"
          onChange={(value) => {
            // console.log(value);
            handleFilter("coupleFriendly", value);
          }}
          options={[
            {
              label: <span>Couple Friendly</span>,
              value: true,
            },
          ]}
        ></Checkbox.Group>
      </div>
      <div className="border-b mb-2 pb-4 py-2">
        <h1 className="font-medium ">Ratings</h1>
        <Checkbox.Group
          className="flex flex-col px-4 gap-4 my-4 flex-wrap mx-auto justify-center items-start"
          onChange={(value) => {
            // console.log(value);
            handleFilter("rating", value);
          }}
          options={[
            {
              label: <Rate value={3} allowHalf  disabled/>,
              value: 3,
            },
            {
              label: <Rate value={3.5} allowHalf  disabled/>,
              value: 3.5,
            },
            {
              label: <Rate value={4} allowHalf  disabled/>,
              value: 4,
            },
            {
              label: <Rate value={4.5} allowHalf  disabled/>,
              value: 4.5,
            },
            {
              label: <Rate value={5} allowHalf disabled/>,
              value: 5,
            },
          ]}
        ></Checkbox.Group>
      </div>
      {/* <div className="pb-4 mb-2 py-2">
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
      </div> */}
    </div>
  );
};

export default FilterHotels;
