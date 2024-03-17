import { Input } from "antd";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import qrCode from "../../assets/QRCode.png";
import { errorToast } from "../../components/Toasts/toast";
const UPI = ({ handlePaymentAndBooking }) => {
  const [vpaAddress, setVpaAddress] = useState("");

  const upiRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]{2,6})$/;

  const handleUPI = (e) => {
    e.preventDefault();
    
    
    if(!vpaAddress){
      errorToast("Enter UPI Address!");
      return ;
    }
    
    if(!upiRegex.test(vpaAddress)){
      errorToast("Please Enter valid UPI");
      return
    }

    handlePaymentAndBooking();

    setTimeout(()=>{
      setVpaAddress('');
    },1000)

  };

  return (
    <div>
      
      <div className="qrContainer my-4 ">
        <h1 className="text-center text-sm text-slate-500 my-2">
          Scan the QR Code for Payment
        </h1>
        <img
          src={qrCode}
          alt="paymentQR"
          className="mx-auto p-4 border bg-slate-50 rounded-xl"
        />
      </div>
      <h1 className="text-center font-medium ">OR</h1>
      <div className="inputArea my-4 flex gap-2 mb-6">
        <Input
          size="small"
          placeholder="Enter VPA/UPI Address"
          className="h-fit p-2"
          value={vpaAddress}
          onChange={(e) => {
            setVpaAddress(e.target.value);
          }}
          onPressEnter={""}
        />
        <button className="px-4 py-2 text-nowrap text-white bg-blue-600 rounded-md active:bg-blue-700 active:text-slate-50 transition-all "
        onClick={handleUPI}>
          Verify & Pay
        </button>
      </div>
    </div>
  );
};

export default UPI;
