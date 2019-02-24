import React from 'react'
import Layout from '../components/layout'

const ResumePage = () => (
  <Layout>
    <div>
      <h3>Work History</h3>
      <div>
        <h5 style={{marginBottom: '1px'}}>Techolution ~ Fullstack UI Developer</h5>
        <h6 style={{margin: '0px'}}>New York, NY ~ February 2018 - Present</h6> {/* SPACING! */}
        <p style={{fontSize: '16px', lineHeight: '16px'}}>
          100% onsite position at a client (fashion retail and ecommerce brand), co-heading automation testing department and working on front end feature development and bug fixes.
        </p> {/* SPACING! */}
      </div>
      <div>
        <h5 style={{marginBottom: '1px'}}>Sarah L.K. Design Works ~ Graphic Designer</h5>
        <h6 style={{margin: '0px'}}>Holliswood, NY ~ August 2013 - May 2017 (Part-Time)</h6> {/* SPACING! */}
        <p style={{fontSize: '16px', lineHeight: '16px'}}>
          Designed primarily print-based promotional graphics, flyers, and pamphlets for clients.
        </p> {/* SPACING! */}
      </div>
    </div>
    <div>
      <h3>Educational History</h3>
      <div>
        <h5 style={{marginBottom: '1px'}}>Fullstack Academy of Code</h5>
        <h6 style={{margin: '0px', marginBottom: '2vh'}}>NYC Web Development Fellowship ~ August 2017 - December 2017</h6> {/* SPACING! */}
      </div>
      <div>
        <h5 style={{marginBottom: '1px'}}>General Assembly</h5>
        <h6 style={{margin: '0px', marginBottom: '2vh'}}>Front End Web Development (Part-Time Course) ~ January 2017 - March 2017</h6> {/* SPACING! */}
      </div>
      <div>
        <h5 style={{marginBottom: '1px'}}>Fashion Institute of Technology, School of Continuing and Professional Studies</h5>
        <h6 style={{margin: '0px', marginBottom: '2vh'}}>Certificate in Computer Essentials for Graphic Design ~ September 2013 - December 2014</h6> {/* SPACING! */}
      </div>
      <div>
        <h5 style={{marginBottom: '1px'}}>SUNY Downstate Medical Center, College of Health Related Professions</h5>
        <h6 style={{margin: '0px', marginBottom: '0px'}}>BS, Health Sciences ~ June 2009 - May 2010</h6> {/* SPACING! */}
        <h6 style={{margin: '0px', marginBottom: '2vh'}}>DPT, Incomplete ~ June 2009 - December 2011</h6> {/* SPACING! */}
      </div>
      <div>
        <h5 style={{marginBottom: '1px'}}>Yeshiva University, Stern College for Women</h5>
        <h6 style={{margin: '0px', marginBottom: '2vh'}}>BA, Biology ~ August 2004 - May 2008</h6> {/* SPACING! */}
      </div>
    </div>
  </Layout>
)

export default ResumePage