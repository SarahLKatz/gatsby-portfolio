import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import '../styles/resume.css'

const ResumePage = ({data}) => (
  <Layout>
    <article>
      <h3>Work History</h3>
      <div>
        <h4 className="itemTitle">Techolution ~ Fullstack UI Developer</h4>
        <h5 className="itemDates">New York, NY ~ February 2018 - Present</h5>
        <p className="itemContent">
          100% onsite position at a client (fashion retail and ecommerce brand),
          creating automated testing and working on front end feature
          development and bug fixes.
        </p>
      </div>
      <div>
        <h4 className="itemTitle">
          Sarah L.K. Design Works ~ Graphic Designer
        </h4>
        <h5 className="itemDates">
          Holliswood, NY ~ August 2013 - May 2017 (Part-Time)
        </h5>
        <p className="itemContent">
          Designed primarily print-based promotional graphics, flyers, and
          pamphlets for clients.
        </p>
      </div>
    </article>
    <article>
      <h3>Educational History</h3>
      <div>
        <h4 className="itemTitle">Fullstack Academy of Code</h4>
        <h5 className="itemDates endItem">
          NYC Web Development Fellowship ~ August 2017 - December 2017
        </h5>
      </div>
      <div>
        <h4 className="itemTitle">General Assembly</h4>
        <h5 className="itemDates endItem">
          Front End Web Development (Part-Time Course) ~ January 2017 - March
          2017
        </h5>
      </div>
      <div>
        <h4 className="itemTitle">
          Fashion Institute of Technology, School of Continuing and Professional
          Studies
        </h4>
        <h5 className="itemDates endItem">
          Certificate in Computer Essentials for Graphic Design ~ September 2013
          - December 2014
        </h5>
      </div>
      <div>
        <h4 className="itemTitle">
          SUNY Downstate Medical Center, College of Health Related Professions
        </h4>
        <h5 style={{ margin: '0px', marginBottom: '0px' }}>
          BS, Health Sciences ~ June 2009 - May 2010
        </h5>
        <h5 className="itemDates endItem">
          DPT, Incomplete ~ June 2009 - December 2011
        </h5>
      </div>
      <div>
        <h4 className="itemTitle">
          Yeshiva University, Stern College for Women
        </h4>
        <h5 className="itemDates endItem">
          BA, Biology ~ August 2004 - May 2008
        </h5>
      </div>
    </article>
    <a href={data.file.publicURL} className="itemTitle">Downloadable Resume</a>
  </Layout>
)

export default ResumePage

export const query = graphql`
  {
    file(relativePath: { eq: "Sarah-Katz-Resume.pdf" }) {
      publicURL
    }
  }
`

