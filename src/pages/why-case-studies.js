import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents  } from '@contentful/rich-text-react-renderer'
import RichTextRenderer from '../components/RichTextRenderer'
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import './services.scss'
import './why-case-studies.scss'
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
    
    const pageBody = get(this.props, 'data.contentfulWhyCaseStudiesPageBodyRichTextNode.json')
    const headerBackgroundImage = get(this.props, 'data.contentfulServicesHeaderBackground.servicesHeaderImage')

    return (
      <div className="why-case-studies-page">
        <Hero headerBackgroundImage={headerBackgroundImage} pageTitle={'Why Case Studies?'} />
        <div className="services-container">
          <div className="container">
            <RichTextRenderer richTextDocument={pageBody} />
            {/* <div>{documentToReactComponents(pageBody)}</div> */}
          </div>
        </div>
        <ContactForm />
      </div>
    )
  }
}

export default Services

export const pageQuery = graphql`
  query whyCaseStudiesQuery {
    contentfulServicesHeaderBackground {
      servicesHeaderImage {
        fluid(maxWidth: 1920, maxHeight: 1280, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    contentfulWhyCaseStudiesPageBodyRichTextNode {
      json
    }
  }
`