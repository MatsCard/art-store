import React from 'react';
import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="layout">
    <Header/>
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
 export default Layout
 