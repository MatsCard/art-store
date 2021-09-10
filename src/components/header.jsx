import React from 'react'
import Nav from './nav'
import logo from './../images/logo.png'
import { Link } from 'gatsby'


const Header = () => (
  <main className="">
    
    <div className="container">

    <Link to="/" className="link-secondary">
    <img src={logo} alt="logo image" /></Link>
    </div>
    <Nav />

  </main>
)

export default Header
