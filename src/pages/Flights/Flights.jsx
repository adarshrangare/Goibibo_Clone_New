import React from "react";
import SearchSection from "./SearchSection/SearchSection";
import { ContentWrapper } from "../../components";
import Advertisement from "./Advertisement";
import OfferSection from "./OfferSection/OfferSection";
import { FlightPassengerProvider } from "../../context";
import SafetyGuideline from "./SafetyGuideline";

const Flights = () => {
  return (
    <FlightPassengerProvider>
      <main>
        <div className="bgSvgFlight"></div>
        <ContentWrapper>
          <SearchSection />

          <Advertisement />

          <OfferSection />

          <SafetyGuideline/>

        </ContentWrapper>
      </main>
    </FlightPassengerProvider>
  );
};

export default Flights;
