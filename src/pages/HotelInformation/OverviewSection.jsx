import React from "react";
import { ContentWrapper } from "../../components";
import CarouselAntD from "./Carousel";

const OverviewSection = ({ hotelDetails, roomData, roomListRef }) => {
  function getlowestPrice(rooms) {
    const newRoom = rooms.sort(
      (a, b) => a?.costDetails?.baseCost - b?.costDetails?.baseCost
    );
    return newRoom[0];
  }
  const lowestRoom = getlowestPrice(hotelDetails.rooms);

  return (
    <section className="w-full bg-white shadow-md" id="overviewSection">
      <ContentWrapper>
        <div className="top  mx-auto w-full md:w-11/12 py-4 flex flex-col md:flex-row md:items-center gap-8 ">
          <div className="overview md:w-fit flex flex-col-reverse sm:flex-col  ">
            <div className="name-location my-2 px-2 flex w-full justify-between">
              <div>
                <div className="title font-bold text-slate-800 text-2xl md:text-3xl">
                  {hotelDetails.name}
                </div>
                <div className="location text-blue-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="16"
                    margin="0 0 0 0"
                    className="inline-block"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#2276E3"
                        d="M9.333 6a.667.667 0 001.334 0V2.21a.167.167 0 01.263-.134l2.933 2.093a.334.334 0 01.137.27v1.56A.666.666 0 1015.333 6V4.095c0-.323-.156-.626-.418-.814L10.582.187a.995.995 0 00-1.163 0L5.552 2.949a.333.333 0 01-.4-.007L1.618.214A1.002 1.002 0 00.563.1 1.002 1.002 0 000 1v9.924c0 .314.149.61.4.8l4.338 3.254a1 1 0 001.18.013l2.917-2.084a.666.666 0 00-.774-1.084l-1.794 1.284a.166.166 0 01-.172.012.167.167 0 01-.092-.145V4.438c0-.108.052-.209.14-.271l2.933-2.093a.167.167 0 01.263.133L9.333 6zm-4.666 6.924c0 .063-.036.12-.092.149a.168.168 0 01-.175-.016l-2.933-2.2a.334.334 0 01-.134-.266V2.018c0-.063.036-.12.092-.15a.17.17 0 01.175.017L4.533 4.15a.334.334 0 01.134.267v8.506z"
                      ></path>
                      <path
                        fill="#FF3A5C"
                        d="M12.667 7.333a3.339 3.339 0 00-3.334 3.334c0 2.114 2.972 5.109 3.098 5.236a.335.335 0 00.472 0c.126-.127 3.097-3.122 3.097-5.236a3.337 3.337 0 00-3.333-3.334zm0 4.5a1.166 1.166 0 11-.002-2.332 1.166 1.166 0 01.002 2.332z"
                      ></path>
                    </g>
                  </svg>
                  <span>{hotelDetails?.location}</span>
                </div>
              </div>
              <div className="rating w-fit text-xl text-white font-bold px-6 flex flex-col items-center justify-center py-3 bg-[#48b41c] rounded-lg">
                <div>
                  {`${hotelDetails.rating}/`}{" "}
                  <span className="text-base -ml-1.5">5</span>{" "}
                </div>
                <div className="text-xs font-normal">
                  {Math.round(
                    hotelDetails.name.length * hotelDetails.rating * 32
                  )}{" "}
                  Ratings
                </div>
              </div>
            </div>
            <CarouselAntD images={hotelDetails.images} />
          </div>
          <div className="roomsCard">
            <div className="viewRoomCard py-2 border-2 rounded-lg flex flex-col">
              <div className="upper p-4 flex gap-4 items-end w-full ">
                <div className="left flex flex-col gap-2 w-[65%] ">
                  <div className="roomType text-lg font-semibold text-slate-800">
                    {lowestRoom.roomType} Room
                  </div>
                  <div className="guestDetails flex items-center gap-1 text-slate-600 font-medium text-sm">
                    <svg
                      viewBox="0 0 32 32"
                      width="1rem"
                      height="1rem"
                      fill="#777777"
                      className="inline-block"
                    >
                      <path d="M21.185 3.148a7.333 7.333 0 11-10.37 10.371 7.333 7.333 0 0110.37-10.371zM16 17.667c-6.992.008-12.659 5.674-12.667 12.667 0 .368.298.667.667.667h24a.667.667 0 00.667-.667C28.659 23.342 22.993 17.675 16 17.667z"></path>
                    </svg>
                    {roomData.numbers.adult + roomData.numbers.child}{" "}
                    {roomData.numbers.adult + roomData.numbers.child == 1
                      ? "Guest"
                      : "Guests"}{" "}
                    |{" "}
                    <svg
                      viewBox="0 0 32 32"
                      width="1rem"
                      height="1rem"
                      fill="#777777"
                      className="inline-block"
                    >
                      <path d="M30 15.667H2a2 2 0 00-2 2V23a1.998 1.998 0 001.5 1.933.667.667 0 01.5.644V27a1.333 1.333 0 002.666 0v-1.333c0-.368.298-.667.667-.667h21.333c.368 0 .667.298.667.667V27a1.333 1.333 0 002.666 0v-1.419a.667.667 0 01.5-.644 2 2 0 001.5-1.937v-5.333a2 2 0 00-2-2zm-26.667-2c0 .368.298.667.667.667h24a.667.667 0 00.667-.667V7a3.333 3.333 0 00-3.333-3.333H6.667A3.333 3.333 0 003.334 7zm5.334-4h2.667c1.191 0 2.292.635 2.888 1.667a.667.667 0 01-.577 1H6.357a.667.667 0 01-.578-1 3.335 3.335 0 012.888-1.667zm12 0h2.667c1.191 0 2.292.635 2.888 1.667a.667.667 0 01-.577 1h-7.288a.667.667 0 01-.578-1 3.335 3.335 0 012.888-1.667z"></path>
                    </svg>{" "}
                    {roomData.numbers.room}{" "}
                    {roomData.numbers.room == 1 ? "Room" : "Rooms"}
                  </div>
                  <div className="cancellation w-10/12 flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      height="1rem"
                      width="1rem"
                      fill="#77ca7e"
                      margin=""
                      className="inline-block"
                    >
                      <path d="M29.333 5.033a2.052 2.052 0 00-1.187-1.875A29.52 29.52 0 0015.999.666 29.52 29.52 0 003.852 3.158a2.05 2.05 0 00-1.187 1.875v10.183a16.38 16.38 0 0010.437 15.291l1.423.552a4.082 4.082 0 002.947 0l1.423-.552a16.38 16.38 0 0010.437-15.291zm-4.656 5.952L16.63 21.961a1.667 1.667 0 01-1.216.676h-.133c-.442 0-.866-.176-1.179-.489l-6.103-6.1a1.667 1.667 0 012.358-2.356l4.455 4.456a.333.333 0 00.505-.039l6.667-9.095a1.667 1.667 0 012.716 1.932l-.028.038z"></path>
                    </svg>{" "}
                    <span className="text-[#77ca7e] leading-0 text-sm px-1">
                      Free Cancellation before 24hrs
                    </span>
                  </div>
                </div>
                <div className="right flex flex-col  items-end text-right">
                  <div className="Price font-medium md:text-xl md:font-semibold ">
                    {`₹${lowestRoom.costDetails.baseCost} `}
                  </div>
                  <div className="text-xs text-slate-500 text-right">
                    {" "}
                    {`+₹${lowestRoom.costDetails.taxesAndFees} taxes & fees`}
                  </div>
                  <div className="text-xs text-slate-500">
                    {" "}
                    <span className="font-medium">1 room</span> per night
                  </div>
                </div>
              </div>
              <button className="w-11/12 rounded-lg mx-auto px-6 py-3 text-xl font-semibold  bg-orange-600 text-white"
              onClick={()=>{
               document.getElementById("roomSection").scrollIntoView({ behavior: 'smooth' });
              }}>
                <>
                  VIEW {hotelDetails.rooms.length} ROOM OPTIONS{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 15"
                    width="1.5rem"
                    height="1.5rem"
                    fill="#FFFFFF"
                    className="inline-block rotate-90 ml-2 "
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M-6-5h24v24H-6z"></path>
                      <path
                        fill="#ffffff"
                        fillRule="nonzero"
                        d="M6.345 14.399l-.114-.003a.864.864 0 01-.637-1.354l3.95-5.678a.288.288 0 000-.329l-3.95-5.68A.864.864 0 017.013.37l3.949 5.678c.479.692.479 1.61 0 2.302l-3.95 5.678a.864.864 0 01-.781.367zm-5.77-.288a.576.576 0 01-.472-.902l3.95-5.678a.579.579 0 000-.66L.103 1.193A.576.576 0 01.576.288h1.928c.188 0 .365.092.472.247l3.95 5.678c.411.594.411 1.38 0 1.973l-3.95 5.678a.576.576 0 01-.472.247z"
                      ></path>
                    </g>
                  </svg>{" "}
                </>
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default OverviewSection;
