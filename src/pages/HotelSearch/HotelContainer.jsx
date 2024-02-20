import React from 'react'
import HotelCard from './HotelCard'
import HotelCardSkeleton from './HotelCardSkeleton'

const HotelContainer = ({hotelsList,isLoading}) => {
  return (
    <div id="hotelContainer" className="w-full rounded-md overflow-hidden border-b-2  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-2 ">
        
        { isLoading ? <> <HotelCardSkeleton/> </> : 
            hotelsList && hotelsList.map(hotel=>(<HotelCard key={hotel?._id} {...hotel} />))
            
        }
      <span className="text-2xl font-normal text-slate-300 py-4 ">{"--"}End of the Page{"--"}</span>
    </div>
  )
}

export default HotelContainer