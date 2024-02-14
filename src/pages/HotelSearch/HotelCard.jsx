import React from "react";
import HotelCardImage from "./HotelCardImage";

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
    <div className="p-2 w-full min-h-60 md:min-h-72 flex bg-white rounded-md  transition-all border-white  hover:shadow-md border-2 hover:border-blue-600 ">
      <div className="image basis-[35%] md:basis-[30%] flex flex-col justify-between h-full p-1 ">
        <HotelCardImage images={images} />
      </div>
      <div className="flex flex-col basis-[65%] md:basis-[70%] bg-green-200">
        <div className="details">{name}</div>
        <div className="price">Price</div>
      </div>
    </div>
  );
};

export default HotelCard;
