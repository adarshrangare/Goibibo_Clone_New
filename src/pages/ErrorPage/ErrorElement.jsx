import React from 'react'
import { BiError } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { ContentWrapper } from '../../components'
const ErrorElement = () => {
  return (
    <div>
        <div className="w-full min-h-screen ">
      <ContentWrapper>
        <div className="contains404  md:w-10/12 my-8 mx-auto">
          <div className="message_404 text-center flex flex-col  items-center justify-center h-full">
            <div className="head404 my-4 flex flex-col items-center gap-2 font-bold text-6xl md:text-7xl text-center text-slate-300">
            <BiError className='inline text-[2em]'/> Something Went Wrong 
            </div>
            <div className="land404 text-2xl font-semibold my-2">There is Glitch in the Matrix! </div>
            <div className="my-2 text-slate-600">
              We're sorry. There is some internal Error, working on it to fix this issue as soon as possible.
            </div>
            <div className="links404 flex gap-4 text-blue-600 w-full items-center justify-center">
              <span className="text-slate-800">Go back to:</span>
              <Link to="/flight">Flights</Link>|<Link to="/hotels">Hotels</Link>
              |<Link to="/trains">Trains</Link>|<Link to="/bus">Buses</Link>
            </div>
            
          </div>
          
        </div>

        
      </ContentWrapper>
    </div>
    </div>
  )
}

export default ErrorElement