import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Social from '../components/social'

import '../styles/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                "Sarah Katz's personal portfolio website - javascript developer",
            },
            {
              name: 'keywords',
              content: 'javascript, developer, react, gatsby',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">{children}</div>
        <Social />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
