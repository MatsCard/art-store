import React, { useEffect, useContext } from 'react'
import './search.css'
import { CartContext } from '../context'

const Search = () => {
  
  const { search, handleSearch } = useContext(CartContext)


  return (
  
  <div className="search">    
    <section className="main-input">
          <div className="main-input-container">
            <span className="search-icon">
              <i className="fas fa-search"></i>
            </span>
            <input onChange={(e) => {handleSearch(e.target.value)}} type="search" />
         </div>
      </section>
  </div>
  )
}

export default Search
