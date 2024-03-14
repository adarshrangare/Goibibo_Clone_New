import React from 'react'
import dayjs from "dayjs";
const CheckDetails = ({date,name,time,guest}) => {
  return (
    <div className="">
          <div className="title text-sm text-gray-500">{name}</div>
          <div className='font-semibold leading-5 my-1'>  { date && dayjs(date).format('ddd, DD MMM, YYYY')}
            {guest && guest}
           </div>
          <div className='text-sm text-gray-500'>{time}</div>
        </div>
  )
}

export default CheckDetails