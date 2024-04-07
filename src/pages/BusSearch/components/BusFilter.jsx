import React,{useEffect,useState} from 'react'
import { Checkbox, Slider } from "antd";
import {
  TbAirConditioning,
  TbAirConditioningDisabled,
} from "react-icons/tb";

const BusFilter = ({handleFilter}) => {
  const [priceRange, setPriceRange] = useState([200, 4000]);

  return (
    <div className="w-full ">
      <div className="border-b mb-2 pb-4 py-2">
        <h1 className="font-medium ">Bus Types</h1>
        <Checkbox.Group
          className="flex gap-4 my-4 flex-wrap mx-auto justify-center items-center"
          onChange={(value) => {
            // console.log(value);
            handleFilter("busType", value);
          }}
          options={[{
            label: <div className='flex items-center gap-2 mt-2 font-medium'> <TbAirConditioning className='w-6 h-6'/> AC </div>,
            value: "AC",
          }, {
            label: <div className='flex items-center gap-2 mt-2 font-medium'> <TbAirConditioningDisabled className='w-6 h-6'/> Non-AC </div>,
            value: "Non-AC",
          }]}
        ></Checkbox.Group>
      </div>
      
      <div className="pb-4 mb-2 py-2">
        <h1 className="font-medium ">Price <span className="text-xs text-slate-500 font-normal">(This Filter is based on SL price)</span></h1>
          
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
  )
}

export default BusFilter