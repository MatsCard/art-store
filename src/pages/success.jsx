import React from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import './success.scss'

export default function gracias() {
  return (
    <div>
      <SEO title='Completed purchase'/>
      <div className="purchase text-center">
        <h1 className="purchase-title">Your purchase was completed</h1>
        <p className="purchase-description">Keep buying so you look more elegant</p>
        <span className="purchase-heart" role='img' aria-label='emoji'>❤</span>
        <Link to='/'>
          <button className="btn btn-primary btn-product">Go back to our catalogue</button>
        </Link>
      </div>
    </div>
  )
}

