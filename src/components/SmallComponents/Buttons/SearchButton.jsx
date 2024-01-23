import React from 'react'

const SearchButton = ({type, className}) => {
  return (
    <button className={`${className} uppercase`}>
        SEARCH {type}
    </button>
  )
}

export default SearchButton