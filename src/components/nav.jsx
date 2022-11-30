import React, { useContext } from 'react'
import Search from './search'
import { Link } from 'gatsby'
import { CartContext } from '../context'
import './nav.scss';

const navStyle = {
  backgroundColor: "#1992d0",
  border: "5px double #1992d0",
  padding: "10px 0",
}

const navContainer = {
  backgroundColor: "white",
  borderTop: "2px solid #1992d0",
  borderBottom: "2px solid #1992d0",
  padding: "8px 0",
}

const cartBadge = {
  marginTop: "-33px",
}

const Nav = () => {

  
  const { cart } = useContext(CartContext)
  return(
    <div className="" style={navContainer}>
    <nav style={navStyle}>
      
      <div className="nav-content d-flex container justify-content-between">
        <h4 className="nav-phone text-white pt-1">
          <i className="fas fa-phone"></i>
          +54 124 6666666
          </h4>
          <Search />

        <Link to="/cart"  className="position-relative  pt-1">
          <h4 className="text-white">
            <i className="fas fa-shopping-cart"></i>
          </h4>

          { (cart.length !== 0 )  &&
            <span style={cartBadge} className="position-absolute cart-badge start-100 translate-middle badge rounded-circle bg-danger">  
              {cart.length}
            </span>}
        </Link>
      </div>
    </nav>

  </div>
)
}

export default Nav
