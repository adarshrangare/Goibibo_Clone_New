import { Pagination } from "antd";
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

import "./style.css";
const FlightSearch = () => {
  useEffect(() => {
    document.querySelector(".bgSvg").style.display = "none";

    return () => {
      document.querySelector(".bgSvg").style.display = "block";
    };
  }, []);

  const { searchQuery } = useParams();

  const [location, date, counts] = searchQuery.split("--");

  const [type, source, dest] = location.split("-");
  const [adult, child, infant] = counts.split("-");

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

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10)
  const [flightsList, setFlightsList] = useState([]);

  useEffect(() => {

    

    const day = dayjs(date).format("ddd");
    fetchFlights(source, dest, day, 10, page).then((response) => {
      console.log({ response });
      // setFlightsList((prev) => [...prev, ...response]);
      setTotal(response.totalResults)
      setFlightsList(response?.data?.flights);
    });
  }, [page,source,dest,date]);

  return (
    <div className="mx-auto w-full">
      <div
        className={`sticky p-0 m-0 top-0 left-0 right-0 bg-blue-500 w-screen h-fit`}
      >
        <ContentWrapper>
          <SearchSection
            journeyDetails={journeyDetails}
            dispatchJourneyDetails={dispatchJourneyDetails}
          />
        </ContentWrapper>
      </div>
      <div className=" w-full mx-auto flex gap-4 flex-col">
        {"Flight Filter"}

        <FlightsContainer flightsList={flightsList} />

        

        <Pagination className="mx-auto" total={20} onChange={(page)=>{
          setPage(page);
        }}/>

      </div>


    </div>
  );
};

export default FlightSearch;
