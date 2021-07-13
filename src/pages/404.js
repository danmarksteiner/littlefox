import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import './404.scss'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

class notFound extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
  render() {
    const headerBackgroundImage = get(this.props, 'data.contentfulServicesHeaderBackground.servicesHeaderImage')

    return (
      <div className="not-found-page">
        <Hero headerBackgroundImage={headerBackgroundImage} pageTitle={'Page not found'} />
        <div className="services-container">
          <div className="container">
            <h3>Apologies, this page isn't available</h3>
            <p>Please return to the <Link to="./">homepage</Link>.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    )
  }
}

export default notFound

export const pageQuery = graphql`
  query notFoundQuery {
    contentfulServicesHeaderBackground {
      servicesHeaderImage {
        fluid(maxWidth: 1920, maxHeight: 1280, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`