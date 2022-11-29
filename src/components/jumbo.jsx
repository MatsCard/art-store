import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const JumboText = {
  color: " var(--dark-main-color)"
}

const Jumbo = () => (
  <div className="container">
    <div className="row align-items-center">

    <h1 style={JumboText} className="col col-7">
      The best artsy <strong>store</strong> in the planet, get a piece of someone <strong>soul</strong>  here!!
    </h1>
    <StaticImage className="col col-5"
    src='./../images/monalisa.png' 
    alt="jumbo" 
    width={500}/>
    </div>

  </div>
)

export default Jumbo
