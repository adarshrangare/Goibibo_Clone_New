import React from 'react'
import {RadioInput} from '../../../components'
import DateSelect from './DateSelect'
import InputArrays from './InputArrays'

const SearchForm = ({busProp,onSubmitForm}) => {

  const {departureDate,handleDepartureDate} = busProp;
 

  return (
    <div className='formContainer mb-8 bg-white pt-8 w-full md:w-10/12 rounded-2xl shadow-xl relative'>
        <div className=' flex flex-col m-2 md:m-4 gap-4 pb-8' >  

          {/* <RadioInput  label="Book Bus Ticket" name="radio" className='m-4'  /> */}
          
          <div className='flex flex-col md:flex-row items-center'>

              <InputArrays busProp={busProp}/>


            <div className='flex dateContainer max-md:w-10/12 hover:cursor-pointer '> 

            <DateSelect
              value={departureDate}
              handleDepartureDate={handleDepartureDate}
            />

            </div>

          </div>
        </div>
        <button onClick={onSubmitForm} className="rounded-full absolute text-lg truncate text-white font-medium uppercase bg-orange-500 px-8 py-3 -bottom-5 left-1/2 -translate-x-1/2 transition-all active:bg-orange-600 outline-none shadow-lg "> Search Buses</button>
  
    </div>
  )
}

export default SearchForm