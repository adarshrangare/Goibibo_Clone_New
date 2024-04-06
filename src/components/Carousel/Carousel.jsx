import { Skeleton, Space } from "antd";
import SkeletonButton from "antd/es/skeleton/Button";
import SkeletonImage from "antd/es/skeleton/Image";
import React from "react";
import { useRef } from "react";

import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import { ContentWrapper } from "../";
import OfferCard from "../OfferCard/OfferCard";

const Carousel = ({ offers, loading }) => {
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
          <div
            className="carouselItems flex overflow-x-scroll gap-2.5 overflow-y-hidden py-0  "
            ref={carouselContainer}
          >
            {!loading
              ? offers.map((offer) => {
                  return <OfferCard key={offer?.id} {...offer} />;
                })
              : [1, 2, 3, 4, 5].map((item) => (
                  <Skeleton
                    key={item}
                    className="max-w-[20rem] w-[20rem] md:w-[476px] md:max-w-[476px]  h-[220px] p-4 m-2 border rounded-lg hover:shadow-all shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300"
                    active={true}
                  />
                ))}
          </div>
        }
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
