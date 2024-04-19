import React from "react";
import { Carousel } from "antd";
import { MyImageComponent } from "../../components";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselAntD = ({ images }) => (
  <Carousel autoplay className="w-full md:w-[600px] bg-slate-400  rounded-xl object-center overflow-hidden" >
    {images && images.map((image, index) => <div className="w-full max-h-[400px] min-h-[400px] overflow-hidden" key={index}>
        {/* <img src={image} alt="hotelImages" className="md:w-full md:h-[500px]" width={600} height={600} /> */}
        <MyImageComponent src={image} alt="hotelImages" className="md:w-full md:h-[500px]" width={600} height={600}/>
    </div>)}
  </Carousel>
);

export default CarouselAntD;
