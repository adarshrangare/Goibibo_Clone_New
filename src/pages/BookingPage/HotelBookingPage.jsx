import { Collapse } from 'antd';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';
import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ContentWrapper } from "../../components";
import CollapseWindow from '../HotelPayment/Collapser';
import CreditCard from './CreditCard';
import UPI from './UPI';

const HotelBookingPage = () => {
  let { hotelSearchQuery, hotelId, roomDetails} = useParams();

  const encryptedPrice = useLocation().search;
  
  let priceDetails = encryptedPrice.slice(1);
  priceDetails = atob(priceDetails);
  priceDetails = JSON.parse(priceDetails)
  console.log(priceDetails)

  // hotelSearchQuery = JSON.parse(hotelSearchQuery)
  roomDetails = roomDetails.replaceAll("+", " ");
  roomDetails = JSON.parse(roomDetails);

  let [locationQuery, checkInQuery, checkOutQuery, roomDataQuery, nightQuery] =
    hotelSearchQuery.split("&");

  locationQuery = locationQuery.replaceAll("+", " ");
  checkInQuery = JSON.parse(checkInQuery);
  checkOutQuery = JSON.parse(checkOutQuery);
  roomDataQuery = JSON.parse(roomDataQuery);


  return (
    <div className='bg-blue-50 my-8 md:my-10 md:mx-auto md:w-9/12'>
      <ContentWrapper>
        <h1 className='text-2xl md:text-3xl font-medium'>Pay <span className='text-orange-400'>₹{priceDetails.finalPrice}</span> to confirm booking</h1>
        <div className='md:flex w-full md:flex-row-reverse gap-4  '>
        <div className="w-full FairSummay h-fit my-4 bg-white rounded-lg border px-4">
        {/* <h1 className='text-xl text-slate-600  font-medium'>Fair Summary</h1>           */}
        
        <div className="py-4 space-y-3 ">
          <div className=" font-medium text-lg pb-2 text-slate-800 basePrice flex justify-between gap-4 my-1 border-b-2 ">
            <div className="tag text-left text-wrap">
            Grand Total
            </div>
            <div className="value text-right md:px-4">₹{priceDetails?.finalPrice}</div>
          </div>
          <div className=" text-light basePrice flex justify-between gap-4 my-1">
            <div className="tag text-left text-wrap">
            Hotel Fair
            </div>
            <div className="value text-right md:px-4">₹{priceDetails?.discountedPrice}</div>
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
        <div className='paymentSection w-full my-4 bg-white rounded-lg border p-4'>

        <h1 className='text-xl mb-2 text-slate-600 font-medium'>Choose Payment Method</h1>          

        <CollapseWindow className="mb-0  " heading="UPI/BHIM" textClass="font-normal p-1">
          <UPI/>
        </CollapseWindow>
        <CollapseWindow className="mb-0 " heading="Credit Card/Debit Card" textClass="font-normal p-1">
          <CreditCard/>
        </CollapseWindow>

        </div>

        </div>


      </ContentWrapper>
    </div>
  )
}

export default HotelBookingPage