import React from 'react'
import Link from 'gatsby-link'

import '../styles/layout.css'

const Header = ({ siteTitle }) => (
  <header className="headerBackground">
    <div className="headerContent">
      <h1 className="noMargin">
        <Link to="/" className="white">
          {siteTitle}
        </Link>
      </h1>
      <h2 className="noMargin white subtitle">
        NYC-Based Full Stack JS Developer
      </h2>
    </div>
  </header>
)

export default Header
