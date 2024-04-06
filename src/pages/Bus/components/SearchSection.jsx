import React from "react";
import SearchForm from "./SearchForm";
const SearchSection = ({ busProp, onSubmitForm }) => {
  return (
    <section className="md:w-10/12 relative   searchSection m-3  flex flex-col  items-center gap-5 lg:gap-8 lg:m-6  lg:mx-auto">
      <div className="flex gap-2 items-center justify-center w-full md:w-11/12 ">
        <h1
          className=" font-medium text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Bus Ticket Booking
        </h1>
      </div>

      <SearchForm busProp={busProp} onSubmitForm={onSubmitForm} />
    </section>
  );
};

export default SearchSection;
