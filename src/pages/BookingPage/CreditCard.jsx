import { CalendarFilled, CreditCardFilled } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { useState } from "react";

const CreditCard = () => {
  const [cardDetails, setCardDetails] = useState({
    number: null,
    expiry: "",
    cvv: null,
    name: "",
  });

  const regex = {
    cardNumber: /^[0-9]{16}$/,
    expiry :  /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
    cvv : /^[0-9]{3,4}$/
  }
  

  return (
    <div className="my-4 py-2">
        <h1 className="mb-4 text-slate-500">Enter Credit/Debit Card Details</h1>
      <div className="space-y-2">
        <Input
          size="small"
          placeholder="Enter VPA/UPI Address"
          className="h-fit p-2 "
          value={cardDetails.number}
          maxLength= {16}
          onChange={(e) => {
            setCardDetails((prev) => {
              return { ...prev, number: e.target.value };
            });
          }}
          prefix={<CreditCardFilled className="px-1 text-slate-500" />}
        />
        <div className="flex gap-2 ">
          <Input
            size="small"
            placeholder="MM/YYYY"
            className="h-fit p-2 "
            maxLength={7}
            value={cardDetails.expiry}
            onChange={(e) => {
              setCardDetails((prev) => {
                return { ...prev, expiry: e.target.value.slice(0, 7) };
              });
            }}
            prefix={<CalendarFilled className="px-1 text-slate-500" />}
          />
          <Input.Password
            size="small"
            placeholder="CVV/CVC2"
            className="h-fit p-2"
            value={cardDetails.cvv}
            onChange={(e) => {
              setCardDetails(prev=>{
                
                return  {...prev, cvv: e.target.value.slice(0,4)};
              })
            }}
          />
        </div>
        <Input
          size="small"
          placeholder="Enter Card Holder Name"
          className="h-fit p-2 "
          value={cardDetails.name}
          onChange={(e) => {
            setVpaAddress(e.target.value);
          }}
        />
      </div>
      <button className="px-6 py-3 my-4 text-nowrap text-white bg-orange-600 rounded-md active:bg-orange-700 active:text-slate-50 transition-all ">
        Pay ₹{"1201"} Securly
      </button>
    </div>
  );
};

export default CreditCard;
