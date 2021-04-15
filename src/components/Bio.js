import React from 'react'
import RichTextRenderer from '../components/RichTextRenderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import './Bio.scss'

const Bio = ({ bio }) => {
  if (bio) {
    return (
      <div className="bio" id="bio">
        <div className="container">
          {/* <RichTextRenderer richTextDocument={bio.bioCopy} /> */}
          <section>{documentToReactComponents(bio.bioCopy.json)}</section>
          {/* <p>To find out more about my services and how I can bring your ideas to life, click here</p>
          <p>Heard enough? Contact me and we’ll chat!</p> */}
          {/* <Img fluid={{ ...bio.bioImage.fluid, aspectRatio: 1 / 1 }} /> */}
        </div>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default Bio
