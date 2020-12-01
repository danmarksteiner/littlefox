import React from 'react'
import Img from 'gatsby-image'
import './Hero.scss'

const Hero = ({ logo, headerBackgroundImage }) => {
  return (
    <div className="hero">
      <Img className="header-bg" fluid={{ ...headerBackgroundImage.headerBackgroundImage.fluid, aspectRatio: 1 / 1 }} />
      <div className="header-gradient"></div>
      <nav className="navigation">
          <ul>
            <li>About me</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Get in touch</li>
          </ul>
      </nav>

      <div className="logo">
        <Img fluid={{ ...logo.logo.fluid, aspectRatio: 1 / 1 }} />
        <a href="">Services</a>
        <a href="">Get In Touch</a>
      </div>
    </div>
  )
}

export default Hero
