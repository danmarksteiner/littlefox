import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Img from 'gatsby-image'
import './blog.scss'
import '../components/Services.scss'
import Services from '../components/Services'
import About from '../components/About'
import ContactForm from '../components/ContactForm'

class RootIndex extends React.Component {
  render() {
    const littleFoxLogo = get(this.props, 'data.contentfulLittleFoxLogo')
    const headerBackgroundImage = get(this.props, 'data.contentfulHeaderBackground')
    const bio = get(this.props, 'data.contentfulBio')
    const blogPosts = get(this.props, 'data.allContentfulBlogPost')
    const services = get(this.props, 'data.allContentfulServices')
    const aboutContent = get(this.props, 'data.contentfulAboutMe')
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        </Helmet>
        <Hero headerBackgroundImage={headerBackgroundImage} logo={littleFoxLogo} bio={bio} />
        <Bio bio={bio} />
        <Services services={services} />
        <About aboutContent={aboutContent} />
        <ContactForm />
        {/* <div className="blog-post-list">
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
        </div> */}
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query MyQuery {
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
            fluid(maxWidth: 2000, maxHeight: 1250, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          postCopy {
            json
          }
        }
      }
    }
    allContentfulServices {
      edges {
        node {
          id
          serviceName
          shortDescription {
            shortDescription
          }
          longDescription {
            longDescription
          }
        }
      }
    }
    contentfulAboutMe {
      sectionHeading
      sectionSubtitle
      sectionImage {
        fluid(maxWidth: 500, maxHeight: 500, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      sectionBody {
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
    contentfulLittleFoxLogo {
      logo {
        fluid(maxWidth: 700, maxHeight: 700) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    contentfulHeaderBackground {
      headerBackgroundImage {
        fluid(maxWidth: 1920, maxHeight: 1280, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    contentfulBio {
      bioImage {
        fluid(maxWidth: 1734, maxHeight: 1734, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      bioCopy {
        content {
          nodeType
          content {
            nodeType
            marks {
              type
            }
            value
          }
        }
      }
    }
  }
`
