import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import { SearchButton, SwapButton, TravellersCount } from "../../../components";
import { useFlightPassanger } from "../../../context/FlightContext/FlightPassengerProvider";
import "../style.css";
import InputBox from "./InputBox";
import dayjs from "dayjs";
import Travellers from "./Travellers";
import locale from "antd/es/date-picker/locale/en_US";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

// import 'dayjs/locale/zh-cn';

const InputSection = ({
  journeyDetails,
  dispatchJourneyDetails,
  flightsList,
  setFlightsList,
}) => {
  // console.log(journeyDetails);

  const { journeyDetails: details } = useFlightPassanger();

  const { searchQuery } = useParams();
  // console.log({searchQuery});

  const encodedString = searchQuery ?? "";

  const extractedEncodedPath = encodedString.replace("air-", "");
  // console.log(extractedEncodedPath);
  // console.log(encoded);
  const decodedPath = atob(extractedEncodedPath);
  // console.log(decodedPath);
  // console.log(decodedPath);

  const [location, date, counts] = decodedPath?.split("--");
  // console.log(location,date,counts);

  const [source, dest] = location?.split("-");

  let [adult, child, infant] = counts?.split("-");
  adult *= 1;
  child *= 1;
  infant *= 1;

  console.log({ adult, child, infant });
  const {
    source_location,
    destination_location,
    travel_details,
    date_of_journey,
  } = journeyDetails;

  useEffect(() => {
    dispatchJourneyDetails({
      type: "set_travel_details_numbers",
      payload: { value: { adult, child, infant } },
    });
  }, []);

  const [inputSourceValue, setInputSourceValue] = useState(source);
  const [inputDestValue, setInputDestValue] = useState(dest);
  const [pageLoad, setPageLoad] = useState(false);
  // console.log(travel_details.numbers)
  const navigate = useNavigate();
  function handleSearch() {
    setPageLoad(true);
    // console.log("hello")

    // const {adult,child,infant} = travel_details.numbers;
    // console.log({adult,child,infant},"inside handleSearch");
    const encodedPath = btoa(
      `${source_location}-${destination_location}--${date_of_journey}--${travel_details.numbers.adult}-${travel_details.numbers.child}-${travel_details.numbers.infant}`
    );

    // console.log(`${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`);

    setTimeout(() => {
      setPageLoad(false);
      navigate(`/flight/air-${encodedPath}`);
    }, 1000);
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
            // console.log("handleDate");
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
          value={details.travel_details}
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
        
        onClick={handleSearch}
        className="px-8 py-2 text-nowrap mt-1 bg-orange-500 w-fit mx-auto rounded-full font-medium text-base text-white hover:bg-orange-600 outline-none focus:outline-none absolute -bottom-6 left-[50%] translate-x-[-50%]  uppercase transition-all"
      >
        {" "}
        {pageLoad ? <LoadingOutlined /> : "UPDATE SEARCH"}
      </button>
    </div>
  );
};

export default InputSection;
