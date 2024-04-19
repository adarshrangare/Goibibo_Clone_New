import React from "react";
import { Carousel } from "antd";
import {  useNavigate } from "react-router-dom";
import { MyImageComponent } from "../../components";

const roomImage = {
  Single: {
    image1:
      "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1634208006171-6713e0c9a25e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Double: {
    image1:
      "https://images.unsplash.com/photo-1530334580314-1e7a340426a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Deluxe: {
    image1:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1505692433770-36f19f51681d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Suite: {
    image1:
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

const RoomCard = ({ room, images }) => {
  const discountRate = (room?.costDetails?.taxesAndFees * room.roomNumber) % 89;

  const navigate = useNavigate();

  function handleSelect(){
    let query = JSON.stringify(room).replaceAll(" ","+");
    navigate(query);
  }
  
 

  return (
    <div className="RoomContainer bg-white border shadow-lg rounded-lg w-full p-2 my-4 flex flex-col md:flex-row md:w-9/12 mx-auto overflow-x-hidden">
      <div className="upperSection md:basis-[40%] md:border-r md:px-2">
        <h1 className="title relative font-semibold pb-3 text-slate-800 before:content[''] before:w-2.5 before:h-[80%] before:-left-5 before:rounded-3xl before:bg-orange-600 before:absolute  ">
          {room?.roomType === "Single" || room?.roomType === "Double"
            ? "Standard"
            : "Exclusive"}{" "}
          {room?.roomType} Room
        </h1>

        <div className="imageContainer flex max-w-full px-1 gap-0.5">
          {/* <img
            src={roomImage[room?.roomType].image1}
            alt="hotel"
            width={600}
            height={400}
            className="w-1/2 rounded-lg "
          /> */}
          <MyImageComponent
          src={roomImage[room?.roomType].image1}
          alt="hotel"
          width={600}
          height={400}
          className="w-1/2 rounded-lg "
          />
          <MyImageComponent
          src={roomImage[room?.roomType].image2}
          alt="hotel"
          width={600}
          height={400}
          className="w-1/2 rounded-lg "
          />
          {/* <img
            src={roomImage[room?.roomType].image2}
            alt="hotel"
            width={600}
            height={400}
            className="w-1/2 rounded-lg "
          /> */}
        </div>

        <div className="flex m-4 w-full justify-start gap-10">
          <ul className=" ">
            <li className="">
              {" "}
              <img
                className="inline-block mb-1"
                src="https://gos3.ibcdn.com/roomSizeBlack-1678093548.png"
                width="18px"
              />{" "}
              <span className="text-sm text-slate-700 pl-1  inline-block">
                {room.roomSize} sq.ft
              </span>{" "}
            </li>
            <li className="">
              {" "}
              <img
                className="inline-block mb-1"
                src="https://gos3.ibcdn.com/paxBlackIcon-1678093500.png"
                width="18px"
              />{" "}
              <span className="text-sm text-slate-700 pl-1  inline-block">
                Max 2 Guests
              </span>{" "}
            </li>
          </ul>
          <ul className="">
            <li className="">
              {" "}
              <img
                className="inline-block mb-1"
                src="https://gos3.ibcdn.com/bedBlackIcon-1678093474.png"
                width="18px"
              />{" "}
              <span className="text-sm text-slate-700 pl-1  inline-block">
                {room.bedDetail}
              </span>{" "}
            </li>
            <li className="">
              {" "}
              <img
                className="inline-block mb-1"
                src="https://gos3.ibcdn.com/roomViewIcon-1678093525.png"
                width="18px"
              />{" "}
              <span className="text-sm text-slate-700 pl-1  inline-block">
                City View
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="lowerSection flex w-full md:px-8">
        <div className="text-xs w-1/2 ">
          <div className="font-medium text-sm mb-2">
            1. Room Only | Free Cancellation
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#008a93"
              width="2.5rem"
              height="2.5rem"
              className="inline-block"
            >
              <path
                fillRule="evenodd"
                d="M16.97 11.867a5.01 5.01 0 013.557 1.484A5.086 5.086 0 0122 16.933C22 19.732 19.748 22 16.97 22c-2.777 0-5.029-2.268-5.029-5.067 0-2.798 2.252-5.066 5.03-5.066zm2.494 2.973a.578.578 0 00-.813.117l-2.114 2.84a.192.192 0 01-.291.021l-1.006-1.013a.578.578 0 00-.972.262.588.588 0 00.15.565L15.58 18.8c.217.22.511.343.818.344h.085c.338-.023.649-.194.85-.468l2.245-3.02a.582.582 0 00-.113-.817zM17.05 9.2c.102 0 .184.082.184.183v1.28a.186.186 0 01-.19.183h-.177a6.256 6.256 0 00-6.04 4.618.183.183 0 01-.178.136H5.838A1.833 1.833 0 014 13.771V9.383c0-.101.082-.183.184-.183zm-8.27 3.291H6.574a.55.55 0 00-.552.549.55.55 0 00.552.549h2.205a.55.55 0 00.552-.549.55.55 0 00-.552-.549zM15.397 6c1.015 0 1.838.868 1.838 1.94a.19.19 0 01-.184.193H4.184a.18.18 0 01-.13-.056A.2.2 0 014 7.939C4 6.87 4.823 6 5.838 6z"
              ></path>
            </svg>

            <div className="text-sm ml-1">
              <div className="text-[#008a93] font-semibold">
                Book @ ₹0 available
              </div>
              <div>Risk Free Booking!</div>
            </div>
          </div>
          <div className="text-slate-700 p-1">• No meals included</div>

          <div className="my-2 text-lime-600 px-1 py-0.5 rounded-md w-fit text-nowrap bg-lime-100 border border-bg-lime-400">
            {room.cancellationPolicy.split(" ").slice(0, 5).join(" ")}
          </div>
        </div>

        <div className="text-right flex flex-col items-start border-l px-3">
          <div
            className="discount relative bg-red-100 w-fit  rounded-l-md border px-2 py-0.5 text-red-500 border-red-300 text-nowrap font-semibold text-xs md:text-white md:bg-red-500 md:border-red-500

        "
          >
            {`${discountRate}% off `}
          </div>

          <div className="price text-sm py-1 text-slate-500 line-through">
            {`₹${Math.round(
              room.costDetails.baseCost * (1 + discountRate / 100)
            )} `}
          </div>
          <div className="DiscountePrice font-medium md:text-xl md:font-semibold ">
            {`₹${room.costDetails.baseCost} `}
          </div>
          <div className="text-xs text-slate-500">
            {" "}
            {`+₹${room.costDetails.taxesAndFees} taxes & fees`}
          </div>
          <div className="text-xs text-slate-500">
            {" "}
            <span className="font-medium">1 room</span> per night
          </div>

          <button className=" mt-2 px-4 py-2 border-2 border-orange-600 text-orange-600 bg-transparent rounded-lg font-semibold uppercase hover:bg-orange-600 hover:text-white transition-all duration-300 active:bg-orange-700 active:border-orange-700"
          onClick={()=>{
            handleSelect();
          }}>
            Select Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
