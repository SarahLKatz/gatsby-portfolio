import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Nav from '../components/nav'
import Social from '../components/social'

import '../styles/default.css'
import '../styles/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
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
        <header className="header">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="navSocial">
            <Nav menuLinks={data.site.siteMetadata.menuLinks} />
            <Social />
           </div>
        </header>
        <section className="content">{children}</section>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout