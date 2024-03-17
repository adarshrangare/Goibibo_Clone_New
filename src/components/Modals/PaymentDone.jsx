import { Modal, Button } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentAnimation from "../../assets/paymentDone.gif";
const PaymentDone = () => {
  const [timeLapse, setTimeLapse] = useState(10);

  const navigate = useNavigate();

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLapse((prev) => prev - 1);

      if (timeLapse <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Modal
      title="Payment Completed"
      visible={timeLapse >= 0}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          OK
        </Button>,
      ]}
      onCancel={() => {
        navigate("/");
      }}
    >
      <img src={paymentAnimation} alt="payment" />
      <p className="text-xl">Your payment has been successfully processed.</p>
      <p className="text-xl font-medium">Thank you for booking with us!</p>
      <p className="text-sm my-4">
        You'll be redirect to homepage in {timeLapse} seconds{" "}
      </p>
    </Modal>
  );
};

export default PaymentDone;
