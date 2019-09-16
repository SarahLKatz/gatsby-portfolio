import React from 'react'
import Link from 'gatsby-link'

import '../styles/layout.css'

const Nav = ({ menuLinks }) => (
  <nav className="navLinks">
    {menuLinks.map(({ name, link }) => (
      <Link to={link}>{name}</Link>
    ))}
  </nav>
)

export default Nav