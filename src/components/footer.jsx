import React from 'react'
import './footer.css'
import secondaryLog from './../images/logo-footer.png'


const Footer = () => (
  <footer className="footer-container ">
    
    <div className="container flex-column flex-md-row d-flex justify-content-between pb-3 pt-5">

      <div className="about">
        <h6>Contact me</h6>
        <h6>mats.cardone@gmail.com</h6>
      </div>
      <div className="location">
        <h6>You can find us at:</h6>
        <h6>Las robles 453 street</h6>
        <h6>From 08:00 to 18:00</h6>
      </div>
      <div className="socials">
        <p>
          <i className="fab fa-github"> </i>
          <a href="https://github.com/MatsCard">Github</a>

        </p>
        <p>
          <i className="fab fa-instagram"> </i>
          <a href="https://www.instagram.com/matscard/">Instagram</a>
        </p>
      </div>
    </div>

    <div className="footer-license pt-4 pb-2">
      <div className="footer-license-info container d-flex align-items-center">
        <h6>
          <i className="far fa-copyright"></i> 2021 "MatsCard" License</h6>

      </div>
    </div>

  </footer>
)

export default Footer
