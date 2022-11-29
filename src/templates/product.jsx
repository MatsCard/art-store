import React from 'react'
import ProductDetail from '../components/product-detail'

export default function Product({ pageContext }) {
  return (
    <ProductDetail {...pageContext}>
            Producto
    </ProductDetail>
  )
}
