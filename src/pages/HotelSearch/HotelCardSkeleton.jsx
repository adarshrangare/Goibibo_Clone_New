import React from "react";
import { Divider, Skeleton, Space } from "antd";

const HotelCardSkeleton = () => {
  return (
    <>
      <div className="min-h-72 bg-gray-300 animate-pulse border w-full p-2 rounded-md flex text-2xl text-gray-500 font-medium text-center">Loading....</div>
      <div className="min-h-72 bg-gray-300 animate-pulse border w-full p-2 rounded-md flex text-2xl text-gray-500 font-medium text-center">Loading....</div>
      <div className="min-h-72 bg-gray-300 animate-pulse border w-full p-2 rounded-md flex text-2xl text-gray-500 font-medium text-center">Loading....</div>
      <div className="min-h-72 bg-gray-300 animate-pulse border w-full p-2 rounded-md flex text-2xl text-gray-500 font-medium text-center">Loading....</div>
      <div className="min-h-72 bg-gray-300 animate-pulse border w-full p-2 rounded-md flex text-2xl text-gray-500 font-medium text-center">Loading....</div>
    </>
  );
};

export default HotelCardSkeleton;
