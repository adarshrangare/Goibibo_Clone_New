import React from 'react'

const PrimaryButton = ({label,className}) => {
  return (
    <button className={`${className} uppercase transition-all rounded-full `} type='submit'>
        {label}
    </button>
  )
}

export default PrimaryButton