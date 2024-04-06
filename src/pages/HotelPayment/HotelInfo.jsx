import dayjs from "dayjs";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import CheckDetails from "./CheckDetails";
import CollapseWindow from "./Collapser";


import "./style.css";
const HotelInfo = ({
  hotelDetails,
  checkInQuery,
  checkOutQuery,
  roomDataQuery,
  roomDetails
}) => {
  // console.log({
  //   checkInQuery,
  //   checkOutQuery,
  //   roomDataQuery,
  // });

  function getRooms(guests){
    
    const total = guests.adult + guests.child
    
    const rooms = total % 2 == 0 ? Math.floor(total/2) : Math.ceil(total/2) ;
    
    return `${total}${total > 1 ? ' Guests' : ' Guest' }  | ${Math.max(rooms,guests.room)}${rooms > 1 ? ' Rooms' : ' Room'   } `

  }

  function getNight(checkInQuery,checkOutQuery){
    const night = dayjs(checkOutQuery).diff(dayjs(checkInQuery), "day");

    return `${night} ${night > 1 ? ' nights' : 'night'}`
  }

  return (
    <CollapseWindow heading={"HOTEL INFO"} textClass="text-xl">
      {

        hotelDetails && <>
        <div className="hotel flex my-4 gap-4">
        <img
          src={hotelDetails?.images[0]}
          alt={hotelDetails?.name}
          width={300}
          height={300}
          className="w-32 h-32 rounded-xl md:w-48 md:h-48"
        />
        <div>
          <div className="name text-xl font-semibold my-2">
            {hotelDetails?.name}
          </div>
          <div className="address my-2 grid items-center gap-2 text-slate-600 ">
            <FaLocationDot className="inline col-span-1 text-slate-400 text-sm md:text-base " />{" "}
            <span className="col-start-2 text-sm md:text-base leading-3">
              {hotelDetails?.location}
            </span>
          </div>
          <div className="rating my-4">{hotelDetails?.rating}/5</div>
        </div>
      </div>

      <div className="info flex bg-blue-100 rounded-lg p-4 gap-4 my-4 ">
        <CheckDetails name="Check In" date={checkInQuery} time="11AM" />
        <CheckDetails name="Check Out" date={checkOutQuery} time="12PM" />
        <CheckDetails
          name="Guests"
          guest={getRooms(roomDataQuery?.numbers)}
          time={
            getNight(checkInQuery,checkOutQuery)
          }
        />
      </div>
        </>


      }
      
      
    </CollapseWindow>
  );
};

export default HotelInfo;
