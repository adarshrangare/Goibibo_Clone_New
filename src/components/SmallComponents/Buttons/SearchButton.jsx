import React from 'react'

const SearchButton = ({type, className}) => {
  return (
    <button className={`${className} uppercase transition-all `}>
        SEARCH {type}
    </button>
  )
}

export default SearchButton