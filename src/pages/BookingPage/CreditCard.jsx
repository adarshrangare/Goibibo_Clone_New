import { CalendarFilled, CreditCardFilled } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { useState } from "react";
import { errorToast } from "../../components/Toasts/toast";

const CreditCard = ({finalPrice}) => {
  const [cardDetails, setCardDetails] = useState({
    number: null,
    expiry: "",
    cvv: null,
    name: "",
  });

  const regex = {
    cardNumber: /^[0-9]{16}$/,
    expiry: /^(0[1-9]|1[0-2])\/?([0-9]{4})$/,
    cvv: /^[0-9]{3,4}$/,
  };

  const handleCard = () => {
    if (!cardDetails.number) {
      errorToast("Enter Card Number");
      return;
    }
    if (!cardDetails.expiry) {
      errorToast("Enter Expiry date");
      return;
    }
    if (!cardDetails.cvv) {
      errorToast("Enter CVV Number");
      return;
    }
    if (!cardDetails.name) {
      errorToast("Enter Card Holder Name");
      return;
    }

    if (
      !regex.cardNumber.test(cardDetails.number.replaceAll(" ", "")) ||
      !regex.expiry.test(cardDetails.expiry) ||
      !regex.cvv.test(cardDetails.cvv)
    ) {
      errorToast("Enter Valid Card Details");
      return;
    }

    setTimeout(() => {
      // console.log("setTimeout");
      setCardDetails((prev) => {
        return {
          number: null,
          expiry: "",
          cvv: null,
          name: "",
        };
      });
    }, 1000);
  };

  return (
    <div className="my-4 py-2">
      <h1 className="mb-4 text-slate-500">Enter Credit/Debit Card Details</h1>
      <div className="space-y-2">
        <Input
          size="small"
          placeholder="Enter Card Number"
          className="h-fit p-2 "
          value={cardDetails.number}
          allowClear={true}
          maxLength={19}
          onChange={(e) => {
            setCardDetails((prev) => {
              return { ...prev, number: e.target.value };
            });
            if (
              cardDetails.number.length == 4 ||
              cardDetails.number.length == 9 ||
              cardDetails.number.length == 14
            ) {
              setCardDetails((prev) => {
                return { ...prev, number: cardDetails.number + " " };
              });
            }
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
            allowClear={true}
            onChange={(e) => {
              if (e.target.value.length == 2) {
                e.target.value += "/";
              }

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
              setCardDetails((prev) => {
                return { ...prev, cvv: e.target.value.slice(0, 4) };
              });
            }}
          />
        </div>
        <Input
          size="small"
          placeholder="Enter Card Holder Name"
          className="h-fit p-2 "
          value={cardDetails.name}
          onChange={(e) => {
            setCardDetails((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
      </div>
      <button
        className="px-6 py-3 my-4 text-nowrap text-white bg-blue-600 rounded-md active:bg-blue-700 active:text-slate-50 transition-all "
        onClick={handleCard}
      >
        Pay ₹{finalPrice} Securly
      </button>
    </div>
  );
};

export default CreditCard;
