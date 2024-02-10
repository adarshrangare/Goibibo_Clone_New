import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Calendar, DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";

import locale from "antd/es/date-picker/locale/en_US";
import {
  ContentWrapper,
  Inputbox,
  RadioInput,
  SearchButton,
} from "../../../components";
import LocationInput from "../components/locationInput";
import { useAuth } from "../../../context/AuthProvider";

import Gust_Room from "../components/Guest_Rooms";
import { useState } from "react";
import { useEffect } from "react";

const initialRoomData = {
  numbers: {
    adult: 1,
    child: 0,
    room: 1,
  },
};

const SearchSection = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(dayjs(Date.now()));
  const [checkOut, setCheckOut] = useState(dayjs(checkIn.add(1, "day")));
  const [night, setNight] = useState(checkOut.diff(checkIn, "day"));

  const [roomData, setRoomData] = useState({
    numbers: {
      adult: 1,
      child: 0,
      room: 1,
    },
  });

  const handleRoomData = (type, secondType) => {

      // console.log({type,secondType});

    if (secondType == "increase") {
      setRoomData((prev) => {
        prev.numbers[type] = prev.numbers[type] + 1;
        // console.log(prev)
        return {...prev};

      });
    } else {
      setRoomData((prev) => {
        if (type == "adult" || type == "room") {
          if (prev[type] == 1) {
            return;
          }
        }
        if (prev[type] == 0) {
          return;
        }

        prev.numbers[type] = prev.numbers[type] - 1;

        return {...prev};
      });
    }
  };

  useEffect(() => {
    setNight(checkOut.diff(checkIn, "day"));
  }, [checkIn, checkOut]);

  return (
    <>
      <div className="relative pb-10 formContainer bg-white rounded-2xl border w-full md:w-1/2 p-4 flex flex-col gap-4 ">
        <RadioInput label={"India"} />

        <LocationInput
          label={"Where"}
          placeholder={"City,Area, Landmark, Propery Name"}
          value={location}
          setInputValue={setLocation}
        />

        <div className="flex w-full ">
          <label className="date relative flex-1">
            <div className="font-medium text-sm text-slate-500 z-[1] bg-white absolute left-7">
              Check-in
            </div>
            <DatePicker
              locale={locale}
              format={"DD-MM-YYYY"}
              value={checkIn}
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
              onChange={(value) => {
                setCheckIn(value);
              }}
              className="flex-1 w-11/12 relative rounded-lg m-3 focus:outline-none  border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
                "
            />
          </label>
          <label className="px-2 py-1 w-fit h-fit self-center rounded-full text-blue-600 text-xs font-semibold bg-blue-100">
            {night}
            {night == 1 ? " Night" : " Nights"}
          </label>
          <label className="date relative flex-1">
            <div className="font-medium text-sm text-slate-500 z-[1] bg-white absolute left-7">
              Check-out
            </div>

            <DatePicker
              locale={locale}
              format={"DD-MM-YYYY"}
              value={checkOut}
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
              onChange={(value) => {
                setCheckOut(value);
              }}
              className="flex-1 w-11/12 relative rounded-lg m-3 focus:outline-none  border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
                "
            />
          </label>
        </div>

        <Gust_Room value={roomData} handleValue={handleRoomData} />

        <SearchButton
          type={"Hotels"}
          className="px-12 py-4 rounded-full text-base md:text-lg font-semibold text-white bg-orange-500 w-fit self-center absolute bottom-[-25px] hover:bg-orange-600 "
        />
      </div>
    </>
  );
};

export default SearchSection;
