import React from 'react'
// import image from '../../assets/advertisment.jpg'
import image from '../../assets'
const Advertisement = () => {
  return (
    <div className=" mt-16 mb-10 w-full h-fit rounded-lg mx-auto overflow-hidden md:my-20 md:w-8/12 shadow"> 
        {/* // Ad */}
            <img src={image} className="w-full" alt="advertisment"/>

        </div>
  )
}

export default Advertisement