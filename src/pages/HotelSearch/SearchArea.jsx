import React from "react";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import dayjs, { Dayjs } from "dayjs";
import LocationInput from "../Hotels/components/LocationInput";
import { useEffect } from "react";
import Gust_Room from "../Hotels/components/Guest_Rooms";
import { SearchButton } from "../../components";
import { useNavigate } from "react-router-dom";
const SearchArea = ({
  location,
  checkIn,
  checkOut,
  night,
  setLocation,
  setCheckOut,
  setCheckIn,
  setNight,
  setRoomData,
  roomData,
}) => {
  // console.log(location);

  const handleRoomData = (type, secondType) => {
    // console.log({type,secondType});

    if (secondType == "increase") {
      setRoomData((prev) => {
        prev.numbers[type] = prev.numbers[type] + 1;
        // console.log(prev)
        return { ...prev };
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

        return { ...prev };
      });
    }
  };

  useEffect(() => {
    setNight(checkOut.diff(checkIn, "day"));
  }, [checkIn, checkOut]);


  const navigate = useNavigate();

  function updateHotel() {

    if(location.trim().length ==0){
      errorToast("Please Enter Valid Input");
      return;
     }         

    //  console.log({checkIn,checkOut})

     let query = location.replaceAll(" ","+")+"&"+ JSON.stringify(checkIn) +"&"+ JSON.stringify(checkOut) +"&"+ JSON.stringify(roomData)+"&"+night;
    //  console.log(query);
    //  console.log("clicked");
     navigate(`/hotels/${query}`)



  }

  return (
    <div className="flex flex-col  md:w-10/12 px-4 ">
      <LocationInput
        placeholder={"City,Area, Landmark, Propery Name"}
        value={location}
        className="h-12 py-0 text-sm"
        label="Where"
        labelClass="hidden"
        setInputValue={setLocation}
      />
      <div className="flex flex-col items-center md:flex-row w-fit -mt-4   mx-auto">
        <div className="flex w-11/12 ">
          <div className="date relative h-12 ">
            {/* <label className="font-medium rounded-md px-1 text-sm text-slate-500 z-[1] bg-white absolute left-7">
              Check-in
            </label> */}
            <DatePicker
              locale={locale}
              format={"DD-MM-YYYY"}
              value={checkIn}
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
              onChange={(value) => {
                setCheckIn(value);
                setCheckOut(value.add(1, "day"));
              }}
              allowClear={false}
              className="flex-1 w-11/12 relative rounded-lg m-3 focus:outline-none md:w-fit border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-1 px-4 md:py-2 md:px-4 border-slate-200 hover:border-slate-500
                    "
            />
          </div>
          <label className="px-2 py-1 w-fit h-fit max-sm:ml-3 self-center text-nowrap rounded-full text-blue-600 text-xs font-semibold bg-blue-100">
            {night}
            {night == 1 ? " Night" : " Nights"}
          </label>
          <div className="date relative ">
            
            <DatePicker
              locale={locale}
              format={"DD-MM-YYYY"}
              value={checkOut}
              allowClear={false}
              disabledDate={(current) => {
                return current < checkIn.add(1,'day');
              }}
              onChange={(value) => {
                setCheckOut(value);
              }}
              className="flex-1 w-11/12 relative rounded-lg m-3 focus:outline-none md:w-fit border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-1 px-4 md:py-2 md:px-4 border-slate-200 hover:border-slate-500
                  "
            />
          </div>
        </div>

        <Gust_Room
          value={roomData}
          handleValue={handleRoomData}
          className="bg-white h-10  text-sm "
          classNamep="m-0 p-0"
          labelClass="hidden"
        />
        <SearchButton
          type={"Hotels"}
          handleSubmit={updateHotel}
          className="px-4 py-2 rounded-full text-sm md:text-sm font-semibold text-white bg-orange-500 text-nowrap h-10 w-fit self-center  hover:bg-orange-600 "
        />
      </div>
    </div>
  );
};

export default SearchArea;
