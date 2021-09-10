import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import monaLisa from './../images/monalisa2.svg'

const JumboText = {
  color: "#1962d0"
}

const Jumbo = () => (
  <div className="container">
    <div className="row align-items-center">

    <h1 style={JumboText} className="col col-7">
      The best artsy store in the planet, get a piece of someone soul here!!

    </h1>
    <StaticImage className="col col-5"
    src='./../images/monalisa.png' 
    alt="Mona Lisa" 
    width={500}/>
    </div>

  </div>
)

export default Jumbo
