import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import resume from '../images/resume.jpg'
import techstack from '../images/techstack.jpg'
import blog from '../images/blog.jpg'

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            height: '65vh',
            width: '100%',
            backgroundImage: `url(${resume})`,
            backgroundPosition: '350px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2px',
            padding: '50px',
          }}
        >
          <Link to="/resume" style={{ textDecoration: 'none' }}>
            <h3
              style={{
                color: 'black',
                backgroundColor: 'rgba(176,196,222, 0.25)',
              }}
            >
              RESUME
            </h3>
          </Link>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            height: '65vh',
            width: '100%',
            backgroundImage: `url(${techstack})`,
            backgroundPosition: '550px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2px',
            padding: '50px',
          }}
        >
          <Link to="/tech" style={{ textDecoration: 'none' }}>
            <h3
              style={{
                color: 'black',
                backgroundColor: 'rgba(176,196,222, 0.25)',
              }}
            >
              TECH STACK
            </h3>
          </Link>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            height: '65vh',
            width: '100%',
            backgroundImage: `url(${blog})`,
            backgroundPosition: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2px',
            padding: '50px',
          }}
        >
          <a
            href="https://medium.com/@sarahscode"
            style={{ textDecoration: 'none' }}
          >
            <h3
              style={{
                color: 'black',
                backgroundColor: 'rgba(176,196,222, 0.25)',
              }}
            >
              BLOG
            </h3>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage