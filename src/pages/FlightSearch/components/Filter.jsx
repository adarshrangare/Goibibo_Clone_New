import React, { useState } from "react";
import { Slider, Radio } from "antd";
import { SelectButton } from "../../../components";
import { MdOutlinePrivateConnectivity } from "react-icons/md";

const Filter = ({ filterValue, setFilterValue}) => {
  const [departure, setDeparture] = useState([]);
  const [stops, setStops] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [durationRange, setDurationRange] = useState({ min: null, max: null });
  const [preferredAirlines, setPreferredAirlines] = useState([]);
  const [filter,setFilter] = useState({});
  
  function handlePriceChange([minimum, maximum]) {
    setFilterValue((prev) => {
      // console.log(prev);

      if (!prev) {
        return `"ticketPrice":{"$gte":${minimum},"$lte":${maximum}}`;
      }

      return `${prev},+"ticketPrice":{"$gte":${minimum},"$lte":${maximum}}`;
    });
  }

  const handleFilterChange = () => {
    const filters = {};

    if (departure.length > 0) {
      filters.departure = departure;
    }

    if (stops.length > 0) {
      filters.stops = stops;
    }

    if (priceRange.min !== null || priceRange.max !== null) {
      filters.price = {
        $gte: priceRange.min !== null ? priceRange.min : undefined,
        $lte: priceRange.max !== null ? priceRange.max : undefined,
      };
    }

    if (durationRange.min !== null || durationRange.max !== null) {
      filters.duration = {
        $gte: durationRange.min !== null ? durationRange.min : undefined,
        $lte: durationRange.max !== null ? durationRange.max : undefined,
      };
    }

    if (preferredAirlines.length > 0) {
      filters.preferredAirlines = preferredAirlines;
    }

    setFilterValue(`"stops":1`);
  };

  const handleStops = (e, active,value) => {
    // console.log(filter);

    if (!active) {
        
        // console.log("length",Object.keys(filter));
      // ADD 
        if(Object.keys(filter).length == 0){
          console.log("filter Obj")
          setFilter(prev=>{
            prev["stops"]= [value];
            return prev;
          })
          
        }else if(filter?.stops){
          
          // console.log("push")
          setFilter(prev=>{
            prev["stops"].push(value);
            return prev;
          }) 

        }            

    } else{
        
        if(filter["stops"]){
            
          setFilter(prev=>{
            // prev["stops"] = prev["stops"].remove(value);
            // console.log(prev);
            prev.stops = prev?.stops?.filter(item=>( item!=value));

            return prev;
          })

        }

    }

    if(filter?.stops?.length == 0){
      setFilter(prev=>{
        delete prev["stops"];
        return prev;
      })
    }

    setFilterValue(JSON.stringify(filter));

  }

  const handleDeparture = ()=>{

    if(!active){

      

    }


  }


  return (
    <div className="w-full h-full">
      <div className="departure pb-6 border-b ">
        <h3 className="font-semibold text-sm text-slate-700">Departure</h3>

        <div className="group_departure flex w-full flex-wrap gap-3 justify-center items-center my-3 ">
          <SelectButton label={"Before 6AM"} />
          <SelectButton label={"6AM to 12PM"} />
          <SelectButton label={"12PM to 6PM"} />
          <SelectButton label={"After 6PM"} />
        </div>
      </div>
      <div className="stops py-6 border-b ">
        <h3 className="font-semibold text-sm text-slate-700">Stops</h3>
        
        <SelectButton
          label={"Non Stop"}
          value={0}
          handleClick={handleStops}
        />
        <SelectButton
          label={"1 Stop"}
          value={1}
          handleClick={handleStops}
        />
        <SelectButton
          label={"2+ Stops"}
          value={2}
          handleClick={handleStops}
        />
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
      <div className="duration my-6 py-8 ">
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
