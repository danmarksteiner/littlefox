import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import RichTextRenderer from '../components/RichTextRenderer'
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import './services.scss'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

class Services extends Component {

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
    
    const services = get(this.props, 'data.allContentfulServices')
    const headerBackgroundImage = get(this.props, 'data.contentfulServicesHeaderBackground.servicesHeaderImage')

    return (
      <div className="services-page">
        <Hero headerBackgroundImage={headerBackgroundImage} pageTitle={'Services'} />
        <div className="services-container">
          <div className="container">
            {services.edges.map((service) => (
              <div className="services-item" key={service.node.id}>
                <h3>{service.node.serviceName}</h3>
                <RichTextRenderer richTextDocument={service.node.longDescription} />
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    )
  }
}

export default Services

export const pageQuery = graphql`
  query ServiceQuery {
    contentfulServicesHeaderBackground {
      servicesHeaderImage {
        fluid(maxWidth: 1920, maxHeight: 1280, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    allContentfulServices {
      edges {
        node {
          id
          serviceName
          longDescription {
            content {
              content {
                value
                nodeType
                marks {
                  type
                }
              }
              nodeType
            }
          }
        }
      }
    }
  }
`