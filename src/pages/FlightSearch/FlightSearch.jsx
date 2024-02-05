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
import { endOfDay } from "date-fns";

const FlightSearch = () => {
  useEffect(() => {
    document.querySelector(".bgSvg").style.display = "none";

    return () => {
      document.querySelector(".bgSvg").style.display = "block";
    };
  }, []);

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
  const [sortValue, setSortValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showFilter, setShowFilter] = useState(false);


  useEffect(() => {
    const day = dayjs(date).format("ddd");
    fetchFlights(source, dest, day, 10, page, sortValue, filterValue).then(
      (response) => {

        setTotal(response?.totalResults);
        setResults(response?.results);
        setFlightsList(response?.data?.flights);
      }
    );
  }, [
    searchQuery,
    page,
    source_location,
    destination_location,
    date_of_journey,
    sortValue,
    filterValue,
  ]);

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
            className="px-4 sm:hidden"
            onClick={() => {
              setShowFilter((prev) => !prev);
            }}
          >
            {" "}
            <FilterTwoTone /> Filter Flights
          </button>
          <div className="px-4 max-sm:hidden">
            {" "}
            <FilterTwoTone /> Filter Flights
          </div>

          <div
            className={` ${
              showFilter ? "max-sm:scale-100" : "max-sm:scale-0"
            } w-10/12 md:w-full  bg-white md:h-[120vh] h-fit md:mt-4 rounded-xl border hover:shadow-even transition-all origin-top-left absolute left-8 md:left-auto md:relative p-4 z-[2] `}
          >
            <div className="w-full h-full relative">
              <button
                className="md:hidden absolute -top-6 -right-6 w-6 h-6 bg-white rounded-full shadow-even "
                onClick={() => {
                  setShowFilter(false);
                }}
              >
                x
              </button>

              <Filter
                flightsList={flightsList}
                setFlightsList={setFlightsList}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            </div>
          </div>
        </div>

        <div className="basis-3/4">
          <div className="sort mb-2">
            {results && (
              <span className="text-xs px-6 my-2 inline-block text-slate-400">
                Showing {results} of {total}
              </span>
            )}

            <Select
              defaultValue="Select to Sort"
              onChange={(value) => {
                console.log(value);
                setSortValue(value);
              }}
              options={[
                {
                  value: `"ticketPrice":1`,
                  label: (
                    <span className="font-medium">
                      Price{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to High)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"ticketPrice":-1`,
                  label: (
                    <span className="font-medium">
                      Price{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"duration":1`,
                  label: (
                    <span className="font-medium">
                      Duration{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to high)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"duration":-1`,
                  label: (
                    <span className="font-medium">
                      Duration{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"departureTime":1`,
                  label: (
                    <span className="font-medium">
                      Departure{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to high)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"departureTime":-1`,
                  label: (
                    <span className="font-medium">
                      Departure{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"arrivalTime":1`,
                  label: (
                    <span className="font-medium">
                      Arrival{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to high)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"arrivalTime":-1`,
                  label: (
                    <span className="font-medium">
                      Arrival{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
              ]}
            />
          </div>

          <FlightsContainer flightsList={flightsList} />

          <Pagination
            className=""
            total={total}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
