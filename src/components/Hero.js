import React, { Component } from 'react'
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "gatsby"
import Img from 'gatsby-image'

import './Hero.scss'

class Hero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logo: '',
      pageTitle: '',
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

  Renderlogo = () => {
    if(this.props.logo) {
      return (
        <div className="logo">
          <Img fluid={{ ...this.props.logo.logo.fluid, aspectRatio: 1 / 1 }} />
          <Link to="/services">Services</Link>
          <Link to="#contact">Get In Touch</Link>
        </div>
      )} 
      else if(this.props.pageTitle) { 
        return (
          <div className="page-title">
            <h1>{this.props.pageTitle}</h1>
          </div>
        )
      } else {
        return (
          <div>No Logo</div>
        )
    }
  }
  render () {
    return (
      <div className="hero">
        <Img className="header-bg" fluid={{ ...this.props.headerBackgroundImage.fluid, aspectRatio: 1 / 1 }} />
        <div className="header-gradient"></div>
        <nav className={(this.state.navOpen) ? 'navigation open' : 'navigation closed'}>
            <ul>
            <li><Link to="/">Home</Link></li>
              <li><Link to="../#About">About</Link></li>
              <li><Link to="../services">Services</Link></li>
              <li><Link to="../why-case-studies">Why Case Studies?</Link></li>
              <li><Link to="#contact" onClick={this.navigationToggle}>Contact</Link></li>
            </ul>
        </nav>
        <this.Renderlogo />
        <div className="arrow-link">
          <a href="#bio"><IoIosArrowDown /></a>
        </div>

        <a href="#" className='navigation-menu' onClick={this.navigationToggle}>{this.navIcon()}</a>
      </div>
    )
  }
}
export default Hero
