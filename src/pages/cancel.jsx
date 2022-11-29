import React from 'react';
import SEO from '../components/seo'
import { Link } from 'gatsby';
import './success.scss'

export default function cancelar() {
  return (
    <div>
      <SEO title='Order cancelled'/>
      <div className="purchase text-center">
        <h1 className="purchase-title">Order cancelled</h1>        
        <p className="purchase-description">Your cheapness makes me sad</p>
        <span className="purchase-heart" role='img' aria-label='emoji'>💔</span>
        <Link to='/'>
          <button className="btn btn-primary btn-product">Go back to our catalogue</button>
        </Link>
      </div>
    </div>
  )
}
