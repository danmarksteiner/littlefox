import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import './blog.scss'

class BlogIndex extends React.Component {
  render() {
    const blogPosts = get(this.props, 'data.allContentfulBlogPost')
    return (
      <div className="blog-post-list">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        </Helmet>
        <div className="container">
          <div className="row">
            <ul>
              {blogPosts.edges.map((blogPost) => (
                <li key="blogPost.node.id">
                  <a href={blogPost.node.url}>
                    <Img fluid={blogPost.node.mainImage.fluid} />
                    <h3>{blogPost.node.title}</h3>
                    <span>
                      {blogPost.node.author.authorName}&nbsp;|&nbsp;
                      {blogPost.node.author.role}
                    </span>
                    <br />
                    <span>{blogPost.node.publishDate}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          url
          title
          author {
            authorName
            role
          }
          publishDate
          mainImage {
            file {
              url
            }
            fluid(maxWidth: 275, maxHeight: 172, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          postCopy {
            json
          }
        }
      }
    }
  }
`
