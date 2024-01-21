import React from 'react'
import MyTripNav from './MyTripNav'
import ProfileNav from './ProfileNav'


const MyAccount = () => {
  return (
    <div className='flex'>
        <MyTripNav/>
        <ProfileNav/>
    </div>
  )
}

export default MyAccount