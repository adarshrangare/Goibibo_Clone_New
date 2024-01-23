import React from 'react'
import SearchSection from './SearchSection/SearchSection'
import {ContentWrapper} from '../../components'
import Advertisement from './Advertisement'
import OfferSection from './OfferSection/OfferSection'

const Flights = () => {
  return (
    <main>
       <ContentWrapper>
          
          <SearchSection/>


          <Advertisement/>          

          <OfferSection/>


       </ContentWrapper>
      


    </main>
  )
}

export default Flights