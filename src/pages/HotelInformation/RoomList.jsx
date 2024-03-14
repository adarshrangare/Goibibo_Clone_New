import React from "react";
import { ContentWrapper } from "../../components";
import HotelCardDetail from "../HotelSearch/HotelCardDetail";
import HotelCardPrice from "../HotelSearch/HotelCardPrice";
import RoomCard from "./RoomCard";



const RoomList = ({ roomListRef,rooms, name, rating, location, amenities, houseRules,images }) => {
  
  
  
  return (
    <div  className="rooms mx-auto bg-transparent my-8" id="roomSection">
      <ContentWrapper>
        <div className="heading hidden md:flex flex-row md:w-9/12 mx-auto ">
          <div className="basis-[30%] bg-blue-200 h-14 border-l flex justify-center items-center"> 

                <div className="px-6 py-1.5 font-bold shadow-md text-white rounded-full bg-gradient-to-r from-blue-700 to-blue-400">{rooms?.length} Room Types  </div>

           </div>
          <div className="roomOption basis-[35%] bg-blue-200 h-14 border-l flex justify-center items-center font-semibold ">
            Room Options
          </div>
          <div className="Price basis-[35%] bg-blue-200 h-14 border-l flex justify-center items-center font-semibold  "> Price </div>
        </div>

        {rooms &&
          rooms
            .sort((a, b) => a.costDetails.baseCost - b.costDetails.baseCost)
            .map((room) => <RoomCard room = {room} images={images} key={room.roomNumber} />)}
      </ContentWrapper>
    </div>
  );
};

export default RoomList;
