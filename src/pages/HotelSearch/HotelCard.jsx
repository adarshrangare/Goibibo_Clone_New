import React from "react";
import HotelCardDetail from "./HotelCardDetail";
import HotelCardImage from "./HotelCardImage";
import HotelCardPrice from "./HotelCardPrice";

const HotelCard = ({
  images,
  _id,
  name,
  rating,
  amenities,
  avgCostPerNight,
  childAndExtraBedPolicy,
  houseRules,
  rooms,
  location
}) => {


  return (
    <div className=" w-full min-h-fit h-60 md:min-h-72 flex bg-white rounded-md  transition-all border-white  hover:shadow-md border-2 hover:border-blue-600 cursor-pointer ">
      <div className="image basis-[35%] md:basis-[30%] flex flex-col justify-between h-full p-2 ">
        <HotelCardImage images={images} />
      </div>
      <div className="flex flex-col md:flex-row basis-[65%] md:basis-[70%] ">
        
        <HotelCardDetail name={name} rating={rating} location={location} amenities={amenities} houseRules={houseRules}/>

        <HotelCardPrice avgCostPerNight={avgCostPerNight} rooms={rooms}/>
        
      </div>
    </div>
  );
};

export default HotelCard;
