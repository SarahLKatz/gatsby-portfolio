import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import '../styles/indexPage.css'

const IndexPage = ({
  data: { allMarkdownRemark, allProjectsJson, file },
  projImg,
}) => {
  const blog = allMarkdownRemark.edges[0].node
  const project = allProjectsJson.edges[0].node
  return (
    <Layout>
      <section className="container">
        <article className="blurb">
          <hr />
          <div className="about">
            <div className="lazyImage">
              <Img fluid={file.childImageSharp.fluid} alt="Picture of Sarah" />
            </div>
            <div>
              <h2>Hi, I'm Sarah!</h2>
              <p>
                After graduating from a coding bootcamp in late 2017 as a full
                stack engineer, I spent a year working on automated UI testing
                in an agile scrum environment. I am love writing code to create
                beautiful and user-friendly experiences, and I am excited to be
                using this passion in my work as a full stack engineer at a
                healthtech company.
              </p>
              <p>
                Prior to working as a software engineer, I worked in office
                management and graphic design, and I have additional education
                in biology and health sciences.
              </p>
              <Link to="/about">Learn More About Me</Link>
            </div>
          </div>
        </article>

        <article className="blurb">
          <hr />
          <h2>My Latest Project:</h2>
          <h3>{project.name}</h3>
          <div className="blurbProject">
            <div className="lazyImage">
              <Img
                fluid={projImg.node.fluid}
                alt={`${project.name} home screen`}
              />
            </div>
            <div>
              <p>{project.description}</p>
              <a href={project.live}>Live Link</a>
              <a href={project.github}>Code Repository</a>
            </div>
          </div>
          <Link to="/projects">View More Projects</Link>
        </article>

        <article className="blurb">
          <hr />
          <h2>My Latest Blog Post:</h2>
          <h3 className="blurbTitle">{blog.frontmatter.title}</h3>
          <div className="inline">
            <p>
              {blog.excerpt}
            </p>
            <Link to={blog.frontmatter.path}>Finish Reading</Link>
          </div>
          <Link to="/blog">Read More Blog Posts</Link>
        </article>
      </section>
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}, limit: 1, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              id
              excerpt(pruneLength: 750, format: PLAIN)
              frontmatter {
                title
                path
              }
            }
          }
        }
        allProjectsJson(sort: { fields: [sort], order: DESC }, limit: 1) {
          edges {
            node {
              name
              date
              at
              description
              github
              image
              live
              demo
              tech
            }
          }
        }
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        file(relativePath: { eq: "slk.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <IndexPage
        data={data}
        projImg={
          data.allImageSharp.edges.filter(image =>
            image.node.fluid.src.includes(
              data.allProjectsJson.edges[0].node.image
            )
          )[0]
        }
      />
    )}
  />
)