import React from 'react'
import { Link } from 'gatsby'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import medium from '../images/medium.png'
import rss from '../images/rss.svg'

import '../styles/layout.css'

const Social = () => (
  <div className="headerBackground">
    <div className="footerContent">
      <a href="https://github.com/sarahlkatz">
        <img src={github} alt="github @sarahlkatz" className="socialImage" />
      </a>
      <a href="https://linkedin.com/in/sarahlkatz">
        <img
          src={linkedin}
          alt="linkedin @sarahlkatz"
          className="socialImage"
        />
      </a>
      <a href="https://twitter.com/sarahscode">
        <img src={twitter} alt="twitter @sarahscode" className="socialImage" />
      </a>
      <Link to="rss.xml">
        <img src={rss} alt="blog rss subscription" className="socialImage" />
      </Link>
      <a href="https://medium.com/@sarahscode">
        <img src={medium} alt="medium @sarahscode" className="socialImage" />
      </a>
    </div>
  </div>
)

export default Social