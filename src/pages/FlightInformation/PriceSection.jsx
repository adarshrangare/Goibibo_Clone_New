import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
const PriceSection = ({flightPrice,priceDetails}) => {

    const { searchQuery } = useParams();

  const encodedString = searchQuery ?? '' ;
  const extractedEncodedPath = encodedString.replace('air-', '');
  const decodedPath = atob(extractedEncodedPath);  
  const [location, date, counts] =  decodedPath?.split("--");
  

  let [adult, child, infant] = counts?.split("-");

  adult = parseInt(adult)
  child = parseInt(child)
  


const [finalPrice, setFinalPrice] = useState((flightPrice));
    
    // console.log({finalPrice,adult,child})

  return (
    <div>
      <h1 className="heading rounded-t-md font-medium p-2 md:py-4 md:px-6 px-4 text-xl md:text-2xl border-b bg-blue-50 ">
        Price Summary
      </h1>

      <div className="pricing my-4 mx-6 md:mx-8  ">
        <div className="border-b-2 pb-4 space-y-3">
          <div className=" text-light basePrice flex justify-between gap-4 my-1">
            <div className="tag text-left text-wrap">
              {`Base Price `}
            </div>
            <div className="value text-right md:px-4">₹{priceDetails?.discountedPrice}</div>
          </div>
          <div className=" text-light base flex justify-between gap-4 my-1 ">
            <div className="tag text-left ">Total Discount</div>
            <div className="value text-right md:px-4 text-green-600">
              -₹{priceDetails?.discount}
            </div>
          </div>
        </div>

        <div className="border-b-2 py-4 space-y-3">
          <div className=" text-light basePrice flex justify-between gap-4 my-1">
            <div className="tag text-left text-wrap">
            Price after Discount
            </div>
            <div className="value text-right md:px-4">₹{priceDetails?.discountedPrice}</div>
          </div>
          <div className=" text-light base flex justify-between gap-4 my-1 ">
            <div className="tag text-left ">Taxes & Service Fees</div>
            <div className="value text-right md:px-4 ">
              +₹{priceDetails?.taxes}
            </div>
          </div>
        </div>
        
        <div className="font-semibold text-lg totalPrice flex justify-between gap-4 mt-4 ">
            <div className="tag text-left ">Total Amount to be paid</div>
            <div className="value text-right md:px-4 ">
              ₹{priceDetails?.finalPrice }
            </div>
        </div>
      </div>
    </div>
  )
}

export default PriceSection