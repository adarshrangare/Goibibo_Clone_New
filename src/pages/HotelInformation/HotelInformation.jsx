import { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchHotelDetails from "../../apis/fetchHotelDetails";
import { ContentWrapper } from "../../components";
import Amenties from "./Amenties";

import OverviewSection from "./OverviewSection";
import PropertyPolicies from "./PropertyPolicies";
import RoomList from "./RoomList";
const HotelInformation = () => {
  const { hotelId, hotelSearchQuery } = useParams();

  const [hotelDetails, setHotelDetails] = useState(null);
  const [isloading, setIsLaoding] = useState(false);

  let [locationQuery, checkInQuery, checkOutQuery, roomDataQuery, nightQuery] =
    hotelSearchQuery.split("&");

  locationQuery = locationQuery.replaceAll("+", " ");
  checkInQuery = JSON.parse(checkInQuery);
  checkOutQuery = JSON.parse(checkOutQuery);
  roomDataQuery = JSON.parse(roomDataQuery);

  useEffect(() => {
    document.body.style.backgroundColor = "#e8f3ff";

    setIsLaoding(true);
    const token = localStorage.getItem("token");
    // console.log({HIToken : token})
    fetchHotelDetails(hotelId, token).then((res) => {
      // console.log(res);
      if (res.message === "success") {
        setIsLaoding(false);
        setHotelDetails(res?.data);
      }
    });
  }, []);

  return (
    <div className="hotelDetails scroll-smooth ">
      {hotelDetails && (
        <>
          <div className="tabs w-full mx-auto  md:8/12 sticky top-16 h-12 bg-white z-10  justify-center  ">
            <ContentWrapper>
              <div className="flex justify-between mx-auto md:w-8/12 px-2 h-10 items-center text-center">
                <div className="h-full w-full text-center py-2 hover:shadow-even">
                  <a href="#overviewSection">Overview</a>
                </div>
                <div className="h-full w-full text-center py-2 hover:shadow-even">
                  <a href="#amentiesSection">Amenties</a>
                </div>
                <div className="h-full w-full text-center py-2 hover:shadow-even">
                  <a href="#roomSection">Rooms</a>
                </div>
                <div className="h-full w-full text-center py-2 hover:shadow-even">
                  <a href="#policiesSection">Policies</a>
                </div>
              </div>
            </ContentWrapper>{" "}
          </div>

          <OverviewSection
            
            hotelDetails={hotelDetails}
            roomData={roomDataQuery}
          />

          <Amenties {...hotelDetails} />

          <RoomList {...hotelDetails} />

          <PropertyPolicies {...hotelDetails} />
        </>
      )}
    </div>
  );
};

export default HotelInformation;
