import React from 'react'

const SearchButton = ({type, className,handleSubmit}) => {
  return (
    <button className={`${className} uppercase transition-all text-nowrap `}
      onClick={handleSubmit}
    >
        SEARCH {type}
    </button>
  )
}

export default SearchButton