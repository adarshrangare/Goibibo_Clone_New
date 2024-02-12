import { DatePicker } from "antd";
import React, { useState } from "react";
import { SearchButton, SwapButton, TravellersCount } from "../../../components";
import { useFlightPassanger } from "../../../context/FlightContext/FlightPassengerProvider";
import "../style.css";
import InputBox from "./InputBox";
import dayjs from "dayjs";
import Travellers from "./Travellers";
import locale from "antd/es/date-picker/locale/en_US";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchFlights } from "../../../apis/FetchFlights";

// import 'dayjs/locale/zh-cn';

const InputSection = ({ journeyDetails, dispatchJourneyDetails,flightsList,
  setFlightsList }) => {

  const { searchQuery } = useParams();
  console.log({searchQuery});

  const encodedString = searchQuery ?? '' ;

  const extractedEncodedPath = encodedString.replace('air-', '');
  console.log(extractedEncodedPath);
  // console.log(encoded);
  const decodedPath = atob(extractedEncodedPath);

  console.log(decodedPath);

  const [location, date, counts] =  decodedPath?.split("--");
  console.log(location,date,counts);
  
  const [source, dest] = location?.split("-");

  const [adult, child, infant] = counts?.split("-");
  const {
    source_location,
    destination_location,
    oneway,
    travel_details,
    date_of_journey,
  } = journeyDetails;

  

  const [inputSourceValue, setInputSourceValue] = useState(source);
  const [inputDestValue, setInputDestValue] = useState(dest);
  const [expand, setExpand] = useState(false);

  const navigate = useNavigate();
  function handleSearch(){
      
      console.log("hello")

      const {adult,child,infant} = travel_details.numbers;
      
    const encodedPath = btoa(`${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`)

      navigate(`/flight/air-${encodedPath}`)
      

      

  }


  return (
    <div className="flex flex-col pt-1 pb-6 md:flex-row w-full lg:w-10/11 justify-center">
      <div className="flex overflow-x-hidden px-2 my-2 w-full md:w-fit lg:w-fit justify-center ">
        

        <InputBox
          className=""
          placeholder="From"
          id="source_location"
          selectedValue={source_location}
          inputValue={inputSourceValue}
          setInputValue={setInputSourceValue}
          handleValue={(value) => {
            
            dispatchJourneyDetails({
              type: "set_source_location",
              payload: { value },
            });
          }}
        />

        <SwapButton
          handleSwap={() => {
            const temp = inputDestValue;
            setInputDestValue(inputSourceValue);
            setInputSourceValue(temp);
            dispatchJourneyDetails({ type: "swap_location" });
          }}
          className="rounded-full bg-white w-8 h-8 flex z-[2] items-center justify-center -mx-2 shrink-0"
        />

        <InputBox
          className=""
          placeholder="To"
          id="destination_location"
          inputValue={inputDestValue}
          setInputValue={setInputDestValue}
          selectedValue={destination_location}
          handleValue={(value) => {
            dispatchJourneyDetails({
              type: "set_destination_location",
              payload: { value },
            });
          }}
        />
      </div>
     
      <div className="flex my-2 mx-auto justify-center md:justify-start md:w-fit lg:w-fit gap-2 md:mx-4 ">
        
        <DatePicker
          className="bg-blue-800 outline-none border-none font-medium h-8 hover:bg-blue-800 text-white px-2 py-2 "
          locale={locale}
          
          format={"DD-MM-YYYY"}
          value={dayjs(date_of_journey)}
          onChange={(value) => {
            console.log("handleDate");
            const date = dayjs(value.$d).format();
            const dateFormat = dayjs(date).format("YYYY-MM-DD");
            dispatchJourneyDetails({
              type: "set_date_of_journey",
              payload: { value: dateFormat },
            });
          }}
        />

        <span className=" block h-8 rounded-lg bg-blue-800 font-medium text-center text-white capitalize py-1 px-4 ">
          {travel_details?.class}{" "}
        </span>
      </div>

      <div className="flex my-2 justify-center md:justify-start md:w-fit md:mx-1 mx-auto">
        <Travellers
          value={travel_details}
          handleValue={(secondType, target) => {
            dispatchJourneyDetails({
              type: "set_travel_details",
              secondType: secondType,
              target: target,
            });
          }}
        />
      </div>

      <button
        type={"UPDATE"}
        onClick={handleSearch}
        className="px-8 py-2 mt-1 bg-orange-500 w-fit mx-auto rounded-full font-medium text-base text-white hover:bg-orange-600 outline-none focus:outline-none absolute -bottom-6 left-[50%] translate-x-[-50%]  uppercase transition-all"
      > UPDATE SEARCH</button>


    </div>
  );
};

export default InputSection;
