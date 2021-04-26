import React from 'react'
import Link from 'gatsby-link'

import '../styles/layout.css'

const Header = ({ siteTitle }) => (
  <div className="titleContent">
    <Link key="home" to="/">{name}<h1 className="title">
      {siteTitle}
    </h1></Link>
    <div className="subtitle">
      NYC-Based Full Stack JS Developer
    </div>
  </div>
)

export default Header
