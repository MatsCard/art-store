import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'/* 
import { Button, StyledCart } from '../styles/components' */
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'
import './cart.scss'

export default function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()


  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.unit_amount * current.qty, 0)
    )
  }

  useEffect(() => {
    setStripe(window.Stripe(String(process.env.STRIPE_PK)))
    getTotal()
  }
  , [])

  const handleSubmit = async e => {
    e.preventDefault()

    const item = cart.map(({ id, qty }) => ({
      price: id,
      quantity: qty,
    }))

    console.log(item)
    console.log(String(process.env.SUCCESS_REDIRECT))
    console.log(typeof (process.env.SUCCESS_REDIRECT))
    console.log(stripe)

    const { error } = await stripe.redirectToCheckout({
      lineItems: item,
      mode: 'payment',/* 
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT, */
      successUrl: "https://matscard-art-store.netlify.app/success",
      cancelUrl: "https://matscard-art-store.netlify.app/cancel",
   })
   if (error) {
      throw error
    }
  }

  return (
    <section className="cart container">
      <h1 className="cart-title">Your Cart</h1>
      <table className="cart-table">
        <tbody>
          <tr className="cart-table-titles">
            <th className="cart-column">Product</th>
            <th className="cart-column">Price</th>
            <th className="cart-column">Qty.</th>
            <th className="cart-column">Total</th>
          </tr>

          {cart.map(swag => (
            <tr key={swag.id}>
              <td >
                <img className="cart-img"src={swag.metadata.img} alt={swag.name}/>
                {swag.name}
              </td>
              <td>USD {priceFormat(swag.unit_amount)}</td>
              <td>{swag.qty}</td>
              <td>{priceFormat(swag.qty * swag.unit_amount)}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <nav className="cart-nav">
        <div className="cart-nav-items">
          <h3>Subtotal: </h3>
          <small className="cart-price">USD: {priceFormat(total)}</small>
        </div>
        <div className="cart-nav-items">
          <Link to='/'>
            <button className="btn  btn-outline-info" type='outline'>Volver</button>
          </Link>
          <button className="btn btn-primary btn-product" onClick={handleSubmit} disabled={cart.length === 0}>Comprar</button>
        </div>
      </nav>

    </section>
  )
}
