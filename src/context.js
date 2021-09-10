
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState("")

  const addToCart = element => {
    setCart([...cart, element])
  }  
  
  const handleSearch = element => {
    setSearch(element)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        search, 
        handleSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
