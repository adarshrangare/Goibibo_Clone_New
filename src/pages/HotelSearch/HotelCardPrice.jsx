import React from "react";

const HotelCardPrice = ({ rooms,avgCostPerNight }) => {
  function getlowestPrice(rooms) {
    const newRoom = rooms.sort(
      (a, b) => a?.costDetails?.baseCost - b?.costDetails?.baseCost
    );
    return newRoom[0];
  }
  const lowestRoom = getlowestPrice(rooms);
  const discountRate =
    (lowestRoom?.costDetails?.taxesAndFees * lowestRoom.roomNumber) % 89;

  return (
    <div className="price basis-[40%] p-2 flex justify-between md:flex-col ">
      <div className="text-xs w-1/2 md:w-full ">
        <div className="text-lime-600 px-1 py-0.5 rounded-md w-fit my-1 text-nowrap bg-lime-100 border border-bg-lime-400">
          {lowestRoom.cancellationPolicy.split(" ").slice(0, 5).join(" ")}
        </div>
        <div className="text-blue-600 p-1">
          Breakfast available at extra charges
        </div>
        <div className="avgCost px-1 py-0.5 font-medium md:text-xl md:font-semibold">
          {`₹${Math.round(avgCostPerNight)} `}
        <span className="text-xs font-normal px-1 py-0.5 text-slate-500"> {`Avg Cost Per Night`}</span>
        </div>
      </div>

      <div className="text-right flex flex-col items-end">
        <div className="discount relative bg-red-100 w-fit  rounded-l-md border px-2 py-0.5 text-red-500 border-red-300 text-nowrap font-semibold text-xs md:text-white md:bg-red-500 md:border-red-500
        
        ">
          {`${discountRate}% off `}
        </div>
        <div className="price text-sm py-1 text-slate-500 line-through">
          {`₹${Math.round(
            lowestRoom.costDetails.baseCost * (1 + discountRate / 100)
          )} `}
        </div>
        <div className="DiscountePrice font-medium md:text-xl md:font-semibold ">
        <span className="text-xs text-slate-500"> {`Starting at `}</span>{`₹${lowestRoom.costDetails.baseCost} `}
        </div>
        <div className="text-xs text-slate-500"> {`+₹${lowestRoom.costDetails.taxesAndFees} taxes & fees`}</div>
        <div className="text-xs text-slate-500"> <span className="font-medium">1 room</span> per night</div>
      </div>
    </div>
  );
};

export default HotelCardPrice;
