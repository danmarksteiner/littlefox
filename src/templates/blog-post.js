import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    // const post = get(this.props, 'data.contentfulBlogPost')
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return <div>Blog Post template</div>
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   // query BlogPostBySlug($slug: String!) {
//   //   site {
//   //     siteMetadata {
//   //       title
//   //     }
//   //   }
//   //   contentfulBlogPost(slug: { eq: $slug }) {
//   //     title
//   //     publishDate(formatString: "MMMM Do, YYYY")
//   //     heroImage {
//   //       fluid(maxWidth: 1180, background: "rgb:000000") {
//   //         ...GatsbyContentfulFluid_tracedSVG
//   //       }
//   //     }
//   //     body {
//   //       childMarkdownRemark {
//   //         html
//   //       }
//   //     }
//   //   }
//   // }
// `
