import React, { useEffect, useContext } from 'react'
import './search.scss'
import { CartContext } from '../context'

const Search = () => {
  
  const { search, handleSearch } = useContext(CartContext)


  return (
  
  <section className="search">
      <div className="search-container">
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input className="search-input" onChange={(e) => {handleSearch(e.target.value)}} type="search" />
      </div>
    </section>
  )
}

export default Search
