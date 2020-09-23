import React from 'react'
import Img from 'gatsby-image'
import './Hero.scss'

const Hero = ({ logo }) => {
  return (
    <div className="hero">
      <nav className="navigation">
        <div className="container">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <div className="logo">
        <Img fluid={{ ...logo.logo.fluid, aspectRatio: 1 / 1 }} />
      </div>
    </div>
  )
}

export default Hero
