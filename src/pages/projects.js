import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'gatsby-image'

import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import '../styles/projects.css'

const Projects = ({ data: { allProjectsJson, allImageSharp } }) => {
  const projects = allProjectsJson.edges
  const images = allImageSharp.edges
  return (
    <Layout>
      <div className="allProjects">
        {projects.map(({ node }) => (
          <div className="project" key={node.id}>
            <div className="projectVisual">
              <Img
                fluid={
                  images.filter(image =>
                    image.node.fluid.src.includes(node.image)
                  )[0].node.fluid
                }
                alt={`${node.name} home screen`}
              />
              <div className="projectLinks">
                {node.github && (
                  <a
                    href={node.github}
                    aria-label={`Click to open the code for ${node.name} on GitHub`}
                  >
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                  </a>
                )}
                {node.live && (
                  <a
                    href={node.live}
                    aria-label={`Click to open ${node.name} live on the web`}
                  >
                    <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
                  </a>
                )}
                {node.demo && (
                  <a
                    href={node.demo}
                    aria-label={`Click to open a video presentation of ${node.name}`}
                  >
                    <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <div className="projectText">
              <div className="projectName">{node.name}</div>
              <p className="projectItal">{node.date}</p>
              <p>{node.description}</p>
              <p className="projectItal">Tech: {node.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsJson(
      sort: { fields: [sort], order: DESC }
      limit: 4
      filter: { image: { ne: "" } }
    ) {
      edges {
        node {
          id
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
  }
`