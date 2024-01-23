import React from 'react'
import image from '../../assets/advertisment.jpg'
const Advertisement = () => {
  return (
    <div className="advertisment m-20 w-full rounded-lg mx-auto overflow-hidden md:w-8/12 "> 

            <img src={image} className="w-full" alt="advertisment"/>

        </div>
  )
}

export default Advertisement