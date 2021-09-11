import React from 'react'
import './footer.css'


const Footer = () => (
  <footer className="footer-container ">
    
    <div className="container flex-column flex-md-row d-flex justify-content-between pb-3 pt-4 pt-md-5">

      <div className="about">
        <h6 className="fw-bold pb-0 pb-md-2">Contact me</h6>
        <h6>mats.cardone@gmail.com</h6>
      </div>
      <div className="location">
        <h6 className="fw-bold pb-0 pb-md-2 pt-2 pt-md-0">You can find us at:</h6>
        <h6>Las robles 453 street</h6>
        <h6>From 08:00 to 18:00</h6>
      </div>
      <div className="socials">
        <h6 className="fw-bold pb-0 pb-md-2 pt-2 pt-md-0">Socials</h6>
        <div>
          <i className="fab fa-github"> </i>
          <a href="https://github.com/MatsCard">Github</a>

        </div>
        <div>
          <i className="fab fa-instagram"> </i>
          <a href="https://www.instagram.com/matscard/">Instagram</a>
        </div>
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
