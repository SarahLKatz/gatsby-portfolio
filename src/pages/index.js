import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import '../styles/indexPage.css'

const IndexPage = ({data}) => {
  const {resume, tech, blog} = data
  return (
    <Layout>
      <div className="container">
        <div className="pageContainer">
          <div
            className="pageLink"
            style={{
              backgroundImage: `url(${resume.childImageSharp.fluid.src})`,
              backgroundPosition: '350px',
            }}
          >
            <Link to="/resume">
              <h3>RESUME</h3>
            </Link>
          </div>
        </div>
        <div className="pageContainer">
          <div
            className="pageLink"
            style={{
              backgroundImage: `url(${tech.childImageSharp.fluid.src})`,
              backgroundPosition: '500px',
            }}
          >
            <Link to="/tech">
              <h3>TECH STACK</h3>
            </Link>
          </div>
        </div>
        <div className="pageContainer">
          <div
            className="pageLink"
            style={{
              backgroundImage: `url(${blog.childImageSharp.fluid.src})`,
              backgroundPosition: '350px',
            }}
          >
            <Link to="/blog">
              <h3>BLOG</h3>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    resume: file(relativePath: { eq: "resume.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tech: file(relativePath: { eq: "techstack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blog: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
