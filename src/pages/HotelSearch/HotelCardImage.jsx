import React, { useState } from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
const fallbackHotelImage = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const HotelCardImage = ({images}) => {

    const [index, setIndex] = useState(Math.round(Math.random())*3);

  return (
    <>

        <LazyLoadImage src={images[index] || fallbackHotelImage }  className="h-full md:h-[75%] shrink-0 min-w-full rounded-md" alt="hotel" />
        
        <div className="md:flex w-full h-[25%] gap-[2px] pt-2 hidden shrink-0 justify-between">
        <LazyLoadImage src={images[0] || fallbackHotelImage} width={40} height={40} className="shrink-0 h-[56px] w-[56px] rounded-md" alt="hotel1" onMouseEnter={()=>{setIndex(0)}}/>
        <LazyLoadImage src={images[1] || fallbackHotelImage} width={40} height={40} className="shrink-0 h-[56px] w-[56px] rounded-md" alt="hotel2" onMouseEnter={()=>{setIndex(1)}}/>
        <LazyLoadImage src={images[2] || fallbackHotelImage} width={40} height={40} className="shrink-0 h-[56px] w-[56px] rounded-md" alt="hotel3" onMouseEnter={()=>{setIndex(2)}}/>
        <LazyLoadImage src={images[3] || fallbackHotelImage} width={40} height={40} className="shrink-0 h-[56px] w-[56px] rounded-md" alt="hotel4" onMouseEnter={()=>{setIndex(3)}}/>
        

        </div>


    </>
  )
}

export default HotelCardImage