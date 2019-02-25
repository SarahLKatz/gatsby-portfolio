import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import resume from '../images/resume.jpg'
import techstack from '../images/techstack.jpg'
import blog from '../images/blog.jpg'
import '../styles/indexPage.css'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="pageContainer">
        <div
          className="pageLink"
          style={{
            backgroundImage: `url(${resume})`,
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
            backgroundImage: `url(${techstack})`,
            backgroundPosition: '550px',
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
            backgroundImage: `url(${blog})`,
            backgroundPosition: '500px',
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

export default IndexPage