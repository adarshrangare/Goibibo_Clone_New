import React from "react";
import { Slider, Radio } from "antd";
import { SelectButton } from "../../../components";

const Filter = ({ filterValue, setFilterValue }) => {

    const filterObj = {};
  
    function handlePriceChange([minimum,maximum]) {

            setFilterValue(prev=>{

                console.log(prev)
                
                if(!prev){
                    return `"ticketPrice":{"$gte":${minimum},"$lte":${maximum}}`;
            
                }

                return `${prev},+"ticketPrice":{"$gte":${minimum},"$lte":${maximum}}`;
            })


  }

  return (
    <div className="w-full h-full">
      <div className="departure pb-6 border-b ">
        <h3 className="font-semibold text-sm text-slate-700">Departure</h3>
        {/* <Radio.Group
          buttonStyle="solid"
          className="flex w-full flex-wrap gap-3 justify-center items-center my-3 "
          onChange={(e) => {
            console.log(e.target.value);
            setFilterValue(e.target.value);
          }}
        >
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"departureTime":{"$lt":"06:00"}`}
          >
            Before 6AM
          </Radio.Button>
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"departureTime":{"$gte":"06:00","$lt":"12:00"}`}
          >
            6AM to 12PM
          </Radio.Button>
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"departureTime":{"$gte":"12:00","$lt":"18:00"}`}
          >
            12PM to 6PM
          </Radio.Button>
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"departureTime":{"$gt":"18:00"}`}
          >
            After 6PM
          </Radio.Button>
        </Radio.Group> */}

        <div className="group_departure flex w-full flex-wrap gap-3 justify-center items-center my-3 ">

        <SelectButton label={"Non Stop"} />
        <SelectButton label={"1 Stop"} />
        <SelectButton label={"2+ Stops"} />


        </div>


      </div>
      <div className="stops py-6 border-b ">
        <h3 className="font-semibold text-sm text-slate-700">Stops</h3>
        <Radio.Group
          buttonStyle="solid"
          className="flex w-full flex-wrap gap-3 justify-center items-center my-3 "
          onChange={(e) => {
            // console.log(e.target.value);
            setFilterValue(e.target.value);
          }}
        >
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"stops":0`}
          >
            Non Stop
          </Radio.Button>
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"stops":1`}
          >
            1 Stop
          </Radio.Button>
          <Radio.Button
            className="px-4 py-5 flex items-center  border-none bg-slate-200 font-medium text-slate-400 rounded-md"
            buttonStyle="solid"
            value={`"stops":{"$gte":2}`}
          >
            2+ Stops
          </Radio.Button>
        </Radio.Group>
      </div>

      <div className="price py-8 border-b">
        <h3 className="font-semibold text-sm text-slate-700">Price</h3>

        <Slider
          className="w-10/12 mx-auto "
          onChangeComplete={handlePriceChange}
          range={{ draggableTrack: true }}
          defaultValue={[1500, 10000]}
          min={1500}
          max={10000}
        />
      </div>
      <div className="price my-6 py-8 ">
        <h3 className="font-semibold text-sm text-slate-700">Duration</h3>
        
        <Slider
          className="w-10/12 mx-auto"
          onChangeComplete={""}
          range={{ draggableTrack: true }}
          defaultValue={[1, 10]}
          min={1}
          max={10}
          
        />
        
      </div>
    </div>
  );
};

export default Filter;
