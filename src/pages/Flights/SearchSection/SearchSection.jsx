import React from 'react'
import { useState } from 'react';
import {ContentWrapper} from '../../../components'
import SearchForm from './SearchForm';
const SearchSection = () => {

    

  return (
    <ContentWrapper>
    <section className="searchSection m-3 flex justify-center items-center flex-col gap-5 lg:gap-8 lg:m-6">
      
        <h1
          className=" text-center font-medium text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Domestic and International Flights
        </h1>

        
        <SearchForm />
        
        


    </section>
      </ContentWrapper>
  )
}

export default SearchSection