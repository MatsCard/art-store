import React from 'react'
import Nav from './nav'
import logo from './../images/logo.png'
import { Link } from 'gatsby'
import './header.scss'


const Header = () => (
  <header className="header">
    
    <div className="container d-flex justify-content-between align-items-center">

    <Link to="/" className="header-logo">
      <img src={logo} alt="logo" /></Link>

    <Link to="/" className="header-home">
      <h2 className="header-title">Home</h2>
    </Link>
    </div>
    <Nav />

  </header>
)

export default Header
