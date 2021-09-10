import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'/* 
import { Button, StyledCart } from '../styles/components' */
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'
import './cart.css'

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
    console.log(env.STRIPE_PK)
    setStripe(window.Stripe(`${process.env.STRIPE_PK}`))
    getTotal()
  }
  , [])

  const handleSubmit = async e => {
    e.preventDefault()

    const item = cart.map(({ id, qty }) => ({
      price: id,
      quantity: qty,
    }))

    const { error } = await stripe.redirectToCheckout({
      lineItems: item,
      mode: 'payment',
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })
    if (error) {
      throw error
    }
  }

  return (
    <section className="styled-cart container">
      <h2>Your Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => (
            <tr key={swag.id}>
              <td>
                <img className="styled-cart-img"src={swag.metadata.img} alt={swag.name}/>
                {swag.name}
              </td>
              <td>USD {priceFormat(swag.unit_amount)}</td>
              <td>{swag.qty}</td>
              <td>{priceFormat(swag.qty * swag.unit_amount)}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>USD: {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'>
            <button className="btn btn-light" type='outline'>Volver</button>
          </Link>
          <button className="btn btn-primary btn-product" onClick={handleSubmit} disabled={cart.length === 0}>Comprar</button>
        </div>
      </nav>

    </section>
  )
}
