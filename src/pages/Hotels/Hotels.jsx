import React from "react";
import SearchSection from "./sections/SearchSection";
import "./style.css";
import { Carousel, ContentWrapper } from "../../components";
import OfferCard from "../../components/OfferCard/OfferCard";
import OfferSection from "../Flights/OfferSection/OfferSection";
import HotelOfferCard from "./components/HotelOfferCard";

const Hotels = () => {
  return (
    <main>
      <div className="bgSvgHotel"></div>
      <ContentWrapper>
        <h1
          className=" text-left m-8 ml-20 font-medium text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Book Hotels and Homestays
        </h1>
        <div className="w-11/12 flex flex-col gap-6 md:flex-row mx-auto  ">
          <SearchSection />

          <HotelOfferCard />
        </div>

        <div className="mt-10 md:mt-20 ">
          <OfferSection />
        </div>
      </ContentWrapper>
    </main>
  );
};

export default Hotels;
