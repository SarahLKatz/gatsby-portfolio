import React from 'react'
import Layout from '../components/layout'

import '../styles/resume.css'

const ResumePage = () => (
  <Layout>
    <div>
      <h3>Work History</h3>
      <div>
        <h5 className="itemTitle">
          Techolution ~ Fullstack UI Developer
        </h5>
        <h6 className="itemDates">
          New York, NY ~ February 2018 - Present
        </h6>
        <p className="itemContent">
          100% onsite position at a client (fashion retail and ecommerce brand),
          creating automated testing and working on front end
          feature development and bug fixes.
        </p>
      </div>
      <div>
        <h5 className="itemTitle">
          Sarah L.K. Design Works ~ Graphic Designer
        </h5>
        <h6 className="itemDates">
          Holliswood, NY ~ August 2013 - May 2017 (Part-Time)
        </h6>
        <p className="itemContent">
          Designed primarily print-based promotional graphics, flyers, and
          pamphlets for clients.
        </p>
      </div>
    </div>
    <div>
      <h3>Educational History</h3>
      <div>
        <h5 className="itemTitle">Fullstack Academy of Code</h5>
        <h6 className="itemDates endItem">
          NYC Web Development Fellowship ~ August 2017 - December 2017
        </h6>
      </div>
      <div>
        <h5 className="itemTitle">General Assembly</h5>
        <h6 className="itemDates endItem">
          Front End Web Development (Part-Time Course) ~ January 2017 - March
          2017
        </h6>
      </div>
      <div>
        <h5 className="itemTitle">
          Fashion Institute of Technology, School of Continuing and Professional
          Studies
        </h5>
        <h6 className="itemDates endItem">
          Certificate in Computer Essentials for Graphic Design ~ September 2013
          - December 2014
        </h6>
      </div>
      <div>
        <h5 className="itemTitle">
          SUNY Downstate Medical Center, College of Health Related Professions
        </h5>
        <h6 style={{ margin: '0px', marginBottom: '0px' }}>
          BS, Health Sciences ~ June 2009 - May 2010
        </h6>
        <h6 className="itemDates endItem">
          DPT, Incomplete ~ June 2009 - December 2011
        </h6>
      </div>
      <div>
        <h5 className="itemTitle">
          Yeshiva University, Stern College for Women
        </h5>
        <h6 className="itemDates endItem">
          BA, Biology ~ August 2004 - May 2008
        </h6>
      </div>
    </div>
  </Layout>
)

export default ResumePage
