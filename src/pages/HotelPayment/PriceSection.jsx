import dayjs from "dayjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PriceSection = ({
  roomDetails,
  checkInQuery,
  checkOutQuery,
  roomDataQuery,
  handlePriceDetails
}) => {
  const getRoomAndDuration = (guests, checkInQuery, checkOutQuery, costObj) => {
    const night = dayjs(checkOutQuery).diff(dayjs(checkInQuery), "day");

    const total = guests.adult + guests.child;

    const rooms = total % 2 == 0 ? Math.floor(total / 2) : Math.ceil(total / 2);

    const totalBase = rooms * costObj?.baseCost * night;
    const discount = rooms * costObj?.discount * night;
    const discountedPrice = totalBase - discount;
    const taxes = rooms * costObj?.taxesAndFees * night;
    const finalPrice = discountedPrice + taxes;


    const data = {
      night,
      rooms,
      totalBase,
      discount,
      discountedPrice,
      taxes,
      finalPrice,
    };

    

    return data;
  };

  const [info, setInfo] = useState(
    getRoomAndDuration(
      roomDataQuery.numbers,
      checkInQuery,
      checkOutQuery,
      roomDetails?.costDetails
    )
  );

      useEffect(()=>{
        handlePriceDetails(getRoomAndDuration(
          roomDataQuery.numbers,
          checkInQuery,
          checkOutQuery,
          roomDetails?.costDetails
        ));
      },[])

  return (
    <div>
      <h1 className="heading rounded-t-md font-medium p-2 md:py-4 md:px-6 px-4 text-xl md:text-2xl border-b bg-blue-50 ">
        Price Summary
      </h1>

      <div className="pricing my-4 mx-6 md:mx-8  ">
        <div className="border-b-2 pb-4 space-y-3">
          <div className=" text-light basePrice flex justify-between gap-4 my-1">
            <div className="tag text-left text-wrap">
              {`Base Price 
              (${info.rooms} ${info.rooms > 1 ? " rooms" : " room"} x ${
                info.night
              } ${info.night > 1 ? " nights" : " night"} )`}
            </div>
            <div className="value text-right md:px-4">₹{info.totalBase}</div>
          </div>
          <div className=" text-light base flex justify-between gap-4 my-1 ">
            <div className="tag text-left ">Total Discount</div>
            <div className="value text-right md:px-4 text-green-600">
              -₹{info.discount}
            </div>
          </div>
        </div>

        <div className="border-b-2 py-4 space-y-3">
          <div className=" text-light basePrice flex justify-between gap-4 my-1">
            <div className="tag text-left text-wrap">
            Price after Discount
            </div>
            <div className="value text-right md:px-4">₹{info?.discountedPrice}</div>
          </div>
          <div className=" text-light base flex justify-between gap-4 my-1 ">
            <div className="tag text-left ">Taxes & Service Fees</div>
            <div className="value text-right md:px-4 ">
              +₹{info?.taxes}
            </div>
          </div>
        </div>
        
        <div className="font-semibold text-lg totalPrice flex justify-between gap-4 mt-4 ">
            <div className="tag text-left ">Total Amount to be paid</div>
            <div className="value text-right md:px-4 ">
              ₹{info?.finalPrice}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
