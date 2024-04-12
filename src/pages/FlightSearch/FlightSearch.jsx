import { Pagination, Select } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFlights } from "../../apis/FetchFlights";
import {
  ContentWrapper,
  InputField,
  RadioInput,
  SwapButton,
} from "../../components";
import FlightPassengerProvider, {
  useFlightPassanger,
} from "../../context/FlightContext/FlightPassengerProvider";
import FlightsContainer from "./components/FlightsContainer";
import SearchSection from "./components/SearchSection";
import { FilterTwoTone } from "@ant-design/icons";
import "./style.css";
import Filter from "./components/Filter";

import SortSection from "./components/SortSection";

const FlightSearch = () => {
  const { searchQuery } = useParams();

  const encodedString = searchQuery ?? "";

  const extractedEncodedPath = encodedString.replace("air-", "");

  const decodedPath = atob(extractedEncodedPath);

  const [location, date, counts] = decodedPath?.split("--");

  const [source, dest] = location?.split("-");

  const [adult, child, infant] = counts?.split("-");

  const { journeyDetails, dispatchJourneyDetails } = useFlightPassanger();

  useEffect(() => {
    dispatchJourneyDetails({
      type: "set_source_location",
      payload: { value: source },
    });

    dispatchJourneyDetails({
      type: "set_destination_location",
      payload: { value: dest },
    });

    dispatchJourneyDetails({
      type: "set_date_of_journey",
      payload: { value: date },
    });
    dispatchJourneyDetails({
      type: "set_travel_details_numbers",
      payload: { value: { adult, child, infant } },
    });
  }, []);

  const { source_location, destination_location, date_of_journey } =
    journeyDetails;

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [results, setResults] = useState(0);
  const [flightsList, setFlightsList] = useState([]);
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [filterChange,setFilterChange] = useState(false);

  const [isLoading,setIsLoading] = useState(false);
  const day = dayjs(Date(date)).format("ddd");
  
  useEffect(()=>{
    setIsLoading(true)
    // console.log("api calling");
    fetchFlights(source,dest,day,sort,filter,10,page).then((res)=>{
      setIsLoading(false);
      setResults(res?.results)
      setTotal(res?.totalResults)
      setFlightsList(res?.data?.flights)
    })
    // console.log({source,dest,day,sort,filter,limit:10,page})

  },[source,dest,day,sort,page,filter,filterChange])


  const handleFilter = (type,value) => {
    setFilterChange(prev=>!prev);
    // console.log("handleFilter called")

    if (type == "stops") {
      setFilter((prev) => {
        // console.log("inside setFilter")
        if(value.length > 0){
          prev["stops"] = value
        } else{
          delete prev["stops"]
        }
        return prev;
      });
    }

    if (type == "duration") {
      setFilter((prev) => {
        if(value.length > 0){
          prev["duration"] = value
        } else{
          delete prev["duration"]
        }
        return prev;
      });
    }

    if (type == "price") {
      setFilter((prev) => {
        if(value.length > 0){
          prev["ticketPrice"] = {"$gte": parseInt(value[0]),"$lte": parseInt(value[1])}
        } 
        return prev;
      });
    }
    
    // console.log(filter);
    setPage(1);
  };
  

  return (
    <div className="mx-auto w-full">
      <div
        className={`sticky p-0 m-0 top-0 left-0 right-0 z-10 bg-blue-500 w-screen  h-48 md:h-32  `}
      >
        <ContentWrapper>
          <SearchSection
            journeyDetails={journeyDetails}
            dispatchJourneyDetails={dispatchJourneyDetails}
            setResults={setResults}
            setTotal={setTotal}
            setFlightsList={setFlightsList}
          />
        </ContentWrapper>
      </div>

      <div className=" w-full mx-auto mt-10 flex gap-4 flex-col md:flex-row md:w-11/12 lg:w-9/12">
        <div className="filterSection basis-1/4 ">
          <button
            className="px-4 md:hidden"
            onClick={() => {
              setShowFilter((prev) => !prev);
            }}
          >
            {" "}
            <FilterTwoTone /> Filter Flights
          </button>
          <div className="px-4 max-md:hidden">
            {" "}
            <FilterTwoTone /> Filter Flights
          </div>

          <div
            className={` ${
              showFilter ? "max-md:scale-100" : "max-md:scale-0"
            } w-10/12 md:w-full  bg-white md:h-[120vh] h-fit md:mt-4 rounded-xl border hover:shadow-even transition-all origin-top-left absolute left-8 md:left-auto md:relative p-4 z-[2] `}
          >
            <div className="w-full h-full relative">
              <button
                className="md:hidden absolute -top-6 -right-6 w-6 h-6 bg-white rounded-full shadow-even "
                onClick={() => {
                  // console.log("Clicked Cross");
                  setShowFilter(false);
                }}
              >
                x
              </button>

              <Filter
                flightsList={flightsList}
                setFlightsList={setFlightsList}
                handleFilter={handleFilter}
                filter={filter}
              />
            </div>
          </div>
        </div>

        <div className="basis-3/4">
          {
            <SortSection
              results={results}
              total={total}
              setSortValue={(value) => {
                // console.log({ value });
                setSort(JSON.parse(value));
              }}
            />
          }

          <FlightsContainer flightsList={flightsList} isLoading={isLoading} />

          <Pagination
            className="my-4 flex items-center justify-center"
            total={total}
            onChange={(page) => {
              setPage(page);
              window.scrollBy(0, -window.innerHeight);
              document.getElementById("flightContainer").scrollTop = 0;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
