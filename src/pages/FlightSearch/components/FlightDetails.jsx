import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchFlightDetails } from "../../../apis/fetchFlightDetails";
import {
  MdFlight,
  MdAirlineSeatReclineNormal,
  MdLuggage,
  MdCalendarMonth,
  MdAirplanemodeInactive,
  MdLocalOffer,
  MdFlightTakeoff,
} from "react-icons/md";
import { airlineData, cityData } from "../../../utils/constants";
import { GiDuffelBag } from "react-icons/gi";

const FlightDetails = ({ flightId,handleFlightPrice }) => {
  const [flightDetails, setFlightDetails] = useState({});

  useEffect(() => {
    fetchFlightDetails(flightId).then((res) => {
      // console.log(res?.data);
      setFlightDetails(res?.data);
      if(handleFlightPrice){

        // handleFlightPrice(res?.data?.ticketPrice);
      }

    });
  }, []);

  function flightName(string) {
    const flightnameArr = string?.split("-");

    console.log(flightnameArr);

    if (flightnameArr) {
      const [code, _, id] = flightnameArr;
      return code + "-" + id;
    }
    return "";
  }

  return (
    <>
      {flightDetails && (
        <div className="w-full px-4 my-4">
          <div className="font-medium text-xs bg-blue-500 mx-4 px-4 rounded-full py-2  w-fit text-white  text-center">
            Flight Information
          </div>

          <div className="flex flex-col">
            <div className="flex my-6 gap-2 justify-between h-32 m-auto border-2 py-4 px-2 item-center rounded-xl border-dashed bg-gray-50 ">
              <div className="flightname flex items-center justify-center flex-col text-xs text-slate-500 h-full ">
                <img
                  src={airlineData[flightDetails.airline]?.logo}
                  alt="airline logo"
                  className="w-6 h-6 rounded-lg "
                />
                <div className="pt-2 text-center ">
                  {airlineData[flightDetails?.airline]?.airline_name}
                </div>
                <div className="truncate text-ellipsis">
                  {flightName(flightDetails?.flightID)}
                </div>
              </div>

              <div className="flightname flex flex-col items-center justify-center h-full max-sm:flex-col max-sm:px-2 ">
                <div className="flex items-center justify-center gap-1  max-sm:flex-col max-sm:px-2 ">
                  <div className="inline-block font-medium">
                    {flightDetails?.source}
                  </div>
                  <div className="inline-block font-normal text-slate-400">
                    {flightDetails?.departureTime}
                  </div>
                </div>
                <div className="text-xs text-slate-400 w-9/12 font-normal text-center wrap max-sm:hidden ">
                  {cityData[flightDetails?.source]?.name} {", "}{" "}
                  {cityData[flightDetails?.source]?.city}
                </div>
              </div>
              <div className="h-full flex justify-center items-center text-slate-400 text-sm px-1">
                {" "}
                <span className="inline-block w-2 h-2 bg-blue-600 mt-[1px] rounded-full shrink-0"></span>{" "}
                <span className="shrink-0">---</span>
                <span className="hidden md:inline text-nowrap">-----</span>
                <span className="text-slate-800 font-medium text-xs shrink-0">
                  {" "}
                  {flightDetails?.duration +
                    ` ${flightDetails?.duration > 1 ? "hrs" : "hr"}`}{" "}
                </span>
                <span className="hidden md:inline text-nowrap ">-----</span>
                <span className="shrink-0">---</span>
                <MdFlight className="rotate-90 text-2xl text-blue-600 mt-[3px] shrink-0" />
              </div>
              <div className="flightname flex flex-col items-center justify-center h-full max-sm:flex-col max-sm:px-2 ">
                <div className="flex items-center justify-center gap-1  max-sm:flex-col max-sm:px-2 ">
                  <div className="inline-block font-medium">
                    {flightDetails?.destination}
                  </div>
                  <div className="inline-block font-normal text-slate-400">
                    {flightDetails?.arrivalTime}
                  </div>
                </div>
                <div className="text-xs text-slate-400 w-9/12 font-normal text-center wrap max-sm:hidden">
                  {cityData[flightDetails?.destination]?.name} {", "}{" "}
                  {cityData[flightDetails?.destination]?.city}
                </div>
              </div>
            </div>

            <div>
              <h1 className="mx-2 my-4 text-lg uppercase font-medium text-slate-700 underline-offset-4  ">
                {airlineData[flightDetails.airline]?.airline_name + " SAVER"}
              </h1>
              <div className="font-medium flex flex-col gap-1 md:w-1/2 text-sm mx-4 px-4 rounded-full py-2  w-fit text-slate-700 text-center">
                <div className="grid grid-cols-2 ">
                  <div className="text-slate-600 text-left ">
                    <MdAirlineSeatReclineNormal className="inline" /> Available
                    Seats:
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    {flightDetails?.availableSeats}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-600 text-left ">
                    <MdFlightTakeoff className="inline" /> Flight Running Days:{" "}
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    {flightDetails?.dayOfOperation?.join(", ")}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-600 text-left ">
                    <MdLocalOffer className="inline" /> Amenities:{" "}
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    {flightDetails?.amenities?.join(", ")}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-600 text-left ">
                    <GiDuffelBag className="inline" /> Cabbin Baggage:{" "}
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    7 KGS
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-600 text-left ">
                    <MdLuggage className="inline" /> Check-in Baggage:{" "}
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    30 KGS
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-600 text-left ">
                    <MdCalendarMonth className="inline" /> Date Change:{" "}
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    Starting from ₹1267.00 (within 8 hrs of departure)
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="text-slate-600 text-left ">
                    <MdAirplanemodeInactive className="inline" /> Flight
                    Cancellation:{" "}
                  </div>
                  <div className="text-left pl-4 text-slate-500 font-normal">
                    Starting from ₹1447.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightDetails;
