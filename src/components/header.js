import React from 'react'

import '../styles/layout.css'

const Header = ({ siteTitle }) => (
  <div className="titleContent">
    <h1 className="title">
      {siteTitle}
    </h1>
    <h2 className="subtitle">
      NYC-Based Full Stack JS Developer
    </h2>
  </div>
)

export default Header
