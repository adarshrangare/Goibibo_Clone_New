import React from "react";
import SearchSection from "./SearchSection/SearchSection";
import { ContentWrapper } from "../../components";
import Advertisement from "./Advertisement";
import OfferSection from "./OfferSection/OfferSection";
import { FlightPassengerProvider } from "../../context";

const Flights = () => {
  return (
    <FlightPassengerProvider>
      <main>
        <ContentWrapper>
          <SearchSection />

          <Advertisement />

          <OfferSection />
        </ContentWrapper>
      </main>
    </FlightPassengerProvider>
  );
};

export default Flights;
