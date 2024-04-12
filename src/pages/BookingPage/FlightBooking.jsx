import { Modal } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import confirmBooking from "../../apis/booking-post";
import { ContentWrapper, PaymentDone, PaymentLoading } from "../../components";
import CollapseWindow from "../HotelPayment/Collapser";
import CreditCard from "./CreditCard";
import UPI from "./UPI";

const FlightBooking = () => {
  const { searchQuery,flightData: data } = useParams();
  const [flightId, price] = data.split("--");



  const routeLocation = useLocation()
  let encodedPrice = routeLocation.search.slice(1);

  encodedPrice = atob(encodedPrice);

  encodedPrice = JSON.parse(encodedPrice);
  const {adult,child,flightPrice,date} = encodedPrice; 
  // console.log(encodedPrice)

  let journeyDate = dayjs(date);

  journeyDate = journeyDate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  const priceDetails = {
    finalPrice : Math.round((flightPrice * (adult+child))*1.18) ,
    discountedPrice:flightPrice * (adult+child),
    discount:0,
    taxes:  Math.round((flightPrice * (adult+child))*0.18)
  }

  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  function handlePaymentAndBooking() {
    setPaymentLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    confirmBooking(
      "flight",
      {
        flightId: flightId,
        startDate: journeyDate,
        endDate: journeyDate,
      },
      token
    )
      .then((res) => {
        
          setBookingDetails(res?.data);
          // console.log({booking:res})
          setTimeout(()=>{
            // console.log("payment");
            setPaymentLoading(false);
            setPaymentComplete(true);
          },2000)
        
      })
      .catch((err) => {
        // console.log(err);
        throw err;
      });
  }


  return (
    <div className="bg-blue-50 my-8 md:my-10 md:mx-auto md:w-9/12">
      <ContentWrapper>
        {paymentComplete && <PaymentDone  />}
        {paymentLoading &&  <PaymentLoading/> }

        <h1 className="text-2xl md:text-3xl font-medium">
          Pay{" "}
          <span className="text-orange-400">₹{priceDetails.finalPrice}</span> to
          confirm booking
        </h1>
        <div className="md:flex w-full md:flex-row-reverse gap-4  ">
          <div className="w-full FairSummay h-fit my-4 bg-white rounded-lg border px-4">
            {/* <h1 className='text-xl text-slate-600  font-medium'>Fair Summary</h1>           */}

            <div className="py-4 space-y-3 ">
              <div className=" font-medium text-lg pb-2 text-slate-800 basePrice flex justify-between gap-4 my-1 border-b-2 ">
                <div className="tag text-left text-wrap">Grand Total</div>
                <div className="value text-right md:px-4">
                  ₹{priceDetails?.finalPrice}
                </div>
              </div>
              <div className=" text-light basePrice flex justify-between gap-4 my-1">
                <div className="tag text-left text-wrap">Flight Fair</div>
                <div className="value text-right md:px-4">
                  ₹{priceDetails?.discountedPrice}
                </div>
              </div>
              <div className=" text-light base flex justify-between gap-4 my-1 ">
                <div className="tag text-left ">Taxes & Service Fees</div>
                <div className="value text-right md:px-4 ">
                  +₹{priceDetails?.taxes}
                </div>
              </div>
              <div className=" text-light base flex justify-between gap-4 my-1 text-green-500">
                <div className="tag text-left ">Discount Applied</div>
                <div className="value text-right md:px-4 ">
                  -₹{priceDetails?.discount}
                </div>
              </div>
            </div>
          </div>
          <div className="paymentSection w-full my-4 bg-white rounded-lg border p-4">
            <h1 className="text-xl mb-2 text-slate-600 font-medium">
              Choose Payment Method
            </h1>

            <CollapseWindow
              className="mb-0  "
              heading="UPI/BHIM"
              textClass="font-normal p-1"
            >
              <UPI handlePaymentAndBooking={handlePaymentAndBooking} />
            </CollapseWindow>
            <CollapseWindow
              className="mb-0 "
              heading="Credit Card/Debit Card"
              textClass="font-normal p-1"
            >
              <CreditCard handlePaymentAndBooking={handlePaymentAndBooking} finalPrice={priceDetails.finalPrice} />
            </CollapseWindow>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FlightBooking;
