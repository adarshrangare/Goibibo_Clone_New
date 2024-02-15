import { Rate } from "antd";
import React from "react";

const HotelCardDetail = ({ rating, name, amenities, location,houseRules }) => {
  // const randomUserCount = Math.round(name.length*11  * rating).toString();

  return (
    <div className="details basis-[60%] py-2 border-r  flex flex-col items-start justify-between ">
      {/* Upper Section */}
      <div className="flex flex-col items-start w-full ">
        <div className="flex items-center justify-between  w-full">
          <div className="flex">
            <Rate
              allowHalf
              value={rating}
              disabled
              className="scale-75 -ml-4 md:ml-auto md:scale-[.85]  inline-block"
            />
            <span className=" text-sm font-medium text-slate-300  border rounded-sm px-1">
              HOTEL
            </span>
          </div>
          <div className="mr-4">
            <span
              className={`text-sm mx-2 p-0.5  px-2 rounded-md font-medium text-white relative bg-lime-600 cursor-pointer before:cursor-pointer before:content-[''] before:w-[16px] before:h-[16px] before:block before:absolute before:-left-2 before:top-0 before:border-transparent before:border-t-lime-600 before:border-8 hover:after:content-['1234_Verified_Ratings'] hover:after:p-1 after:bottom-[-24.5px] after:rounded-md after:left-[0] hover:after:w-[130px] after:text-center after:h-fit hover:after:absolute  hover:after:bg-[rgba(0,0,0,0.5)] hover:after:font-thin  hover:after:text-xs `}
            >
              {rating}/5
            </span>
            {/* {randomUserCount} */}
            {/* <span className=" ">{Math.round(Math.random()*2354)}{" "} Verified Ratings</span> */}
          </div>
        </div>
        <div className="name p-2 font-medium w-10/12 text-wrap">{name}</div>
        <div className="location flex px-2 gap-1 text-sm text-blue-800">
          {" "}
          <img src="https://gos3.ibcdn.com/map-1626422501.png" alt="" />{" "}
          {location}
        </div>
      </div>

      {/* Lower Section */}
      <div className="hidden sm:flex px-2 flex-col w-full gap-2">
        <div className="amenities flex gap-2 flex-wrap w-10/12">
          {amenities.slice(0, 3).map((item) => (
            <span className="flex items-center text-sm w-fit px-2 gap-1 text-slate-600 bg-slate-100 rounded-full truncate">
              <svg
                className="w-[8px] h-[8px] md:w-[16px] md:h-[16px] inline"
                viewBox="0 0 16 16"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M-4-4h24v24H-4z"></path>
                  <path
                    fill="#898B91"
                    d="M7.68 0a7.68 7.68 0 110 15.36A7.68 7.68 0 017.68 0zm4.335 3.922l-6.233 6.702-2.454-2.26a.436.436 0 00-.622.021.452.452 0 00.022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.452.452 0 00-.011-.632.436.436 0 00-.623.011z"
                  ></path>
                </g>
              </svg>
              {item}
            </span>
          ))}

        <span className="text-xs cursor-pointer">{amenities.length > 3 ? "More..." : ""}</span>

        </div>
      
        <div className=" couple   md:p-2">

        
                {houseRules?.guestProfile?.unmarriedCouplesAllowed && <>
                    
                    <div className="flex items-center  text-orange-500 gap-2 text-sm">
                    <svg className="inline-block shrink-0 w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="1.6rem" width="1.6rem" fill="#ff6d38" class="CoupleFriendlyIcon-sc-1akp97f-0 daAofM"><path d="M23.333 4.309A4.133 4.133 0 0019.805.025a3.776 3.776 0 00-3.539 1.627.333.333 0 01-.541 0A3.772 3.772 0 0012.194.025a4.133 4.133 0 00-3.528 4.284c0 3.236 4.564 7.081 6.533 8.585.473.37 1.137.37 1.611 0 1.957-1.503 6.523-5.349 6.523-8.585zM11.155 24.507a.335.335 0 01-.044-.566 5.866 5.866 0 10-6.888 0 .334.334 0 01-.044.567A7.674 7.674 0 000 31.335c0 .368.298.667.667.667h14a.667.667 0 00.667-.667 7.675 7.675 0 00-4.179-6.827zM7.667 22.4a3.2 3.2 0 01-3.035-4.207.333.333 0 01.496-.174 7.509 7.509 0 005.337 1.073.332.332 0 01.281.081.336.336 0 01.108.267 3.2 3.2 0 01-3.188 2.96zM27.733 24.892a.667.667 0 00-.839.28l-1.611 2.8a.335.335 0 01-.579 0l-1.611-2.8a.667.667 0 00-.839-.28 7.01 7.01 0 00-4.256 6.441c0 .368.298.667.667.667h12.667a.667.667 0 00.667-.667 7.01 7.01 0 00-4.267-6.441z"></path><path d="M19.333 18.977a4.092 4.092 0 01-.933 3.136 1.333 1.333 0 101.866 1.896 5.16 5.16 0 00.557-.651.334.334 0 01.488-.054 5.654 5.654 0 007.368 0 .338.338 0 01.488.056c.168.232.354.449.557.651a1.333 1.333 0 101.875-1.897 4.088 4.088 0 01-.933-3.136 5.667 5.667 0 10-11.334 0zm2.964.036a4.565 4.565 0 001.212-.373c.481-.226.9-.564 1.221-.987a.335.335 0 01.533 0c.322.422.741.761 1.221.987.385.18.793.306 1.212.373.173.034.29.196.267.371a2.998 2.998 0 01-5.949 0 .335.335 0 01.283-.371z"></path></svg>
                    <span className="w-full h-4">Couple Friendly</span>
                    </div>
                    
                </> }
            


         </div>

      </div>
    </div>
  );
};

export default HotelCardDetail;
