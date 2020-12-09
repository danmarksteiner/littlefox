import React, { Component } from 'react'
import Img from 'gatsby-image'
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import './Hero.scss'

class Hero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logo: '',
      headerBackgroundImage: '',
      navOpen: false
    }
  }

  navigationToggle = (e) => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  navIcon = () => {
    if(this.state.navOpen === false) {
      return (
        <IoIosMenu className="navigation-close-icon" />
      )
    } else {
      return (
        <IoIosClose className="navigation-open-icon" />
      )
    }

  }
  render () {
    return (
      <div className="hero">
        <Img className="header-bg" fluid={{ ...this.props.headerBackgroundImage.headerBackgroundImage.fluid, aspectRatio: 1 / 1 }} />
        <div className="header-gradient"></div>
        <nav className={(this.state.navOpen) ? 'navigation open' : 'navigation closed'}>
            <ul>
              <li>About me</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Get in touch</li>
            </ul>
            <ul className="social">
              <li><SiFacebook /></li>
              <li><SiTwitter /></li>
              <li><SiInstagram /></li>
            </ul>
        </nav>

        <div className="logo">
          <Img fluid={{ ...this.props.logo.logo.fluid, aspectRatio: 1 / 1 }} />
          <a href="">Services</a>
          <a href="">Get In Touch</a>
        </div>

        <div className="arrow-link">
          <a href="#bio"><IoIosArrowDown /></a>
        </div>

        <a href="#" className='navigation-menu' onClick={this.navigationToggle}>{this.navIcon()}</a>
      </div>
    )
  }
}

export default Hero
