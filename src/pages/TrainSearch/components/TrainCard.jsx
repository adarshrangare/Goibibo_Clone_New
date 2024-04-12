import { LineOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { daysObj, trainPricing } from "../../../utils/constants";

const TrainCard = ({
  _id,
  trainName,
  trainNumber,
  source,
  destination,
  arrivalTime,
  departureTime,
  travelDuration,
  fare,
  trainType,
  coaches,
  daysOfOperation,
  departureDate,
}) => {
  const calculateTime = (ogTime) => {
    let [hrs, minutes] = ogTime.split(":");

    hrs = hrs * 1;
    minutes = minutes * 1;

    return `${hrs % 12}:${String(minutes).padStart(2, "0")} ${
      hrs % 12 == 0 ? "AM" : "PM"
    }`;
  };

  const getFare = (coach) => {
    const result = Math.round(trainPricing[coach] * fare);
    return result;
  };

  const navigate = useNavigate();

  const handleProceedPayment = (fare) => {
    navigate(`/trains/booking`, {
      state: { trainId: _id, fare, departureDate },
    });
  };

  return (
    <div className=" w-full min-h-fit h-fit  px-2 md:px-4 py-3 flex flex-col bg-white rounded-md  transition-all border-white  hover:shadow-md border-2 hover:border-blue-600  gap-4 ">
      <div className="firstRowInfo  w-full flex justify-between items-center text-slate-700 ">
        <div className="name flex max-md:justify-center flex-col items-center md:flex-row font-medium md:gap-2 md:truncate text-sm md:text-lg">
          <h2 className="md:mr-3">{trainNumber}</h2>
          <h2>{trainName}</h2>
          <h2>{`(${trainType})`}</h2>
        </div>
        <div className="runningDays mr-2 text-sm">
          <span className="text-slate-400">Runs On: </span>
          {daysOfOperation.length == 7 ? (
            <span className="text-slate-600 md:font-medium">Everyday</span>
          ) : (
            Object.keys(daysObj)?.map((day) => (
              <span
              key={day}
                className={`md:mx-1 mx-0.5  ${
                  daysOfOperation.includes(day)
                    ? "text-slate-600 md:font-medium"
                    : "text-slate-400"
                } `}
              >
                {daysObj[day]}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="secondRowDetails w-full  flex justify-between select-none">
        <div className="arrival md:gap-2 flex flex-col md:flex-row items-center ">
          <span className="font-medium">{calculateTime(arrivalTime)}</span>
          <span>{source.split(" ")[0]}</span>
        </div>
        <div className="duration text-slate-400 ">
          <span className="inline-block h-2 w-2 bg-slate-400 rounded-full"></span>
          <span className="line-through text-sm">----</span>
          <span className="hidden line-through md:inline text-sm">-----</span>
          {travelDuration}
          <span className="line-through text-sm">----</span>
          <span className="hidden line-through md:inline text-sm">-----</span>
          <span className="inline-block h-2 w-2 bg-slate-400 rounded-full"></span>
        </div>
        <div className="departure flex flex-col md:flex-row items-center md:gap-2">
          <span className="font-medium">{calculateTime(departureTime)}</span>
          <span className="">{destination.split(" ")[0]}</span>
        </div>
      </div>

      <div className="thirdRowCoaches max-w-3xl  flex gap-8 overflow-x-scroll mt-4 text-sm md:px-4 cursor-pointer">
        {coaches?.map(({ coachType, numberOfSeats }, index) => (
          <div
            key={index}
            className=" rounded-md shrink-0 border m-1 shadow-md mb-4 hover:scale-105 hover:shadow-lg transition-all"
            onClick={(e) => {
              handleProceedPayment(getFare(coachType));
            }}
          >
            <div className="flex justify-between items-center w-36 bg-[#f4faf4] p-2 rounded-t-md">
              <span className="text-left font-medium">{coachType}</span>
              <span className="text-right">₹ {getFare(coachType)}</span>
            </div>

            <div className="flex justify-between items-center w-36 bg-[#e9f6ea] p-2 rounded-b-md">
              <span className="text-left">AVL{numberOfSeats}</span>
              <span className="text-right text-xs text-slate-400 max-md:font-thin">
                1 min ago
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainCard;
