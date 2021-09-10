import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import './success.css'

export default function gracias() {
  return (
    <div>
      <SEO title='Compra Existosa'/>
      <div className="purchase text-center">
        <h2>Your purchase was completed</h2>
        <p>Keep buying so you look more elegant</p>
        <span role='img' aria-label='emoji'>❤</span>
        <Link to='/'>
          <button className="btn btn-primary btn-product">Go back to our catalogue</button>
        </Link>
      </div>
    </div>
  )
}

