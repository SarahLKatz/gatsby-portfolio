import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import '../styles/resume.css'

const AboutPage = ({data}) => (
  <Layout>
    {/* Resume, Tech, etc */}
    <a href={data.file.publicURL} className="itemTitle">Downloadable Resume</a>
  </Layout>
)

export default AboutPage

export const query = graphql`
  {
    file(relativePath: { eq: "Sarah-Katz-Resume.pdf" }) {
      publicURL
    }
  }
`