import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import CollapseWindow from "./Collapser";

const GuestDetails = () => {
  const { userDetail } = useAuth();

  // console.log(userDetail);

  const [userValues, setUserValues] = useState({
    name: userDetail?.name,
    email: userDetail?.email,
  });

  return <CollapseWindow heading={"GUEST DETAILS"} textClass="my-3">

    <div className="py-4">

      <div className="userValues flex gap-4 md:gap-6 flex-wrap">
        
        <div>
          <label className="text-gray-600 text-sm px-1 ">Name</label>
          <input disabled className="border block bg-transparent border-gray-200 rounded-md px-2 py-1 my-1 min-w-52" value={userValues?.name}/>
        </div>
        <div>
          <label className="text-gray-600  text-sm px-1">Email</label>
          <input disabled className="border block bg-transparent border-gray-200 rounded-md px-2 py-1 my-1 min-w-52" value={userValues?.email}/>
         </div>
        <div className="text-sm text-slate-500 ">
        Your booking voucher will be sent to this email address
        </div>
      </div>

    </div>

  </CollapseWindow>;
};

export default GuestDetails;
