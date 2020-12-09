import React from 'react'
import RichTextRenderer from '../components/RichTextRenderer'
import Img from 'gatsby-image'
import './About.scss'

const About = ({ aboutContent }) => {
  return (

  <div className="about-section">
    <div className='mobile-image'>
      <Img fluid={{ ...aboutContent.sectionImage.fluid, aspectRatio: 1 / 1 }} />
    </div>
    <div>
      <h2>{aboutContent.sectionHeading}</h2>
      <h3>{aboutContent.sectionSubtitle}</h3>
      <RichTextRenderer richTextDocument={aboutContent.sectionBody} />
    </div>
    <div className='desktop-image'>
      <Img fluid={{ ...aboutContent.sectionImage.fluid, aspectRatio: 1 / 1 }} />
    </div>
  </div>
  )
}

export default About