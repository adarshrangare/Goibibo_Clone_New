import React, { useState } from "react";
import { ContentWrapper } from "../../components";
import SearchSection from "./components/SearchSection";
import dayjs from "dayjs";
import "./style.css";
import { Button } from "antd/es/radio";
import { useNavigate } from "react-router-dom";
import { errorToast } from "../../components/Toasts/toast";
import OfferSection from "../Flights/OfferSection/OfferSection";
import CallOfAction from "./components/CallOfAction";
const Trains = () => {
  const [source, setSource] = useState("Delhi Junction");
  const [destination, setDestination] = useState("Indore Junction");
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

  const handleSwap =()=>{
    let temp= source; 
    setTimeout(()=>{
      setSource(destination);
    },0)
    setTimeout(()=>{
      setDestination(temp);
    },0)
    
  }



  const trainProp = {
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
    <main >
      <div className="bgSvgTrain1"></div>
      <div className="bgSvgTrain2"></div>
      <ContentWrapper>
        <SearchSection trainProp={trainProp} onSubmitForm = {onSubmitForm} />
        
        <CallOfAction/>
        

        <OfferSection/>

      </ContentWrapper>
    </main>
  );
};

export default Trains;
