import React from 'react'
import ProductDetail from '../components/productDetail'

export default function Product({ pageContext }) {
  return (
    <ProductDetail {...pageContext}>
            Producto
    </ProductDetail>
  )
}
