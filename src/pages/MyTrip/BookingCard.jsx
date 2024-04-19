import dayjs from "dayjs";
import React from "react";
import { useEffect, useState } from "react";
import { airlineData } from "../../utils/constants";

const BookingCard = ({ type }) => {
  const { booking_type, start_date, end_date, created_at, status } = type;
  const [name, setName] = useState("");
  useEffect(() => {
    (() => {
      if (booking_type === "train") {
        setName(
          `${type[booking_type].trainName} (${type[booking_type].trainNumber})`
        );
      } else if (booking_type === "flight") {
        setName(`${airlineData[type[booking_type].airline].airline_name}`);
      } else {
        setName(`${type[booking_type].name}`);
      }
    })();
  }, []);
  const current = dayjs()
  return (
    <div className={`shrink-0 min-h-fit border rounded-lg transition-all overflow-hidden ${current > dayjs(start_date) ? "border-green-300 " : " shadow-md hover:scale-[1.005] hover:shadow-xl"  }`}>
        <div
          className={` relative w-full min-h-fit h-fit  flex flex-col bg-white  rounded-lg  transition-all  gap-4 `}
        >
            { current > dayjs(start_date) && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md  text-green font-bold text-4xl bg-green-50  px-4 py-2   text-green-100 text-center w-full h-full"></div>}
          <div
            className={`min-h-6 border-b grid gap-x-2  px-4 pt-2   overflow-auto ${current > dayjs(start_date) ? "opacity-20" : ""  } ${
              booking_type == "hotel"
                ? "bg-amber-50"
                : booking_type == "flight"
                ? "bg-blue-50"
                : booking_type == "bus"
                ? "bg-cyan-50"
                : "bg-violet-50"
            }`}
          >
            <span className=" max-w-fit col-start-1 col-end-1 capitalize text-slate-400 font-medium text-sm md:text-base">
              {booking_type}
            </span>
            <span className="text-wrap font-medium text-slate-800 col-start-2 col-end-4 text-center text-sm md:text-base ">
              {name}
              <br />
              {booking_type == "flight" && (
                <span>{type[booking_type].flightID.slice(0, 5)}</span>
              )}
            </span>
            <span className="w-fit col-start-4 col-end-4 place-self-end -translate-y-1 bg-green-50 shrink-0 border-green-300 border px-2 py-0.5 m-1 rounded-full text-green-400 text-sm font-medium ">
              {current > dayjs(start_date) ?  "Completed" : status}
            </span>
          </div>
          <div className={`${current > dayjs(start_date) ? "opacity-20" : ""  }`}>
            <h1 className="mx-4 mb-2 text-gray-400 text-nowrap text-sm">
              Booked On: {dayjs(created_at).format("ddd, DD-MMM-YYYY")}
            </h1>
            {booking_type !== "hotel" ? (
              <>
                <div className="w-full flex text-center items-stretch justify-around text-sm md:text-base  ">
                  <div className="source pb-2 border rounded-lg mb-2 ">
                    <div className="bg-orange-600 rounded-t-lg p-2  font-medium text-white">
                      FROM
                    </div>
                    <div className="px-4 pt-1">{type[booking_type].source}</div>
                    <div className="px-4 pt-1 ">
                      {type[booking_type].departureTime}
                    </div>
                  </div>
                  <div className="dateOfJourney self-center">
                    <div className="max-md:hidden text-sm text-gray-400">Journey Date</div>
                    <div className="font-medium">{dayjs(start_date).format("ddd, DD-MMM-YYYY")}</div>
                  </div>
                  <div className="destination pb-2 border rounded-lg mb-2  ">
                    <div className="bg-blue-500 rounded-t-lg p-2  font-medium text-white">
                      TO
                    </div>
                    <div className="px-4 pt-1">
                      {type[booking_type].destination}
                    </div>
                    <div className="px-4 pt-1">
                      {type[booking_type].arrivalTime}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                 <div className="w-full flex text-center justify-evenly  items-stretch">
                  <div className="from pb-2 border rounded-lg mb-2 text-sm md:text-base">
                    <div className="bg-orange-600 rounded-t-lg p-2  font-medium text-white">
                      START
                    </div>
                    <div className="px-4 pt-1">
                    {dayjs(start_date).format("dddd")}
        
                    </div>
                    <div className="px-4 pt-1 text-nowrap">
                    {dayjs(start_date).format("DD-MMM-YYYY")}
                    </div>
        
                  </div>
                  <div className="location text-center self-center ">
                  <div className="max-md:hidden text-sm text-gray-400">Location</div>
                    <div className="font-medium text-wrap">{type[booking_type].location}</div>
                  </div>
                  <div className="destination pb-2 border rounded-lg mb-2 text-sm md:text-base">
                    <div className="bg-orange-600 rounded-t-lg p-2  font-medium text-white">
                      END
                    </div>
                    <div className="px-4 pt-1">
                    {dayjs(end_date).format("dddd")}
        
                    </div>
                    <div className="px-4 pt-1 text-nowrap">
                    {dayjs(end_date).format("DD-MMM-YYYY")}
                    </div>
        
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
    </div>
  );
};

export default BookingCard;
