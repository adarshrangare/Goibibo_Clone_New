import React from "react";
import { SearchButton } from "../../../components";
import SearchForm from "./SearchForm";

const SearchSection = ({ trainProp,onSubmitForm }) => {
  // console.log("re-render SearchForm");
  return (
    <section className="md:w-10/12 relative   searchSection m-3  flex flex-col  items-center gap-5 lg:gap-8 lg:m-6  lg:mx-auto">
      <div className="flex gap-2 items-center justify-between w-full md:w-11/12 ">
        <h1
          className=" font-medium text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Train Ticket Booking
        </h1>
        <h1
          className=" font-medium flex shrink-0 items-center text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          <div className="inline-block p-2 mx-2 w-16 h-16 shrink-0 bg-white rounded-full">
            <img
              src="https://gos3.ibcdn.com/irctcWithTxt-1668596751.svg"
              alt="irctc logo"
              className="w-full h-full "
            />
          </div>
          IRCTC Authorized Partner
        </h1>
      </div>

      <SearchForm trainProp={trainProp} onSubmitForm ={onSubmitForm} />
    </section>
  );
};

export default SearchSection;
