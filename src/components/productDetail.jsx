import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'
import SEO from './seo'
import './productDetail.css'

export default function ProducDetail({
  unit_amount,
  id,
  product: { name, metadata, description },
}) {
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const formatPrice = priceFormat(unit_amount * qty)
  const { cart, addToCart } = useContext(CartContext)

  const handleSubmit = () => {

    let onCart = false

    cart.map(item => {
      if (item.id === id) {
        onCart = true
        item.qty += qty
        return onCart
      } else return onCart
    })

    if (!onCart) addToCart({ unit_amount, id, name, metadata, qty })

    return cart;

  }

  return (
    <div className="styled-productDetail container justify-content-around">
      <SEO title={name} />
      <img src={metadata.img} className="img-fluid" alt={name} />
      <div>
        <h2>{name}</h2>
        <p className="b">USD {formatPrice}</p>
        <small>{description}</small>        
        <p>Qty:</p>
        <div className="QtySelect">
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type='text' disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
        <div className="btn btn-primary btn-product" onClick={handleSubmit}>Add to Cart</div>
      </div>
    </div>
  )
}
