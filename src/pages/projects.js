import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/project'
import '../styles/projects.css'

const Projects = ({data}) => {
  return (
    <Layout>
      {
        data.allProjectsJson.edges.map(edge => (
          <Project projectData={edge.node} />)
        )
      }
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query {
    allProjectsJson(sort: {
      fields: [sort]
      order: DESC
    }) {
      edges {
        node {
          name
          image
          date
          at
          description
          github
          live
          demo
          tech
        }
      }
    }
  }
`
