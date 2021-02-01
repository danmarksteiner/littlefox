import React from 'react'
import RichTextRenderer from '../components/RichTextRenderer'
import Img from 'gatsby-image'
import './About.scss'

const About = ({ aboutContent, accreditations }) => {
  return (

  <div id="About" className="about-section">
    <div className='mobile-image'>
      <Img fluid={{ ...aboutContent.sectionImage.fluid, aspectRatio: 1 / 1 }} />
    </div>
    <div>
      {/* <h2>{aboutContent.sectionHeading}</h2> */}
      <h2>{aboutContent.sectionSubtitle}</h2>
      <RichTextRenderer richTextDocument={aboutContent.sectionBody} />
      <div className="accreditations">
        {accreditations.edges.map((accreditation) => (
          <a key={accreditation.node.id} href={accreditation.node.accreditationLink} target="_blank"><Img fluid={{ ...accreditation.node.accreditationLogo.fluid }} alt={accreditation.node.name} /></a>
        ))}    
      </div>
    </div>
    <div className='desktop-image'>
      <Img fluid={{ ...aboutContent.sectionImage.fluid, aspectRatio: 1 / 1 }} />
    </div>
  </div>
  )
}

export default About