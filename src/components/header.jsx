import React from 'react'
import Nav from './nav'
import logo from './../images/logo.png'
import { Link } from 'gatsby'
import './header.css'


const Header = () => (
  <main className="">
    
    <div className="container d-flex justify-content-between align-items-center">

    <Link to="/" className="link-secondary">
    <img src={logo} alt="logo image" /></Link>

    <Link to="/" className="link-home">
      <h4>Home</h4>
    </Link>
    </div>
    <Nav />

  </main>
)

export default Header
