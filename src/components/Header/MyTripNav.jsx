import React from 'react'
import { NavLink } from 'react-router-dom'

const MyTripNav = () => {
  
  return (
    <NavLink to={"/mysupport/trips"} className='flex items-center shrink-0 max-[400px]:hidden ' >
        <div className="logo-trip logo-nav w-9 h-9 mr-1"></div>
        <div className="text mr-5">
            <div className="font-semibold text-xs text-blue-600 ">
                My Trip
            </div>
            <div className="font-semibold text-sm text-slate-600">
                Manage Booking
            </div>
        </div>
    </NavLink>
  )
}

export default MyTripNav