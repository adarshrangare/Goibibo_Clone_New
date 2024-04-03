import { Modal, Button } from "antd";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentAnimation from "../../assets/paymentDone.gif";
const PaymentDone = () => {
  const [timeLapse, setTimeLapse] = useState(10);
  const timerRef = useRef(null)
  const intervalRef = useRef(null)
  const navigate = useNavigate();

  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLapse((prev) => prev - 1);

      if (timeLapse <= 0) {
        clearInterval(intervalRef.current);
      }
    }, 1000);

    timerRef.current = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timerRef.current)
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
            navigate("/", { replace: true });
          }}
        >
          OK
        </Button>,
      ]}
      onCancel={() => {
        navigate("/", { replace: true });
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
