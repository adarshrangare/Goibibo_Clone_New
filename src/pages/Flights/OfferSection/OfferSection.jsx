import React from "react";
import TabSwitcher from "../../../components/SmallComponents/Tabs/TabSwitcher";
import Flights from "../Flights";

const OfferSection = () => {
  return (
    <section className="w-full relative mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center">
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)]">Offers For You</p>

      <TabSwitcher tabs={["All","Flights", "Hotels", "Bus", "Trains", "Cabs" ]} />

        


    </section>
  );
};

export default OfferSection;
