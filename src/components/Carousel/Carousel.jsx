import React from "react";
import { useRef } from "react";


import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import {ContentWrapper} from "../";
import OfferCard from "../OfferCard/OfferCard";



const Carousel = ({ offers, loading}) => {
  const carouselContainer = useRef();
  
  

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

        // console.log({scrollAmount,"sL":container.scrollLeft,"width":container.offsetWidth});

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  
  

  return (
    <div className="mb-14">
      <ContentWrapper className="relative">
        
        <IoMdArrowBack
          className="carouselLeftNav arrow text-2xl text-blue-500 bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -left-4 shadow-even"
          onClick={() => navigation("left")}
        />
        <IoMdArrowForward
          className="carouselRightNav arrow text-2xl text-blue-500 bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -right-4 shadow-even"
          onClick={() => navigation("right")}
        />
        {
          <div className="carouselItems flex overflow-x-scroll gap-2.5 overflow-y-hidden py-0  " ref={carouselContainer}>

              {offers.map((offer)=>{
                return <OfferCard key={offer?.id} {...offer}/>
              })}


                {/* <div className="w-56 h-44 m-2 shrink-0 bg-red-300">1</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">2</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">3</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">4</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">5</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">6</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">7</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">8</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">9</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">10</div>
                <div className="w-56 h-44 m-2 shrink-0 bg-red-300">11</div> */}
                


          </div>
        
        }
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
