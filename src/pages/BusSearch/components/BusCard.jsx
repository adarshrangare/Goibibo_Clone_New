import dayjs from "dayjs";
import React from "react";
import { BiBus, BiBusSchool, BiSolidBlanket } from "react-icons/bi";
import { FaWifi, FaChargingStation } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiFrenchFries } from "react-icons/gi";
import {
  TbAirConditioning,
  TbAirConditioningDisabled,
  TbBus,
} from "react-icons/tb";

const BusCard = ({
  name,
  type,
  departureTime,
  arrivalTime,
  destination,
  source,
  seats,
  fare,
  amenities,
  available,
}) => {
  const calculateTime = (ogTime) => {
    let [hrs, minutes] = ogTime.split(":");

    hrs = hrs * 1;
    minutes = minutes * 1;

    return `${hrs == 12 || hrs == 0 ? 12 : hrs % 12}:${String(minutes).padStart(
      2,
      "0"
    )} ${hrs >= 12 ? "PM" : "AM"}`;
  };

  const getDuration = (start, end) => {
    console.log({ start, end });
    const [startH, startMin] = start.split(":");
    const [endH, endMin] = end.split(":");

    let startDate = new Date(0, 0, 0, startH, startMin, 0);

    let endDate = new Date(0, 0, 0, endH, endMin, 0);
    if (endDate < startDate) {
      endDate = new Date(0, 0, 1, endH, endMin, 0);
    }

    let diff = endDate - startDate;
    diff = Math.floor(diff / 1000 / 60 / 60);
    console.log(diff);
    return `${diff}hrs`;
  };

  const getIcons = (label) => {
    if (label == "WiFi") {
      return <FaWifi className="inline " />;
    } else if (label === "Charging Point") {
      return <FaChargingStation className="inline " />;
    } else if (label === "Water Bottle") {
      return <FaBottleWater className="inline " />;
    } else if (label === "Snack Box") {
      return <GiFrenchFries className="inline " />;
    } else if (label === "Blanket") {
      return <BiSolidBlanket className="inline" />;
    }
  };

  return (
    <div
      className={` w-full min-h-fit h-fit  px-2 md:px-4 py-3 flex flex-col bg-white rounded-md  transition-all border-white  hover:shadow-md border-2 hover:border-blue-600  gap-4`}
    >
      <div className="firstRowInfo  w-full flex justify-between items-center text-slate-700 ">
        <div className="name flex max-md:justify-center flex-col items-center md:flex-row font-medium md:font-semibold md:gap-2 md:truncate text-base md:text-xl text-slate-800">
          <h2>{name}</h2>
        </div>
        <div className="type mr-2 text-base font-medium flex items-center text-slate-600 bg-slate-100 px-4 py-1 rounded-full">
          {type == "AC" ? (
            <TbAirConditioning className="inline w-6 h-6 mr-2 text-slate-500" />
          ) : (
            <TbAirConditioningDisabled className="inline w-6 h-6 mr-2 text-slate-500" />
          )}{" "}
          {type}
        </div>
      </div>

      <div className="secondRowDetails w-full  flex justify-between select-none">
        <div className="arrival md:gap-2 flex flex-col md:flex-row items-center ">
          <span className="font-medium">{calculateTime(departureTime)}</span>
          <span>{source.split(" ")[0].replace(",", "")}</span>
        </div>
        <div className="duration text-slate-400 relative ">
          <TbBus className="absolute right-full top-1" />
          {/* <span className="inline-block h-2 w-2 bg-slate-400 rounded-full"></span> */}
          <span className="line-through text-sm">----</span>
          <span className="hidden line-through md:inline text-sm">-----</span>
          {getDuration(departureTime, arrivalTime)}
          <span className="line-through text-sm">----</span>
          <span className="hidden line-through md:inline text-sm">-----</span>
          {/* <span className="inline-block h-2 w-2 bg-slate-400 rounded-full"></span> */}
          <TbBus className="absolute left-full bottom-1" />
        </div>
        <div className="departure flex flex-col md:flex-row items-center md:gap-2">
          <span className="font-medium">{calculateTime(arrivalTime)}</span>
          <span className="">{destination.split(" ")[0].replace(",", "")}</span>
        </div>
      </div>

      <div className="thirdRowCoaches w-full justify-between  items-center flex gap-8  mt-4 text-sm md:px-4 ">
        <h1 className="bg-lime-200 text-lime-600 px-2 py-1 rounded-full md:font-medium  text-xs ">
          Seats Left : <span>{seats}</span>{" "}
        </h1>
        <h1 className="price text-sm flex items-center gap-1 text-gray-400">
          Price:{" "}
          <span className="text-base md:text-xl font-semibold text-slate-800">
            {" "}
            ₹{fare}{" "}
          </span>
        </h1>
        <button className="px-6 py-2 bg-orange-600 text-white rounded-full text-base font-semibold text-nowrap ">
          Book Bus
        </button>
      </div>

      <div className="fourthRowCoaches w-full items-center flex gap-8  mt-4 text-sm md:px-4 ">
        <h1 className="text-sm md:text-base font-medium px-3 p-1 bg-slate-100 rounded-full">
          Amenities:
        </h1>
        {amenities.length !== 0 ? (
          <div className="flex  flex-wrap space-x-2 gap-2 ">
            {amenities?.map((item) => (
              <span className="flex gap-2 text-slate-700 text-sm " key={item}>
                <span>{getIcons(item)}</span>
                <span>{item} </span>
              </span>
            ))}
          </div>
        ) : (
          "N/A"
        )}
      </div>
    </div>
  );
};

export default BusCard;
