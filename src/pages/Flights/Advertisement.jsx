import React from 'react'
// import image from '../../assets/advertisment.jpg'
import image from '../../assets'
const Advertisement = () => {
  return (
    <div className=" mt-16 mb-10 w-full h-fit rounded-lg mx-auto cursor-pointer overflow-hidden md:my-20 md:w-8/12 shadow"> 
        {/* // Ad */}
            <a href="https://goibibo-clone-new.vercel.app/"><img src={"https://raw.githubusercontent.com/adarshrangare/Goibibo_Clone/main/advertisment.jpg"} className="w-full" alt="advertisment"/></a>

        </div>
  )
}

export default Advertisement