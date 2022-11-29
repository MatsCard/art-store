import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import priceFormat from '../utils/priceFormat'
import './products.scss'
import { CartContext } from '../context'

export default function Products({ products }) {
  
  const { search } = useContext(CartContext)

  const [productsSearched, setProducts] = useState(products)

  useEffect(e => {
    if (search === "") {
      return setProducts(products)
    } 
    setProducts(products.filter(product => product.node.product.name.toLowerCase().includes(search.toLowerCase())))


  }, [search])


  return (
    <section className="products container">
      <h2 className="products-title">Products</h2>
      <section className="products-single">
        {productsSearched.map(({ node }) => {
          if (node.product.active) {
            const price = priceFormat(node.unit_amount)
            return (
              <article className="products-article" key={node.id}>
                <img className="img-fluid products-img " src={node.product.metadata.img} alt={node.product.name} />
                <p className="products-name">{node.product.name}</p>
                <small  className="products-currency">USD {price}</small>
                <Link to={`/${node.id}`} className="products-cta">
                    Buy Now <span className="products-arrow">→</span>
                </Link>
              </article>
            )

          } return null;
        })}
        </section>
      </section>
    )
  }
  


  