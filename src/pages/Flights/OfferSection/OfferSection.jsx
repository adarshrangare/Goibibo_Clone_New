import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchOffers } from "../../../apis/FetchOffers";
import { Carousel } from "../../../components";
import TabSwitcher from "../../../components/SmallComponents/Tabs/TabSwitcher";


const OfferSection = () => {
  const [offers, setOffers] = useState([]);
  const [type, setType] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("type:", type);
    fetchOffers(type).then((res) => {
      setOffers(res);
      setLoading(false);
    });
  }, [type]);

  function onTabChange(tab) {
    if (tab === "Trains") {
      tab = "rails";
    }

    setType(tab.toUpperCase());
    // console.log(type);
  }

  return (
    <section id="offerSection" className="w-full relative mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center">
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)]">
        Offers For You
      </p>

      <TabSwitcher
        onTabChange={onTabChange}
        tabs={["All", "Flights", "Hotels", "Trains", "Cabs","Holidays"]}
      />

      <Carousel offers={offers} loading={loading} />
    </section>
  );
};

export default OfferSection;
