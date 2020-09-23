import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Img from 'gatsby-image'
import '../components/Services.scss'

class RootIndex extends React.Component {
  render() {
    const littleFoxLogo = get(this.props, 'data.contentfulLittleFoxLogo')
    const bio = get(this.props, 'data.contentfulBio')
    const blogPosts = get(this.props, 'data.allContentfulBlogPost')
    return (
      <div>
        <Hero logo={littleFoxLogo} bio={bio} />
        <Bio bio={bio} />
        <div className="services">
          <div className="container">
            <h2>Services</h2>
            <ul>
              <li>
                <h3>Line Editing</h3>
                <p>
                  <strong>
                    The most detailed form of text-correction. Includes careful
                    attention to sentence structures, clarity &amp; rhythms.
                  </strong>
                </p>
                <p>
                  Suitable for: Non-native speakers, and others with additional
                  needs, such as dyslexia.
                </p>
                <p>
                  Most writers will do better to master prose style &amp;
                  quality themselves, than try to outsource the job.
                </p>
              </li>
              <li>
                <h3>Copy Editing</h3>
                <p>
                  <strong>
                    Typos, spellings and punctuation errors, but extends into
                    consistency, fact-checking &amp; sentence clarity. Further
                    details below.
                  </strong>
                </p>
                <p>
                  Suitable for: Self-publishers, Writers wanting a polish prior
                  to agent submission.
                </p>
                <p>
                  Copy-editing services are not normally required by writers
                  seeking trad publication.
                </p>
              </li>
              <li>
                <h3>Proof Reading</h3>
                <p>
                  <strong>
                    The lightest form of text-correction. Deals largely with
                    typos, spellings and punctuation errors.
                  </strong>
                </p>
                <p>
                  Suitable for: Self-publishers, if text is already very clean.
                </p>
                <p>
                  This service is not normally needed for writers seeking trad
                  publication.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-posts">
          <div className="container">
            <ul>
              {blogPosts.edges.map((blogPost) => (
                <li key={blogPost.node.id}>
                  <p>{blogPost.node.url}</p>
                  <p>{blogPost.node.title}</p>
                  <p>{blogPost.node.author.authorName}</p>
                  <p>{blogPost.node.author.role}</p>
                  <p>{blogPost.node.publishDate}</p>
                  <Img
                    fluid={{
                      ...blogPost.node.mainImage.fluid,
                      aspectRatio: 16 / 9,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
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
    contentfulLittleFoxLogo {
      logo {
        fluid(maxWidth: 2000, maxHeight: 1250, resizingBehavior: SCALE) {
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
