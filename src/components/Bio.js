import React from 'react'
import RichTextRenderer from '../components/RichTextRenderer'
import Img from 'gatsby-image'
import './bio.scss'

const Bio = ({ bio }) => {
  if (bio) {
    return (
      <div className="bio">
        <div className="container">
          <RichTextRenderer richTextDocument={bio.bioCopy} />
          <Img fluid={{ ...bio.bioImage.fluid, aspectRatio: 1 / 1 }} />
        </div>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default Bio
