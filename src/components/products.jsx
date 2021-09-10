import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import priceFormat from '../utils/priceFormat'
import './products.css'
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
      <h2>Products</h2>
      <section>
        {productsSearched.map(({ node }) => {
          if (node.product.active) {
            const price = priceFormat(node.unit_amount)
            return (
              <article key={node.id}>
                <img className="img-fluid" src={node.product.metadata.img} alt={node.product.name} />
                <p>{node.product.name}</p>
                <small>USD {price}</small>
                <Link to={`/${node.id}`}>
                    Buy Now <span>→</span>
                </Link>
              </article>
            )

          } return null;
        })}
        </section>
      </section>
    )
  }
  