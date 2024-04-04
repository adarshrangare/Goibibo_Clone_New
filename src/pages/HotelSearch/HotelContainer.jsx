import React from 'react'
import HotelCard from './HotelCard'
import { Skeleton } from 'antd'
const HotelContainer = ({hotelsList,isLoading}) => {
  return (
    <div id="hotelContainer" className="w-full rounded-md overflow-hidden border-b-2  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-2 ">
        
        { !isLoading ? 
            hotelsList && hotelsList.map((hotel,index)=>(<HotelCard key={index} {...hotel} />))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Skeleton key={item} active className="border bg-white shadow-lg p-4 rounded-md min-h-60" />
            ))
        }
      <span className="text-2xl font-normal text-slate-300 py-4 ">{"--"}End of the Page{"--"}</span>
    </div>
  )
}

export default HotelContainer