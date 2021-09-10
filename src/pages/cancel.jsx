import React from 'react';
import SEO from '../components/seo'
import { Link } from 'gatsby';
import './success.css'

export default function cancelar() {
  return (
    <div>
      <SEO title='Order cancelled'/>
      <div className="purchase text-center">
        <h1>Order cancelled</h1>
        <span role='img' aria-label='emoji'>💔</span>
        <Link to='/'>
          <button className="btn btn-primary btn-product">Go back to our catalogue</button>
        </Link>
      </div>
    </div>
  )
}
