import React, { useState } from "react";
import { ContentWrapper } from "../../components";
import ComingSoon from "../ErrorPage/ComingSoon";
import dayjs from "dayjs";
import SearchSection from "./components/SearchSection";
import { useNavigate } from "react-router-dom";
import OfferCard from "../../components/OfferCard/OfferCard";
import OfferSection from "../Flights/OfferSection/OfferSection";
const Bus = () => {
  const [source, setSource] = useState("Indore, Madhya Pradesh");
  const [destination, setDestination] = useState("Nagpur, Maharashtra");
  const [departureDate, setDepartureDate] = useState(dayjs(Date.now()));

  const handleSource = (data) => {
    setSource(data);
  };

  const handleDestination = (data) => {
    setDestination(data);
  };

  const handleDepartureDate = (data) => {
    setDepartureDate(data);
  };

  const handleSwap = () => {
    let temp = source;
    setTimeout(() => {
      setSource(destination);
    }, 0);
    setTimeout(() => {
      setDestination(temp);
    }, 0);
  };

  
  const busProp = {
    departureDate,
    source,
    destination,
    handleDepartureDate,
    handleSource,
    handleDestination,
    handleSwap
  };

  const navigate = useNavigate();

  const  onSubmitForm = () => {
    // console.log("clicked");
    if(!source || !destination){
      errorToast("Please enter both Source and Destination");
      
      return false;
    }else if (!departureDate){
      errorToast('Please select a Departure Date');
      
    } else if(source === destination){
      errorToast("Source and Destination cannot be the same. Please enter different Junction.");
    } else {
      
      const dateParam = dayjs(departureDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      

      navigate(`searchResults/${dateParam}`, { state: {source,destination,departureDate} });
    }
  }


  return (
    <main>
      <div className="bgSvgBus"></div>
      <ContentWrapper>
        {/* <ComingSoon /> */}

        <SearchSection busProp={busProp} onSubmitForm = {onSubmitForm} />
        <OfferSection/>
      </ContentWrapper>
    </main>
  );
};

export default Bus;
