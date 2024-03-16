import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../components";
import fetchHotelDetails from "../../apis/fetchHotelDetails";
import { useState } from "react";
import HotelInfo from "./HotelInfo";
import GuestDetails from "./GuestDetails";
import "./style.css";
import PriceSection from "./PriceSection";

const HotelPayment = () => {
  let { hotelSearchQuery, hotelId, roomDetails } = useParams();

  // hotelSearchQuery = JSON.parse(hotelSearchQuery)
  roomDetails = roomDetails.replaceAll("+", " ");
  roomDetails = JSON.parse(roomDetails);

  let [locationQuery, checkInQuery, checkOutQuery, roomDataQuery, nightQuery] =
    hotelSearchQuery.split("&");

  locationQuery = locationQuery.replaceAll("+", " ");
  checkInQuery = JSON.parse(checkInQuery);
  checkOutQuery = JSON.parse(checkOutQuery);
  roomDataQuery = JSON.parse(roomDataQuery);

  // console.log({ roomDetails });

  const [hotelDetails, setHotelDetails] = useState(null);
  const [isloading, setIsLaoding] = useState(false);
  const [priceDetails, setPriceDetails] = useState({});
  useEffect(() => {
    window.scrollBy(0, -window.innerHeight);

    document.body.style.backgroundColor = "#e8f3ff";

    setIsLaoding(true);
    const token = localStorage.getItem("token");
    fetchHotelDetails(hotelId, token).then((res) => {
      // console.log(res);
      if (res.message === "success") {
        setIsLaoding(false);
        setHotelDetails(res?.data);
      }
    });
  }, []);

  const handlePriceDetails = (data) => {
    setPriceDetails(data);
  };

  const navigate = useNavigate();
  const handleButton = (e) => {
    e.target.classList.add("paymentButton");
    const encodedPrice = btoa(JSON.stringify(priceDetails));
    setTimeout(() => {
      navigate(`payment?${encodedPrice}`);
    }, 3000);
  };

  return (
    <main className="min-h-screen  ">
      <div className="bgSvgHotel"></div>
      <ContentWrapper>
        <h1
          className=" text-left m-8 ml-20 font-medium text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Review Your Booking
        </h1>

        <div className="w-full mx-auto md:px-12 flex flex-col gap-4 md:gap-8 md:flex-row">
          <div className="details w-full  basis-[60%]">
            <HotelInfo
              hotelDetails={hotelDetails}
              checkInQuery={checkInQuery}
              checkOutQuery={checkOutQuery}
              roomDataQuery={roomDataQuery}
              roomDetails={roomDetails}
            />

            <GuestDetails />

            <button
              className=" relative hidden md:block w-full min-h-10 rounded-lg text-lg md:text-xl text-white bg-orange-500 font-semibold px-6 py-3  overflow-hidden "
              onClick={handleButton}
            >
              PROCEED TO PAYMENT
            </button>
          </div>

          <div className="price h-fit pb-4  bg-white w-full rounded-md border-2 md:border basis-[40%]">
            <PriceSection
              roomDetails={roomDetails}
              checkInQuery={checkInQuery}
              checkOutQuery={checkOutQuery}
              roomDataQuery={roomDataQuery}
              handlePriceDetails={handlePriceDetails}
            />
            <button
              className=" relative md:hidden w-11/12 mx-4 my-3 min-h-10 rounded-lg text-lg md:text-xl text-white bg-orange-500 font-semibold px-6 py-3  overflow-hidden "
              onClick={handleButton}
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
};

export default HotelPayment;
