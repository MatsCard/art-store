import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'
import SEO from './seo'
import './product-detail.scss'

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
    <div className="productDetail container justify-content-around my-5">
      <SEO title={name} />
      <div className="productDetail-img">
        <img src={metadata.img} className="img-fluid" alt={name} />

      </div>
      <div>
        <h1 className="productDetail-title">{name}</h1>
        <p className="productDetail-price">USD {formatPrice}</p>
        <small className="productDetail-description">{description}</small>        
        <p className="qty-title">Qty:</p>
        <div className="qty">
          <button className="qty-btn" onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input  className="qty-value" type='text' disabled value={qty} />
          <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
        </div>
        <div className="btn btn-primary btn-product" onClick={handleSubmit}>Add to Cart</div>
      </div>
    </div>
  )
}
