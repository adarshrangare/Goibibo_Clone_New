import React from 'react'

const HotelOfferCard = () => {
  return (
    <div className="offerContainer my-6 ">
            <div className=" max-w-[20rem] w-[20rem] md:w-[476px] md:max-w-[476px]  h-[220px] md:h-fit   m-2 border rounded-lg hover:shadow-all shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300">
              <img
                src="https://gos3.ibcdn.com/offers-640X268-1707390575.jpg"
                alt="offer"
              />
              <h2 className="w-10/12 p-1 px-3">
                Get up to 50% OFF on hotels & homestays.{" "}
              </h2>
              <p className="w-10/12 text-sm text-slate-500 px-3 pb-2 md:pb-4">
                Valid till: 7th Dec'24
              </p>
            </div>
          </div>
  )
}

export default HotelOfferCard