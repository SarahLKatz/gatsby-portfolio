import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import '../styles/indexPage.css'

const IndexPage = ({data}) => {
  const {resume, tech, projects, blog} = data
  return (
    <Layout>
      <section className="container">
        <article className="pageContainer">
          <div
            className="pageLink"
            style={{
              backgroundImage: `url(${resume.childImageSharp.fluid.src})`,
              backgroundPosition: '350px',
            }}
          >
            <Link to="/resume">
              <span>RESUME</span>
            </Link>
          </div>
        </article>
        <article className="pageContainer">
          <div
            className="pageLink"
            style={{
              backgroundImage: `url(${tech.childImageSharp.fluid.src})`,
              backgroundPosition: '500px',
            }}
          >
            <Link to="/tech">
              <span>TECH STACK</span>
            </Link>
          </div>
        </article>
        <article className="pageContainer">
          <div
            className="pageLink mute"
            style={{
              backgroundImage: `url(${projects.childImageSharp.fluid.src})`,
              backgroundPosition: '350px',
            }}
          >
            <Link to="/projects">
              <span>PROJECTS</span>
            </Link>
          </div>
        </article>
        <article className="pageContainer">
          <div
            className="pageLink"
            style={{
              backgroundImage: `url(${blog.childImageSharp.fluid.src})`,
              backgroundPosition: '350px',
            }}
          >
            <Link to="/blog">
              <span>BLOG</span>
            </Link>
          </div>
        </article>
      </section>
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
    projects: file(relativePath: { eq: "projects.jpg" }) {
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
