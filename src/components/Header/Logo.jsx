import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink
        to={"/"}
        className="nav-logo mx-4 w-[115px] h-[40px] shrink-0"
      ></NavLink>
  )
}

export default Logo