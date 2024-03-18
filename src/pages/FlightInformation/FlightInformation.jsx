import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../components";
import FlightDetails from "../FlightSearch/components/FlightDetails";
import PriceSection from "./PriceSection";

const FlightInformation = () => {
  const { searchQuery,flightData: data } = useParams();
  // console.log(flightData)
  const [flightData, price] = data.split("--");
  
  const [flightPrice, setFlightPrice] = useState(parseInt(price));

//   console.log({flightPrice});

const encodedString = searchQuery ?? '' ;
const extractedEncodedPath = encodedString.replace('air-', '');
const decodedPath = atob(extractedEncodedPath);  
const [location, date, counts] =  decodedPath?.split("--");


let [adult, child, infant] = counts?.split("-");

adult = parseInt(adult);
child = parseInt(child);

const details ={
    adult,child,flightPrice,date
}

const priceDetails = {
  finalPrice : Math.round((flightPrice * (adult+child))*1.18) ,
  discountedPrice:flightPrice * (adult+child),
  discount:0,
  taxes:  Math.round((flightPrice * (adult+child))*0.18)
}

const navigate = useNavigate();
  const handleButton = (e) => {
    e.target.classList.add("paymentButton");
    const encodedPrice = btoa(JSON.stringify(details));
    setTimeout(() => {
      navigate(`payment?${encodedPrice}`);
    }, 3000);
  };

  return (
    <div className=" ">
      <div className="absolute w-screen md:h-[30vh] shadow-xl h-[30vh] bg-blue-500  -z-[1]"></div>
      <ContentWrapper>
        <div className="p-4 w-full">
          <h1
            className=" text-left m-4 md:m-8 ml-20 font-medium text-white leading-7 text-[18px] md:text-[22px] "
            style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
          >
            Review your Booking
          </h1>

          <div className="w-full mx-auto md:px-12 flex flex-col gap-4 md:gap-8 md:flex-row">
            <div className="details w-full  basis-[60%]">
              <div className="bg-white py-2 rounded-lg border">
                <FlightDetails flightId={flightData} />
              </div>

              {/* <GuestDetails /> */}

              <button
                className=" relative hidden md:block w-full min-h-10 rounded-lg text-lg md:text-xl text-white bg-orange-500 font-semibold px-6 py-3  overflow-hidden "
                onClick={handleButton}
              >
                PROCEED TO PAYMENT
              </button>
            </div>

            <div className="price h-fit pb-4  bg-white w-full rounded-md border-2 md:border basis-[40%]">
              <PriceSection flightPrice={flightPrice} priceDetails = {priceDetails} />
              <button
                className=" relative md:hidden w-11/12 mx-4 my-3 min-h-10 rounded-lg text-lg md:text-xl text-white bg-orange-500 font-semibold px-6 py-3  overflow-hidden "
                onClick={handleButton}
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FlightInformation;
