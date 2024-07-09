import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import CollapseWindow from "./Collapser";

const GuestDetails = () => {
  const { userDetail } = useAuth();

  // console.log(userDetail);

  const [userValues, setUserValues] = useState({
    name: userDetail?.user?.name,
    email: userDetail?.user?.email,
  });

  return (
    <CollapseWindow heading={"GUEST DETAILS"} textClass="my-3">
      <div className="py-4">
        <div className="userValues flex gap-4 md:gap-6 flex-wrap">
          <div>
            <label className="text-gray-600 text-sm px-1 ">Name</label>
            <input
              className="border block bg-transparent border-gray-200 rounded-md px-2 py-1 my-1 min-w-52"
              value={userValues?.name}
              placeholder="Enter your name"
              onChange={(e) => {
                setUserValues((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            />
          </div>
          <div>
            <label className="text-gray-600  text-sm px-1">Email</label>
            <input
              className="border block bg-transparent border-gray-200 rounded-md px-2 py-1 my-1 min-w-52"
              value={userValues?.email}
              placeholder="Enter your email"
              onChange={(e) => {
                setUserValues((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          </div>
          <div className="text-sm text-slate-500 ">
            Your booking voucher will be sent to this email address
          </div>
        </div>
      </div>
    </CollapseWindow>
  );
};

export default GuestDetails;
