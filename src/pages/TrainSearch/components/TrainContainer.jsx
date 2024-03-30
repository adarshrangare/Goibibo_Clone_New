import React from 'react'
import TrainCard from './TrainCard'

const TrainContainer = ({trainsList}) => {
  return (
    <div id="trainContainer" className="w-full rounded-md overflow-hidden border-b-2  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-4 ">
        
        { 
            trainsList && trainsList.map(train=>(<TrainCard key={train?._id} {...train} />))
 
        }
      <span className="text-2xl font-normal text-slate-300 py-4 ">{"--"}End of the Page{"--"}</span>
    </div>
  )
}

export default TrainContainer