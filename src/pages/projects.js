import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import '../styles/projects.css'

import github from '../images/github.png'

const Projects = ({ data: { allProjectsJson } }) => {
  const projects = allProjectsJson.edges
  const sampleProj = projects[0].node
  console.log(sampleProj)
  // const image = require(`../images/${sampleProj.image}`)
  return (
    <Layout>
      <div className="allProjects">
        {projects.map(({ node }) => (
          <div className="project">
            <img src={require(`../images/${node.image}`)} alt="" />
            <div className="projectLinks">
              {node.github && (
                <a href={node.github}>
                  <img src={github} alt="github repository" />
                </a>
              )}
              {node.live && <a href={node.live}>🌐</a>}
              {node.demo && <a href={node.live}>📹</a>}
            </div>
            <div className="projectName">{node.name}</div>
            <p className="projectItal">{node.date}</p>
            <p>{node.description}</p>
            <p className="projectItal">Tech: {node.tech}</p>
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
  }
`