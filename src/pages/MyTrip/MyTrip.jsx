import { Skeleton } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useEffect, useState } from "react";
import { fetchBookings } from "../../apis/mybookings";
import { ContentWrapper } from "../../components";
import { errorToast } from "../../components/Toasts/toast";
import ComingSoon from "../ErrorPage/ComingSoon";
import BookingCard from "./BookingCard";

const MyTrip = () => {
  const [ogBookingList, setOgBookingList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const jwtToken = JSON.parse(localStorage.getItem("token"));
    fetchBookings(jwtToken)
      .then((res) => {
        // console.log("in compo", res);
        setOgBookingList(res.data);
        if (res.data) {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
        setOgBookingList((prev) => {
          prev.sort((a, b) => dayjs(b.start_date) - dayjs(a.start_date));

          return prev;
        });
      })
      .catch((err) => {
        console.log(err);
        errorToast("Unable to connect with Server");
      });
  }, []);

  return (
    <main className=" w-11/12 mt-4 sm:w-10/12 md:w-7/12 mx-auto min-h-fit ">
      <ContentWrapper>
        <div className="absolute bg-orange-600 h-[500px] w-[500px] -top-[200px] right-1/2 rounded-full rounded-ss-md -z-10"></div>
        <div className="absolute bg-sky-600 h-[300px] w-[300px] -bottom-[200px] max-md:left-0 right-1/2 rounded-full rounded-ee-md -z-10"></div>
        <h1 className="font-semibold text-xl text-white my-2">Your Bookings</h1>

        <div className="max-h-screen px-2 md:px-4 py-3 flex flex-col bg-white bg-opacity-75 text-slate-800 rounded-md  transition-all    border-2  gap-4 overflow-y-scroll ">
          {!isLoading
            ? ogBookingList?.map((item) => (
                <BookingCard key={item._id} type={item} />
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Skeleton
                  key={item}
                  active
                  className="border bg-white shadow-lg p-4 rounded-md min-h-40"
                />
              ))}
        </div>
      </ContentWrapper>
    </main>
  );
};

export default MyTrip;
