import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiBus, BiBusSchool, BiLoader, BiSolidBlanket } from "react-icons/bi";
import { FaWifi, FaChargingStation, FaSadTear } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { GiFrenchFries } from "react-icons/gi";
import { RiSteering2Fill } from "react-icons/ri";
import {
  TbAirConditioning,
  TbAirConditioningDisabled,
  TbBus,
} from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { OpenSeat } from "../../../assets/svgs";


const BusCard = ({
  _id,
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
  departureDate,
}) => {
  const [showSelectSeat, setShowSelectSeat] = useState(false);
  const [count, setCount] = useState(0);
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
    // console.log({ start, end });
    const [startH, startMin] = start.split(":");
    const [endH, endMin] = end.split(":");

    let startDate = new Date(0, 0, 0, startH, startMin, 0);

    let endDate = new Date(0, 0, 0, endH, endMin, 0);
    if (endDate < startDate) {
      endDate = new Date(0, 0, 1, endH, endMin, 0);
    }

    let diff = endDate - startDate;
    diff = Math.floor(diff / 1000 / 60 / 60);
    // console.log(diff);
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

  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleCount = (type) => {
    if (type == "add") {
      if (count == 48) {
        return;
      } else {
        setCount((prev) => prev + 1);
      }
    } else if (type == "remove") {
      if (count == 0) {
        return;
      } else {
        setCount((prev) => prev - 1);
      }
    }
  };

  const totalFare = (count > 0 ? count : 1) * fare;
  const navigate = useNavigate();
  const handleProceedPayment = (fare) => {
      
      navigate(`/bus/booking`, {
        state: { busId: _id, fare, departureDate },
      });
    
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
          <TbBus className="absolute left-full top-1" />
        </div>
        <div className="departure flex flex-col md:flex-row items-center md:gap-2">
          <span className="font-medium">{calculateTime(arrivalTime)}</span>
          <span className="">{destination.split(" ")[0].replace(",", "")}</span>
        </div>
      </div>

      <div className="thirdRowCoaches w-full  justify-between  items-center flex gap-8  mt-4 text-sm md:px-4 ">
        <h1 className="bg-lime-200 shrink-0 text-lime-600 px-2 py-1 rounded-full md:font-medium  text-xs ">
          Seats Left : <span>{seats}</span>{" "}
        </h1>
        <h1 className="price text-sm flex items-center gap-1 text-gray-400">
          Price:{" "}
          <span className="text-base md:text-xl font-semibold text-slate-800">
            {" "}
            ₹{fare}{" "}
          </span>
        </h1>
        <button
          onClick={() => {
            setShowSelectSeat((prev) => !prev);
          }}
          className="px-4 py-2 w-32 md:px-6 md:py-3 md:w-40 bg-orange-600 transition-all hover:bg-orange-700 active:bg-orange-700 text-white rounded-full text-base font-semibold text-nowrap "
        >
          {showSelectSeat ? "Hide Seats" : "Select Seats"}
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
          <span className="text-slate-700 space-x-1"><CloseCircleOutlined/> <span>Not included</span></span>
        )}
      </div>

      {
        <div
          className={`fifthRow selectSeats w-full transition-transform origin-top ${
            showSelectSeat ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div className="w-full gap-4 flex p-4 max-md:flex-col ">
            <div className="departure max-md:w-full mx-auto border rounded-md">
              <div className="px-4 py-2 rounded-t-md bg-blue-600 text-center font-medium text-white md:text-lg">
                Boarding Point
              </div>
              <div className="time m-3 text-lg md:text-xl font-medium leading-3 ">
                {departureTime}
              </div>
              <div className="source m-3 text-sm md:text-base leading-3">
                {source}
              </div>
            </div>
            <div className="arrival max-md:w-full mx-auto border rounded-md ">
              <div className="px-4 py-2 rounded-t-md bg-blue-600 text-center font-medium text-white md:text-lg">
                Dropping Point
              </div>
              <div className="time m-3 text-lg md:text-xl font-medium leading-3">
                {arrivalTime}
              </div>
              <div className="source m-3 text-sm md:text-base leading-3">
                {destination}
              </div>
            </div>
            <div className="seatSelector w-full min-h-fit max-h-full border">
              <h1 className="text-center p-2 text-lg h-[20%] font-semibold text-slate-800 ">
                Select Your Seat
              </h1>

              <div className="bus w-[94%] border h-[160px] m-4 flex justify-between overflow-x-auto">
                <div className="engine w-6 h-full bg-slate-200 relative max-md:hidden">
                  <RiSteering2Fill className="absolute -rotate-90 top-4 left-1 text-slate-700 " />
                </div>

                <div
                  className={
                    "seating p-4 relative flex flex-col justify-between " + _id
                  }
                >
                  <div className="leftSeats flex gap-2 ">
                    {tempArr.map((item) => (
                      <div key={item} className="space-y-2">
                        <OpenSeat count={count} handleCount={handleCount} />{" "}
                        <OpenSeat count={count} handleCount={handleCount} />{" "}
                      </div>
                    ))}
                  </div>

                  <div className="rightSeats  flex gap-2 ">
                    {tempArr.map((item) => (
                      <div key={item} className="space-y-2">
                        <OpenSeat count={count} handleCount={handleCount} />{" "}
                        <OpenSeat count={count} handleCount={handleCount} />{" "}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full select-none">
            <h1 className="text-right mr-5 text-slate-800">
              Total Fare :{" "}
              <span className="font-semibold text-lg"> ₹{totalFare} </span>{" "}
            </h1>
          </div>

          <div className="flex w-full justify-end my-2 select-none ">
            <button
              onClick={() => {
                handleProceedPayment(totalFare);
              }}
              className="bg-blue-500 px-6 py-2 mr-4 font-medium text-white text-lg rounded-full active:bg-blue-700 hover:bg-blue-700 hover:text-slate-100 active:text-slate-100  transition-all"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default BusCard;
